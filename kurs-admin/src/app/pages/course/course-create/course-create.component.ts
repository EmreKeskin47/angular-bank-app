import { Component, OnInit } from '@angular/core';
import { Homework } from './../../../models/Homework';
import { CourseModule } from './../../../models/CourseModule';
import {
  CourseList,
  CourseModuleList,
  HomeworkList,
  insList,
} from 'src/app/mock-date';
import { Course } from 'src/app/models/Course';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.scss'],
})
export class CourseCreateComponent implements OnInit {
  allCourses = CourseList;
  allIns = insList;
  allModules = CourseModuleList;
  allHW = HomeworkList;
  coursesOfSelectedIns: Course[] = [];
  selectedCourse: boolean = false;
  modulesOfCourse: CourseModule[] = [];
  selectedModule: boolean = false;
  hwOfModule: Homework[] = [];

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  nameFormControl = new FormControl('', [Validators.required]);

  matcher = new ErrorStateMatcher();

  constructor() {}

  ngOnInit(): void {}

  showCourseOfIns(event: any) {
    this.coursesOfSelectedIns = [];
    this.modulesOfCourse = [];
    this.hwOfModule = [];
    if (event.value != []) {
      for (let i = 0; i < event.value.length; i++) {
        let temp = this.allCourses.find((item) => item.id == event.value[i]);
        if (temp) {
          this.coursesOfSelectedIns.push(temp);
        }
      }
    }
  }
}
