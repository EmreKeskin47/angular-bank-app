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
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
@Component({
  selector: 'app-module-create',
  templateUrl: './module-create.component.html',
  styleUrls: ['./module-create.component.scss'],
})
export class ModuleCreateComponent implements OnInit {
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

  showCourseOfIns(event: any) {
    this.coursesOfSelectedIns = [];
    this.modulesOfCourse = [];
    this.hwOfModule = [];
    this.selectedCourse = false;
    this.selectedModule = false;
    if (event.value != []) {
      for (let i = 0; i < event.value.length; i++) {
        let temp = this.allCourses.find((item) => item.id == event.value[i]);
        if (temp) {
          this.coursesOfSelectedIns.push(temp);
        }
      }
    }
  }
  ShowModulesOfCourse(event: any) {
    this.selectedModule = false;
    this.hwOfModule = [];
    this.modulesOfCourse = [];
    if (event.value != []) {
      for (let i = 0; i < event.value.length; i++) {
        let temp = this.allModules.find((item) => item.id == event.value[i]);
        if (temp) {
          this.modulesOfCourse.push(temp);
        }
      }
    }
  }
  showHwOfModule(event: any) {
    this.hwOfModule = [];
    this.selectedModule = true;
    if (event.value != []) {
      for (let i = 0; i < event.value.length; i++) {
        let temp = this.allHW.find((item) => item.id == event.value[i]);
        if (temp) {
          this.hwOfModule.push(temp);
        }
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
