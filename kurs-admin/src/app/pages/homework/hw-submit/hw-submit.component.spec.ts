import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HwSubmitComponent } from './hw-submit.component';

describe('HwSubmitComponent', () => {
  let component: HwSubmitComponent;
  let fixture: ComponentFixture<HwSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HwSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HwSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
