import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIzinComponent } from './show-izin.component';

describe('ShowIzinComponent', () => {
  let component: ShowIzinComponent;
  let fixture: ComponentFixture<ShowIzinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowIzinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowIzinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
