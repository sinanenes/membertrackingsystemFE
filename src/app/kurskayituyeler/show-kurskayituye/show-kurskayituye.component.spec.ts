import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowKurskayituyeComponent } from './show-kurskayituye.component';

describe('ShowKurskayituyeComponent', () => {
  let component: ShowKurskayituyeComponent;
  let fixture: ComponentFixture<ShowKurskayituyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowKurskayituyeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowKurskayituyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
