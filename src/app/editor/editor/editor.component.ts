import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { first } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@UntilDestroy()
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.sass'],
})
export class EditorComponent implements OnInit {
  sizeMm: number = 25;
  fontSizeMm: number = 8;
  marginMm: number = 3;
  paddingMm: number = 1;

  constructor(private ds: DataService) {}

  ngOnInit(): void {
    this.ds.printSettings
      .pipe(untilDestroyed(this), first())
      .subscribe(({ sizeMm, marginMm, paddingMm, fontSizeMm }) => {
        this.sizeMm = sizeMm;
        this.marginMm = marginMm;
        this.paddingMm = paddingMm;
        this.fontSizeMm = fontSizeMm;
      });
  }

  makeChange(key: string, val: number) {
    const nextVal = {
      sizeMm: this.sizeMm,
      marginMm: this.marginMm,
      fontSizeMm: this.fontSizeMm,
      paddingMm: this.paddingMm,
      [key]: val,
    };
    this.ds.printSettings.next(nextVal);
  }
}
