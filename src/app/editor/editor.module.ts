import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputNumberModule } from 'primeng/inputnumber';
import { SharedModule } from '../shared/shared.module';
import { EditorComponent } from './editor/editor.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: EditorComponent,
  },
];

@NgModule({
  declarations: [EditorComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    InputNumberModule,
    RouterModule.forChild(routes),
  ],
  bootstrap: [EditorComponent],
})
export class EditorModule {}
