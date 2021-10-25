import { Student } from './../../../models/Student';
import { StudentList, insList } from './../../../mock-date';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-student-payment',
  templateUrl: './verify-student-payment.component.html',
  styleUrls: ['./verify-student-payment.component.scss'],
})
export class VerifyStudentPaymentComponent implements OnInit {
  students: Student[] = [];
  allIns = insList;
  selectedInstitution: string;
  selectedStudent: Student;

  findPaymentNotVerified() {
    for (let i = 0; i < StudentList.length; i++) {
      if (!StudentList[i].paymentVerified) {
        this.students.push(StudentList[i]);
      }
    }
    console.log(this.students);
  }

  setIns(event: any) {
    this.selectedInstitution = event.value;
  }
  setStudent(event: any) {
    this.selectedStudent = event.value;
  }

  addStudentToIns() {
    for (let i = 0; i < StudentList.length; i++) {
      if (StudentList[i].id == this.selectedStudent.id) {
        StudentList[i].paymentVerified = true;
        StudentList[i].institution = this.selectedInstitution;
      }
    }
  }

  ngOnInit(): void {
    this.findPaymentNotVerified();
  }
}
