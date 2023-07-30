import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ColorPickerModule } from 'primeng/colorpicker';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SharedModule } from '../shared/shared.module';
import { CategoriesComponent } from './categories/categories.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
  },
];

@NgModule({
  declarations: [SettingsComponent, CategoriesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerModule,
    DropdownModule,
    InputNumberModule,
    SelectButtonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class SettingsModule {}
