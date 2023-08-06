import { Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { first } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@UntilDestroy()
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass'],
})
export class SettingsComponent {
  sizeMm: number = 25;
  fontSizeMm: number = 8;
  marginMm: number = 3;
  paddingMm: number = 1;
  paperWMm = 210;
  paperHMm = 297;
  pages = [
    ['A3', 297, 420],
    ['A4', 210, 297],
    ['A5', 148, 210],
    ['A6', 105, 148],
    ['B5', 176, 250],
    ['C0', 917, 1297],
    ['C1', 648, 917],
    ['C10', 28, 40],
    ['C2', 458, 648],
    ['C3', 324, 458],
    ['C4', 229, 324],
    ['C5', 162, 229],
    ['C6', 114, 162],
    ['C7', 81, 114],
    ['C8', 57, 81],
    ['C9', 40, 57],
    ['Executive', 184.15, 266.7],
    ['Foolscap', 215.9, 342.9],
    ['Government Letter', 203.2, 266.7],
    ['Half Letter', 139.7, 215.9],
    ['ISO B0', 1000, 1414],
    ['ISO B1', 707, 1000],
    ['ISO B10', 31, 44],
    ['ISO B2', 500, 707],
    ['ISO B3', 353, 500],
    ['ISO B4', 250, 353],
    ['ISO B5', 176, 250],
    ['ISO B6', 125, 176],
    ['ISO B7', 88, 125],
    ['ISO B8', 62, 88],
    ['ISO B9', 44, 62],
    ['Junior Legal', 127, 203.2],
    ['Legal', 215.9, 355.6],
    ['Letter', 215.9, 279.4],
    ['Postcard', 101.6, 152.4],
    ['Statement', 139.7, 215.9],
    ['Tabloid / Ledger', 279.4, 431.8],
  ];

  constructor(public ds: DataService) {}

  ngOnInit(): void {
    this.ds.printSettings
      .pipe(untilDestroyed(this), first())
      .subscribe(
        ({ sizeMm, marginMm, paddingMm, fontSizeMm, paperHMm, paperWmm }) => {
          this.sizeMm = sizeMm;
          this.marginMm = marginMm;
          this.paddingMm = paddingMm;
          this.fontSizeMm = fontSizeMm;
          this.paperHMm = paperHMm;
          this.paperWMm = paperWmm;
        }
      );
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
      [key]: val || 0,
    };
    this.ds.printSettings.next(nextVal);
  }
}
