import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorclarComponent } from './borclar.component';

describe('BorclarComponent', () => {
  let component: BorclarComponent;
  let fixture: ComponentFixture<BorclarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorclarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorclarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
