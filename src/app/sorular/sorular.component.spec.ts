import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorularComponent } from './sorular.component';

describe('SorularComponent', () => {
  let component: SorularComponent;
  let fixture: ComponentFixture<SorularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SorularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
