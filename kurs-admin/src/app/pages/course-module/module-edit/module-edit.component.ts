import { Component, OnInit } from '@angular/core';
import {
  CourseList,
  CourseModuleList,
  HomeworkList,
  insList,
} from 'src/app/mock-date';

@Component({
  selector: 'app-module-edit',
  templateUrl: './module-edit.component.html',
  styleUrls: ['./module-edit.component.scss'],
})
export class ModuleEditComponent implements OnInit {
  allCourses = CourseList;
  allIns = insList;
  allModules = CourseModuleList;
  allHw = HomeworkList;
  selectedIns: number = 1;
  selectedCourse: number = 1;
  selectedModule: number = 1;
  selectedHomework: number = 1;

  selectIns(event: any) {
    this.selectedIns = event.target;
  }

  selectCourse(event: any) {
    this.selectedCourse = event.value;
  }

  selectModule(event: any) {
    this.selectedModule = event.value;
  }
  selectHomework(event: any) {
    this.selectedHomework = event.value;
  }

  constructor() {}

  ngOnInit(): void {}
}
