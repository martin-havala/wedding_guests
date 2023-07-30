import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DataService } from 'src/app/services/data.service';

@UntilDestroy()
@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.sass'],
})
export class PrintComponent implements OnInit {
  constructor(public ds: DataService) {}
  width = 100;
  ngOnInit(): void {
    this.ds.printSettings
      .pipe(untilDestroyed(this))
      .subscribe(({ marginMm, sizeMm, paddingMm }) => {
        this.width = sizeMm + (paddingMm + marginMm) * 2;
      });
  }
}
