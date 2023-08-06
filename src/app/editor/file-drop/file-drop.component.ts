import { Component } from '@angular/core';
import { NzUploadChangeParam, NzUploadXHRArgs } from 'ng-zorro-antd/upload';
import { of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-file-drop',
  templateUrl: './file-drop.component.html',
  styleUrls: ['./file-drop.component.sass'],
})
export class FileDropComponent {
  constructor(private ds: DataService) {}
  parseFile(document: NzUploadChangeParam) {
    const file = document.file;
    if (file.name.endsWith('csv')) {
      file.originFileObj?.text().then((txt) => this.ds.parseTxt(txt));
    }
  }
  stop = (i: NzUploadXHRArgs) => of(false).subscribe();
}
