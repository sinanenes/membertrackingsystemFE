import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilgilendirmelerComponent } from './bilgilendirmeler.component';

describe('BilgilendirmelerComponent', () => {
  let component: BilgilendirmelerComponent;
  let fixture: ComponentFixture<BilgilendirmelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BilgilendirmelerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BilgilendirmelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
