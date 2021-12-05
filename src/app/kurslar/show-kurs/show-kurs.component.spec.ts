import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowKursComponent } from './show-kurs.component';

describe('ShowKursComponent', () => {
  let component: ShowKursComponent;
  let fixture: ComponentFixture<ShowKursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowKursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowKursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
