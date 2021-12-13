import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KasabankalarComponent } from './kasabankalar.component';

describe('KasabankalarComponent', () => {
  let component: KasabankalarComponent;
  let fixture: ComponentFixture<KasabankalarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KasabankalarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KasabankalarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
