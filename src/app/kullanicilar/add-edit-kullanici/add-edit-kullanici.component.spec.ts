import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditKullaniciComponent } from './add-edit-kullanici.component';

describe('AddEditKullaniciComponent', () => {
  let component: AddEditKullaniciComponent;
  let fixture: ComponentFixture<AddEditKullaniciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditKullaniciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditKullaniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
