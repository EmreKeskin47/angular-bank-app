import { Component, OnInit } from '@angular/core';
import { CourseList, insList } from 'src/app/mock-date';

@Component({
  selector: 'app-institution-edit',
  templateUrl: './institution-edit.component.html',
  styleUrls: ['./institution-edit.component.scss'],
})
export class InstitutionEditComponent implements OnInit {
  allCourses = CourseList;
  allIns = insList;

  selectedIns: number = 1;
  selectedCourse: number = 1;

  constructor() {}

  ngOnInit(): void {}

  selectIns(event: any) {
    this.selectedIns = event.target;
  }

  selectCourse(event: any) {
    this.selectedCourse = event.value;
  }
}
