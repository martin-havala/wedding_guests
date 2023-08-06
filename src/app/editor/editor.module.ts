import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { SharedModule } from '../shared/shared.module';
import { EditorComponent } from './editor/editor.component';
import { FieldPickerComponent } from './field-picker/field-picker.component';
import { FileDropComponent } from './file-drop/file-drop.component';
import { FieldsMapperComponent } from './fields-mapper/fields-mapper.component';

const routes: Routes = [
  {
    path: '',
    component: EditorComponent,
  },
];

@NgModule({
  declarations: [EditorComponent, FileDropComponent, FieldPickerComponent, FieldsMapperComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    NzSelectModule,
    NzUploadModule,
    NzButtonModule,
    RouterModule.forChild(routes),
  ],
  bootstrap: [EditorComponent],
})
export class EditorModule {}
