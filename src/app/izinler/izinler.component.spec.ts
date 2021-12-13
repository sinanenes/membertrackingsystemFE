import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzinlerComponent } from './izinler.component';

describe('IzinlerComponent', () => {
  let component: IzinlerComponent;
  let fixture: ComponentFixture<IzinlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzinlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IzinlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
