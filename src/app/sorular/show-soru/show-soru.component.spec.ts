import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSoruComponent } from './show-soru.component';

describe('ShowSoruComponent', () => {
  let component: ShowSoruComponent;
  let fixture: ComponentFixture<ShowSoruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSoruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSoruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
