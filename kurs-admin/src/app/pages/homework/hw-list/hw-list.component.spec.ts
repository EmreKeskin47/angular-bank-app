import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HwListComponent } from './hw-list.component';

describe('HwListComponent', () => {
  let component: HwListComponent;
  let fixture: ComponentFixture<HwListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HwListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HwListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
