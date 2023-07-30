import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TableModule } from 'primeng/table';
import { BadgeComponent } from './components/badge/badge.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DataPreviewComponent } from './components/data-preview/data-preview.component';
import { FileDropComponent } from './components/file-drop/file-drop.component';
import { FontPickerComponent } from './components/font-picker/font-picker.component';
import { PrintComponent } from './components/print/print.component';

const COMPONENTS = [
  BadgeComponent,
  FontPickerComponent,
  FileDropComponent,
  DataPreviewComponent,
  PrintComponent,
  CategoriesComponent,
];
@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule,
    DropdownModule,
    FileUploadModule,
    SelectButtonModule,
    TableModule,
  ],
  exports: COMPONENTS,
})
export class SharedModule {}
