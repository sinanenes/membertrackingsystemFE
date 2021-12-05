import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBilgilendirmeComponent } from './show-bilgilendirme.component';

describe('ShowBilgilendirmeComponent', () => {
  let component: ShowBilgilendirmeComponent;
  let fixture: ComponentFixture<ShowBilgilendirmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBilgilendirmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBilgilendirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
