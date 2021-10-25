import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyStudentPaymentComponent } from './verify-student-payment.component';

describe('VerifyStudentPaymentComponent', () => {
  let component: VerifyStudentPaymentComponent;
  let fixture: ComponentFixture<VerifyStudentPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyStudentPaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyStudentPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
