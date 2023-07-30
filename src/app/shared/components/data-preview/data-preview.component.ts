import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { DataService } from 'src/app/services/data.service';

@UntilDestroy()
@Component({
  selector: 'app-data-preview',
  templateUrl: './data-preview.component.html',
  styleUrls: ['./data-preview.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataPreviewComponent {
  data = this.ds.data;
  constructor(public ds: DataService) {}
}
