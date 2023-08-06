import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CategoriesComponent } from './categories/categories.component';
import { SettingsComponent } from './settings/settings.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { FontPickerComponent } from './font-picker/font-picker.component';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
  },
];

@NgModule({
  declarations: [SettingsComponent, CategoriesComponent, FontPickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzFormModule,
    NzAutocompleteModule,
    NzInputModule,
    NzInputNumberModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class SettingsModule {}
