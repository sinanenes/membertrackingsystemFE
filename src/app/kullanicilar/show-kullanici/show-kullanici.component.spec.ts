import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowKullaniciComponent } from './show-kullanici.component';

describe('ShowKullaniciComponent', () => {
  let component: ShowKullaniciComponent;
  let fixture: ComponentFixture<ShowKullaniciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowKullaniciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowKullaniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
