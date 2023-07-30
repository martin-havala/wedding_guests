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
  @Input() outline = false;
  @Input() explain = false;

  @Input() person: { [key: string]: any } | null = null;

  readonly explainWidth = 150;
  row1: string = 'name';
  row2: string = 'surname';
  row3: string = 'note';
  lHeartSize: number = 0.75;
  rHeartSize: number = 1;
  sizeMm: number = 25;
  marginMm: number = 5;
  paddingMm: number = 1;
  fontSizeMm: number = 8;
  padding = this.paddingMm * 10;
  margin = this.marginMm * 10 + 5;
  innerWidth = this.sizeMm * 10;
  outherWidth = (this.sizeMm + this.marginMm * 2) * 10;
  width = this.outherWidth + this.paddingMm * 2 * 10;
  width_2 = this.width / 2;
  viewBox = `0 0 ${this.width + (this.explain ? this.explainWidth : 0)} ${
    this.width
  }`;
  sizeRatio = this.innerWidth / 100;

  constructor(public ds: DataService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.ds.printSettings
      .pipe(untilDestroyed(this))
      .subscribe(({ sizeMm, marginMm, fontSizeMm, paddingMm }) => {
        this.sizeMm = sizeMm;
        this.marginMm = marginMm;
        this.paddingMm = paddingMm;
        this.fontSizeMm = fontSizeMm;
        this.innerWidth = this.sizeMm * 10;
        this.margin = this.marginMm * 10;
        this.padding = this.paddingMm * 10;
        this.outherWidth = this.innerWidth + this.margin * 2;
        this.width = this.outherWidth + this.padding * 2;
        this.width_2 = this.width / 2;
        const w = Math.ceil(this.width);
        this.viewBox = `0 0 ${
          w + (this.explain ? this.explainWidth * 2 : 0)
        } ${w}`;
        this.sizeRatio = this.innerWidth / 120;
        this.cdr.markForCheck();
      });

    if (!this.person) {
      return;
    }
    this.row1 = this.person['name'] ?? '';
    this.row2 = this.person['surname'] ?? '';
    this.row3 = this.person['note'] ?? '';
    this.lHeartSize =
      0.75 +
      0.25 *
        Math.pow(
          (this.person['known_years1'] ?? 1) /
            (this.ds.yearRange - this.ds.yearExtent[0]),
          2
        );
    this.rHeartSize =
      0.75 +
      0.25 *
        Math.pow(
          (this.person['known_years2'] ?? 1) /
            (this.ds.yearRange - this.ds.yearExtent[0]),
          2
        );
  }
}
