import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditOdemeComponent } from './add-edit-odeme.component';

describe('AddEditOdemeComponent', () => {
  let component: AddEditOdemeComponent;
  let fixture: ComponentFixture<AddEditOdemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditOdemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditOdemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
