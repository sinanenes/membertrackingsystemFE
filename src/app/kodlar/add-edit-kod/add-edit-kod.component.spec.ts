import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditKodComponent } from './add-edit-kod.component';

describe('AddEditKodComponent', () => {
  let component: AddEditKodComponent;
  let fixture: ComponentFixture<AddEditKodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditKodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditKodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
