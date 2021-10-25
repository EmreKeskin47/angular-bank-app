import { Component, OnInit } from '@angular/core';
import { CourseList, CourseModuleList, insList } from 'src/app/mock-date';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss'],
})
export class CourseEditComponent implements OnInit {
  allCourses = CourseList;
  allIns = insList;
  allModules = CourseModuleList;

  selectedIns: number = 1;
  selectedCourse: number = 1;
  selectedModule: number = 1;

  selectIns(event: any) {
    this.selectedIns = event.target;
  }

  selectCourse(event: any) {
    this.selectedCourse = event.value;
  }

  selectModule(event: any) {
    this.selectedModule = event.value;
  }

  constructor() {}

  ngOnInit(): void {}
}
