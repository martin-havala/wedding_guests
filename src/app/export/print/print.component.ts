import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { withLatestFrom } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@UntilDestroy()
@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrintComponent implements OnInit, AfterViewInit {
  @ViewChild('svg') svg!: ElementRef;
  loaded = false;
  paperHMm10: number = 10;
  paperWMm10: number = 10;
  constructor(public ds: DataService, private cdr: ChangeDetectorRef) {}

  widthMm10 = 100;
  pages = 0;
  viewbox = '';
  data: { [key: string]: any }[] = [];
  ngOnInit(): void {
    this.ds.printSettings
      .pipe(untilDestroyed(this))
      .pipe(withLatestFrom(this.ds.state$))
      .subscribe(
        ([{ marginMm, sizeMm, paddingMm, paperHMm, paperWmm }, { data }]) => {
          this.widthMm10 = sizeMm * 10 + (paddingMm + marginMm) * 20;
          this.paperHMm10 = paperHMm * 10;
          this.paperWMm10 = paperWmm * 10;
          const cols = Math.floor(this.paperWMm10 / this.widthMm10);
          const rows = Math.floor(this.paperHMm10 / this.widthMm10);
          this.pages = Math.ceil(data.length / (rows * cols));
          this.viewbox = `0 0 ${this.paperWMm10 * this.pages} ${
            this.paperHMm10
          }`;
          let i = 0;
          loops: for (let p = 0; p <= this.pages; p++) {
            for (let r = 0; r < rows; r++) {
              for (let c = 0; c < cols; c++) {
                if (i >= data.length) {
                  break loops;
                }
                data[i]['page'] = p;
                data[i]['row'] = r;
                data[i]['col'] = c;
                i++;
              }
            }
          }
          this.data = data;
        }
      );
  }

  downloadSVGAsText() {
    const base64doc = btoa(
      decodeURIComponent(encodeURIComponent(this.svg.nativeElement.outerHTML))
    );
    const a = document.createElement('a');
    const e = new MouseEvent('click');
    a.download = 'download.svg';
    a.href = 'data:image/svg+xml;base64,' + base64doc;
    a.dispatchEvent(e);
  }

  ngAfterViewInit() {
    window.requestAnimationFrame(() => {
      this.loaded = true;
      this.cdr.markForCheck();
    });
  }
}
