import { APP_BASE_HREF } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { first } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { CATEGORIES_MAP, CategoriesMap } from 'src/app/services/defaults';

@UntilDestroy()
@Component({
  selector: 'app-fields-mapper',
  templateUrl: './fields-mapper.component.html',
  styleUrls: ['./fields-mapper.component.sass'],
})
export class FieldsMapperComponent implements OnInit {
  fieldsUrl = `${
    inject(APP_BASE_HREF).replace(/\/$/, '') || '.'
  }/assets/fields.svg`;
  catMap: CategoriesMap = CATEGORIES_MAP;
  keys = Object.keys(CATEGORIES_MAP);

  constructor(private ds: DataService) {}
  ngOnInit(): void {
    this.ds.state$
      .pipe(untilDestroyed(this))
      .subscribe(({ categoriesMap }) => {
        this.catMap = categoriesMap;
      });
  }
  updateValue(key: string, value: string) {
    this.ds.updateCatMap(key, value);
  }
}
