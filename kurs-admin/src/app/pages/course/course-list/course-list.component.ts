import { Course } from './../../../models/Course';
import { Component, OnInit } from '@angular/core';
import { CourseList, insList } from 'src/app/mock-date';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss'],
})
export class CourseListComponent implements OnInit {
  allCourses = CourseList;
  allIns = insList;
  coursesOfSelectedIns: Course[] = [];
  tempImg =
    'data:image/jpeg;base64,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';
  showCourseOfIns(event: any) {
    this.coursesOfSelectedIns = [];
    if (event.value != []) {
      for (let i = 0; i < event.value.length; i++) {
        let temp = this.allCourses.find((item) => item.id == event.value[i]);
        if (temp) {
          this.coursesOfSelectedIns.push(temp);
        }
      }
    }
    console.log(this.coursesOfSelectedIns);
  }

  constructor() {}

  ngOnInit(): void {}
}
