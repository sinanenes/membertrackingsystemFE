import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBorcComponent } from './show-borc.component';

describe('ShowBorcComponent', () => {
  let component: ShowBorcComponent;
  let fixture: ComponentFixture<ShowBorcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBorcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBorcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
