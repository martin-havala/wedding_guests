import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { map } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@UntilDestroy()
@Component({
  selector: 'app-field-picker',
  templateUrl: './field-picker.component.html',
  styleUrls: ['./field-picker.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => FieldPickerComponent),
    },
  ],
})
export class FieldPickerComponent implements ControlValueAccessor {
  selectedValue = '';
  disabled = false;
  categories$ = this.ds.state$.pipe(map(({ columns }) => columns));

  constructor(public ds: DataService) {}

  onTouched = () => {};
  onChange = (e: string) => {};

  registerOnChange(fn: (experience: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  writeValue(category: string | null): void {
    this.selectedValue = category ?? '';
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
