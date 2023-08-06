import { Injectable } from '@angular/core';
import { extent, schemeSet2 } from 'd3';
import { autoType, dsvFormat } from 'd3-dsv';
import { BehaviorSubject } from 'rxjs';
import {
  CATEGORIES_MAP,
  DEFAULT_STATE,
  DataState,
  PRINT_SETTINGS,
  PrintSettings,
} from './defaults';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  state = new BehaviorSubject<DataState>(DEFAULT_STATE);
  state$ = this.state.asObservable();
  printSettings = new BehaviorSubject<PrintSettings>(PRINT_SETTINGS);
  fontFamily = new BehaviorSubject<string>('');

  constructor() {
    const txtData = localStorage.getItem('textData');
    if (txtData) {
      this.parseTxt(txtData);
    }
  }

  parseTxt(txt: string, store = true) {
    if (store) {
      localStorage.setItem('textData', txt);
    }

    const header = txt.substring(0, txt.indexOf('\n'));
    const delimiter = [
      ['\t', header.match(/\t/g)?.length ?? 0],
      [';', header.match(/\;/g)?.length ?? 0],
      [',', 0],
    ].sort(([, a], [, b]) => (a < b ? 1 : -1))[0][0] as string;

    const data = dsvFormat(delimiter).parse(txt, autoType).map(Object);
    const columns = Object.keys(data[0]);
    const dataTypes = columns.reduce(
      (acc, key) => ({ ...acc, [key]: typeof (data[0] as any)[key] }),
      {}
    );

    const categories = Object.keys(dataTypes)
      .filter((a) => a.toLocaleLowerCase().includes('from'))
      .reduce((acc, category) => {
        return [...new Set([...data.map((a) => (a as any)[category]), ...acc])];
      }, [] as string[])
      .sort();

    const yearExtent = extent([
      0,
      ...data
        .map((d: any) => [
          d[CATEGORIES_MAP['known_years1']],
          d[CATEGORIES_MAP['known_years2']],
        ])
        .flat()
        .filter(Boolean),
    ]) as [number, number];

    const catColors = this.prepareCatColors(categories, schemeSet2);
    const yearRange = yearExtent[1] - yearExtent[0];
    this.state.next({
      data,
      columns,
      catColors,
      categories,
      categoriesMap: CATEGORIES_MAP,
      dataTypes,
      yearExtent,
      yearRange,
    });
    return data;
  }

  prepareCatColors(categories: string[], colors: readonly string[]) {
    return categories.reduce(
      (acc, cat, i) => ({
        ...acc,
        [cat]: colors[i % colors.length],
      }),
      {}
    );
  }

  setFontFamily(fontFamily: string) {
    fontFamily && this.fontFamily.next(fontFamily);
  }

  updateCatColor(cat: string, value: string) {
    this.state.next({
      ...this.state.value,
      catColors: { ...this.state.value.catColors, [cat]: value },
    });
  }

  updateCatMap(cat: string, value: string) {
    const { catColors, categoriesMap, data } = this.state.value;
    const cMap = { ...categoriesMap, [cat]: value };

    if (cat.includes('from')) {
      const cats = Object.keys(categoriesMap)
        .filter((a) => a.includes('from'))
        .reduce((acc, category) => {
          return [
            ...new Set([
              ...data.map((a) => (a as any)[(cMap as any)[category]]),
              ...acc,
            ]),
          ];
        }, [] as string[])
        .sort();
      this.state.next({
        ...this.state.value,
        categoriesMap: cMap,
        categories: cats,
        catColors: this.prepareCatColors(cats, schemeSet2),
      });
    } else if (cat.includes('year')) {
      const yearExtent = extent([
        0,
        ...data
          .map((d: any) => [d[cMap['known_years1']], d[cMap['known_years2']]])
          .flat()
          .filter(Boolean),
      ]) as [number, number];

      this.state.next({
        ...this.state.value,
        categoriesMap: cMap,
        yearExtent,
        yearRange: yearExtent[1] - yearExtent[0],
      });
    } else {
      this.state.next({
        ...this.state.value,
        categoriesMap: cMap,
      });
    }
  }
}
