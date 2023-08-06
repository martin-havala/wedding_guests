import { Pipe, PipeTransform } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DataState } from 'src/app/services/defaults';

@Pipe({
  name: 'fromEachCat',
})
export class FromEachCatPipe implements PipeTransform {
  constructor() {}

  transform(
    values: Observable<DataState>
  ): Observable<{ [key: string]: any }[]> {
    return values.pipe(
      map(({ data, categories, categoriesMap }) => {
        console.log(data, categories);
        if (!data) {
          return [];
        }
        const cats = new Set(categories);
        const res: { [key: string]: any }[] = [];

        if (!cats.size) {
          return data.slice(0, 5);
        }
        for (let i = 0; i < data.length; i++) {
          let push = false;
          if (!cats.size) {
            return res;
          }
          const row = data[i];
          ['known_from1', 'known_from2']
            .map((f) => (categoriesMap as any)[f])
            .forEach((f) => {
              if (cats.has(row[f])) {
                cats.delete(row[f]);
                push = true;
              }
            });
          push && res.push(row);
        }
        return res;
      })
    );
  }
}
