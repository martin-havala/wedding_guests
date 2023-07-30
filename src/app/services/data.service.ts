import { Injectable } from '@angular/core';
import { extent, schemeSet2 } from 'd3';
import { autoType, dsvFormat } from 'd3-dsv';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data = new BehaviorSubject<{ [key: string]: any }[]>([]);
  printSettings = new BehaviorSubject<{
    sizeMm: number;
    marginMm: number;
    fontSizeMm: number;
    paddingMm: number;
  }>({ sizeMm: 25, marginMm: 5, fontSizeMm: 8, paddingMm: .5 });
  catColors = new BehaviorSubject<{ [key: string]: string }>({});
  fontFamily = new BehaviorSubject<string>(' ');

  dataTypes: { [key: string]: string } = {};
  categories: string[] = [];
  yearRange: number = 30;
  yearExtent: [number, number] = [0, 30];

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

    this.dataTypes = Object.keys(data[0]).reduce(
      (acc, key) => ({ ...acc, [key]: typeof (data[0] as any)[key] }),
      {}
    );

    this.categories = Object.keys(this.dataTypes)
      .filter((a) => a.toLocaleLowerCase().includes('from'))
      .reduce((acc, category) => {
        return [...new Set([...data.map((a) => (a as any)[category]), ...acc])];
      }, [] as string[])
      .sort();

    this.yearExtent = extent([
      0,
      ...data.map((d: any) => [d['known_years1'], d['known_years2']]).flat(),
    ]) as [number, number];

    this.data.next(data);

    this.prepareCatColors(schemeSet2);
    this.yearRange = this.yearExtent[1] - this.yearExtent[0];
    return data;
  }

  prepareCatColors(colors: readonly string[]) {
    this.catColors.next(
      this.categories.reduce(
        (acc, cat, i) => ({
          ...acc,
          [cat]: colors[i % colors.length],
        }),
        {}
      )
    );
  }

  setFontFamily(fontFamily: string) {
    fontFamily && this.fontFamily.next(fontFamily);
  }
}
