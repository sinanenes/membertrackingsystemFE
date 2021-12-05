import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBorcComponent } from './add-edit-borc.component';

describe('AddEditBorcComponent', () => {
  let component: AddEditBorcComponent;
  let fixture: ComponentFixture<AddEditBorcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBorcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBorcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
