import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowKasabankaComponent } from './show-kasabanka.component';

describe('ShowKasabankaComponent', () => {
  let component: ShowKasabankaComponent;
  let fixture: ComponentFixture<ShowKasabankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowKasabankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowKasabankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
