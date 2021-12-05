import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowKisiComponent } from './show-kisi.component';

describe('ShowKisiComponent', () => {
  let component: ShowKisiComponent;
  let fixture: ComponentFixture<ShowKisiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowKisiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowKisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
