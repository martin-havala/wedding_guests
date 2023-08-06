import { KeyValue } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { first } from 'rxjs';

import { DataService } from 'src/app/services/data.service';

@UntilDestroy()
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class CategoriesComponent implements OnInit {
  catColors: { [key: string]: string } | null = null;
  constructor(private ds: DataService) {}

  ngOnInit(): void {
    this.ds.state$
      .pipe(untilDestroyed(this), first())
      .subscribe(({ catColors }) => {
        this.catColors = catColors;
      });
  }

  updateCats(cat: string, value: string) {
    this.ds.updateCatColor(cat, value);
  }

  trackCat(_: number, { key, value }: KeyValue<string, string>) {
    return value;
  }
}
