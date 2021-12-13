import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KodlarComponent } from './kodlar.component';

describe('KodlarComponent', () => {
  let component: KodlarComponent;
  let fixture: ComponentFixture<KodlarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KodlarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KodlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
