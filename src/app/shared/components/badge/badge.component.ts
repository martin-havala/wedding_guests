import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DataService } from 'src/app/services/data.service';

@UntilDestroy()
@Component({
  selector: 'app-badge,[app-badge]',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent implements OnInit {
  @Input() standalone = true;
  @Input() print = false;
  @Input() person: { [key: string]: any } | null = null;

  row1: string = 'name';
  row2: string = 'surname';
  row3: string = 'note';
  lHeartSize: number = 0.75;
  rHeartSize: number = 1;
  sizeMm: number = 25;
  marginMm: number = 5;
  paddingMm: number = 1;
  fontSizeMm10: number = 80;
  padding10 = this.paddingMm * 10;
  margin10 = this.marginMm * 10;
  innerWidthMm10 = this.sizeMm;
  outherWidthMm10 = (this.sizeMm + this.marginMm * 2) * 10;
  width10 = this.outherWidthMm10 + this.paddingMm * 20;
  width10_2 = this.width10 / 2;
  viewBox = `0 0 ${this.width10} ${this.width10}`;
  sizeRatio = this.innerWidthMm10 / 100;

  constructor(public ds: DataService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.ds.printSettings
      .pipe(untilDestroyed(this))
      .subscribe(({ sizeMm, marginMm, fontSizeMm, paddingMm }) => {
        this.sizeMm = sizeMm;
        this.marginMm = marginMm;
        this.paddingMm = paddingMm;
        this.fontSizeMm10 = fontSizeMm * 10;
        this.innerWidthMm10 = this.sizeMm * 10;
        this.margin10 = this.marginMm * 10;
        this.padding10 = this.paddingMm * 10;
        this.outherWidthMm10 = this.innerWidthMm10 + this.margin10 * 2;
        this.width10 = this.outherWidthMm10 + this.padding10 * 2;
        this.width10_2 = this.width10 / 2;
        const w = Math.ceil(this.width10);
        this.viewBox = `0 0 ${w} ${w}`;
        this.sizeRatio = this.innerWidthMm10 / 120;
        this.cdr.markForCheck();
      });

    this.ds.state$
      .pipe(untilDestroyed(this))
      .subscribe(({ categoriesMap, yearExtent, yearRange }) => {
        if (!this.person) {
          return;
        }

        this.row1 = this.person[categoriesMap['name']] ?? '';
        this.row2 = this.person[categoriesMap['surname']] ?? '';
        this.row3 = this.person[categoriesMap['note']] ?? '';
        this.lHeartSize =
          0.75 +
          0.25 *
            Math.pow(
              (this.person[categoriesMap['known_years1']] || 1) /
                (yearRange - yearExtent[0] || 1),
              2
            );
        this.rHeartSize =
          0.75 +
          0.25 *
            Math.pow(
              (this.person[categoriesMap['known_years2']] || 1) /
                (yearRange - yearExtent[0] || 1),
              2
            );
        this.cdr.markForCheck();
      });
  }
}
