import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditKasabankaComponent } from './add-edit-kasabanka.component';

describe('AddEditKasabankaComponent', () => {
  let component: AddEditKasabankaComponent;
  let fixture: ComponentFixture<AddEditKasabankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditKasabankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditKasabankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
