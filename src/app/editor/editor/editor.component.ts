import { APP_BASE_HREF } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { first } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@UntilDestroy()
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorComponent implements OnInit {
  sizeMm: number = 25;
  fontSizeMm: number = 8;
  marginMm: number = 3;
  paddingMm: number = 1;
  sampleUrl = `${
    inject(APP_BASE_HREF).replace(/\/$/, '') || '.'
  }/assets/wedding_list.csv`;

  constructor(private ds: DataService, private http: HttpClient) {}

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
      // TODO
      paperWmm: 210,
      paperHMm: 297,
      [key]: val,
    };
    this.ds.printSettings.next(nextVal);
  }

  loadSample() {
    this.http
      .get(this.sampleUrl, {
        observe: 'response',
        responseType: 'text',
      })
      .subscribe((weds) => this.ds.parseTxt(weds.body ?? ''));
  }
}
