import { Component, ViewChild } from '@angular/core';
import { FileSelectEvent, FileUpload } from 'primeng/fileupload';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-file-drop',
  templateUrl: './file-drop.component.html',
  styleUrls: ['./file-drop.component.sass'],
})
export class FileDropComponent {
  @ViewChild(FileUpload) fileUppload!: FileUpload;
  constructor(private ds: DataService) {}
  parseFile(document: FileSelectEvent) {
    const file = document.currentFiles && document.currentFiles[0];
    if (file.name.endsWith('csv')) {
      file.text().then((txt) => this.ds.parseTxt(txt));
    }
  }
}
