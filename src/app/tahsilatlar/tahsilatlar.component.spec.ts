import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TahsilatlarComponent } from './tahsilatlar.component';

describe('TahsilatlarComponent', () => {
  let component: TahsilatlarComponent;
  let fixture: ComponentFixture<TahsilatlarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TahsilatlarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TahsilatlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
