import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTahsilatComponent } from './add-edit-tahsilat.component';

describe('AddEditTahsilatComponent', () => {
  let component: AddEditTahsilatComponent;
  let fixture: ComponentFixture<AddEditTahsilatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTahsilatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTahsilatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
