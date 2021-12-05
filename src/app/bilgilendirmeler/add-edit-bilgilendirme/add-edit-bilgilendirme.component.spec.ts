import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBilgilendirmeComponent } from './add-edit-bilgilendirme.component';

describe('AddEditBilgilendirmeComponent', () => {
  let component: AddEditBilgilendirmeComponent;
  let fixture: ComponentFixture<AddEditBilgilendirmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBilgilendirmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBilgilendirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
