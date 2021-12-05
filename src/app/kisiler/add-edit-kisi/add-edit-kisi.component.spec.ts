import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditKisiComponent } from './add-edit-kisi.component';

describe('AddEditKisiComponent', () => {
  let component: AddEditKisiComponent;
  let fixture: ComponentFixture<AddEditKisiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditKisiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditKisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
