import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTahsilatComponent } from './show-tahsilat.component';

describe('ShowTahsilatComponent', () => {
  let component: ShowTahsilatComponent;
  let fixture: ComponentFixture<ShowTahsilatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTahsilatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTahsilatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
