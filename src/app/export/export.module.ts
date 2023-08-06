import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintComponent } from './print/print.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [PrintComponent],
  imports: [
    CommonModule,
    SharedModule,
    NzButtonModule,
    RouterModule.forChild([{ path: '**', component: PrintComponent }]),
  ],
})
export class ExportModule {}
