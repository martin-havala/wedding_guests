import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { SharedModule } from '../shared/shared.module';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [
  {
    path: '',
    component: EditorComponent,
  },
];

@NgModule({
  declarations: [EditorComponent, ],
  imports: [
    CommonModule,
    SharedModule,
    ButtonModule,
    FormsModule,
    InputNumberModule,
    RouterModule.forChild(routes),
  ],
  bootstrap: [EditorComponent],
})
export class EditorModule {}
