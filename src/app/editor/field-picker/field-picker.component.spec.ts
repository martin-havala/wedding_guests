import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldPickerComponent } from './field-picker.component';

describe('FieldPickerComponent', () => {
  let component: FieldPickerComponent;
  let fixture: ComponentFixture<FieldPickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldPickerComponent]
    });
    fixture = TestBed.createComponent(FieldPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
