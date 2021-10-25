import { Teacher } from './../../../models/Teacher';
import { Component, OnInit } from '@angular/core';
import { insList, TeacherList } from './../../../mock-date';
@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss'],
})
export class AddTeacherComponent implements OnInit {
  allIns = insList;
  teachers = TeacherList;
  selectedInstitution: string;
  selectedTeacher: Teacher;

  setIns(event: any) {
    this.selectedInstitution = event.value;
  }
  setTeacher(event: any) {
    this.selectedTeacher = event.value;
  }

  addTeacherToIns() {
    for (let i = 0; i < TeacherList.length; i++) {
      if (TeacherList[i].id == this.selectedTeacher.id) {
        TeacherList[i].institution = this.selectedInstitution;
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
