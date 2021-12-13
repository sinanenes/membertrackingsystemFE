import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOdemeComponent } from './show-odeme.component';

describe('ShowOdemeComponent', () => {
  let component: ShowOdemeComponent;
  let fixture: ComponentFixture<ShowOdemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOdemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOdemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
