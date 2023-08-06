import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Pipe({
  name: 'catColor',
  pure: false,
})
export class CatColorPipe implements PipeTransform {
  constructor(private ds: DataService) {}
  transform(person: { [key: string]: any }, field: string): string {
    const { catColors, categoriesMap } = this.ds.state.value;
    return catColors[person[(categoriesMap as any)[field]]];
  }
}
