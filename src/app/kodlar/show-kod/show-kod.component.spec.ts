import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowKodComponent } from './show-kod.component';

describe('ShowKodComponent', () => {
  let component: ShowKodComponent;
  let fixture: ComponentFixture<ShowKodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowKodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowKodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
