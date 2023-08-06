import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DataService } from 'src/app/services/data.service';

@UntilDestroy()
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.sass'],
  encapsulation: ViewEncapsulation.None,
  host:{
    class:'app-preview'
  }
})
export class PreviewComponent implements OnInit {
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
