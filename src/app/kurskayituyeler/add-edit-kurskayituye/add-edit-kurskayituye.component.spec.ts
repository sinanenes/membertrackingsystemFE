import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditKurskayituyeComponent } from './add-edit-kurskayituye.component';

describe('AddEditKurskayituyeComponent', () => {
  let component: AddEditKurskayituyeComponent;
  let fixture: ComponentFixture<AddEditKurskayituyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditKurskayituyeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditKurskayituyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
