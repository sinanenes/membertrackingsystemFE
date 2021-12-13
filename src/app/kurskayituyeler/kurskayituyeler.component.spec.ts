import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurskayituyelerComponent } from './kurskayituyeler.component';

describe('KurskayituyelerComponent', () => {
  let component: KurskayituyelerComponent;
  let fixture: ComponentFixture<KurskayituyelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurskayituyelerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KurskayituyelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
