import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { BadgeComponent } from './components/badge/badge.component';
import { HeaderComponent } from './components/header/header.component';
import { PreviewComponent } from './components/preview/preview.component';
import { DownloadSvgDirective } from './directives/download-svg.directive';
import { CatColorPipe } from './pipes/cat-color.pipe';
import { FromEachCatPipe } from './pipes/from-each-cat.pipe';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { OverlayComponent } from './components/overlay/overlay.component';

const COMPONENTS = [
  BadgeComponent,
  CatColorPipe,
  DownloadSvgDirective,
  FromEachCatPipe,
  HeaderComponent,
  OverlayComponent,
  PreviewComponent,
];
@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NzButtonModule,
    NzFormModule,
    NzSpinModule,
    NzInputModule,
  ],
  exports: COMPONENTS,
})
export class SharedModule {}
