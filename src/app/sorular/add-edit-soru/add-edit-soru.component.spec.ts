import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSoruComponent } from './add-edit-soru.component';

describe('AddEditSoruComponent', () => {
  let component: AddEditSoruComponent;
  let fixture: ComponentFixture<AddEditSoruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSoruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSoruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
