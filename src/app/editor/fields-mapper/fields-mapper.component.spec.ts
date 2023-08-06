import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsMapperComponent } from './fields-mapper.component';

describe('FieldsMapperComponent', () => {
  let component: FieldsMapperComponent;
  let fixture: ComponentFixture<FieldsMapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldsMapperComponent]
    });
    fixture = TestBed.createComponent(FieldsMapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
