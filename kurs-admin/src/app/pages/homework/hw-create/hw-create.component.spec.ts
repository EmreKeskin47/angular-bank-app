import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HwCreateComponent } from './hw-create.component';

describe('HwCreateComponent', () => {
  let component: HwCreateComponent;
  let fixture: ComponentFixture<HwCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HwCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HwCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
