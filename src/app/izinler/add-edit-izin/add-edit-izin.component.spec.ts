import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditIzinComponent } from './add-edit-izin.component';

describe('AddEditIzinComponent', () => {
  let component: AddEditIzinComponent;
  let fixture: ComponentFixture<AddEditIzinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditIzinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditIzinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
