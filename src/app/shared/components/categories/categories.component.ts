import { KeyValue } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ColorPickerChangeEvent } from 'primeng/colorpicker';
import { first } from 'rxjs';

import { DataService } from 'src/app/services/data.service';

@UntilDestroy()
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent implements OnInit {
  catColors: { [key: string]: string } | null = null;
  constructor(private ds: DataService) {}

  ngOnInit(): void {
    this.ds.catColors
      .pipe(untilDestroyed(this), first())
      .subscribe((catColors) => {
        this.catColors = catColors;
      });
  }

  updateCats(cat: string, color: ColorPickerChangeEvent) {
    color.originalEvent.preventDefault();
    color.originalEvent.stopPropagation();
    this.ds.catColors.next({
      ...this.ds.catColors.value,
      [cat]: color.value.toString(),
    });
  }
  trackCat(_: number, { key, value }: KeyValue<string, string>) {
    return value;
  }
}
