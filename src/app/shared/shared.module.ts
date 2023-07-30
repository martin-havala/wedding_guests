import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { BadgeComponent } from './components/badge/badge.component';
import { DataPreviewComponent } from './components/data-preview/data-preview.component';
import { FileDropComponent } from './components/file-drop/file-drop.component';
import { FontPickerComponent } from './components/font-picker/font-picker.component';
import { HeaderComponent } from './components/header/header.component';
import { PrintComponent } from './components/print/print.component';

const COMPONENTS = [
  BadgeComponent,
  FontPickerComponent,
  FileDropComponent,
  DataPreviewComponent,
  PrintComponent,
  HeaderComponent,
];
@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DropdownModule,
    SelectButtonModule,
    FileUploadModule,
    TableModule,
  ],
  exports: COMPONENTS,
})
export class SharedModule {}
