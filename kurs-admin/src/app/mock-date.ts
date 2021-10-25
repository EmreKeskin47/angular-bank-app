import { Teacher } from './models/Teacher';
import { Student } from './models/Student';
import { Homework } from './models/Homework';
import { CourseModule } from './models/CourseModule';
import { Course } from './models/Course';
import { Institution } from './models/Institution';

export var CourseList: Course[] = [
  new Course(1, 'Kurs 1', 'Kurs Açıklama', '', [1, 2, 3]),
  new Course(2, 'Kurs 2', 'Kurs Açıklama', '', [4, 5]),
  new Course(3, 'Kurs 3', 'Kurs Açıklama', '', [6, 7, 8, 9]),
  new Course(4, 'Kurs 4', 'Kurs Açıklama', '', []),
];

export var CourseModuleList: CourseModule[] = [
  new CourseModule(1, 'Ders 1', 'Ders Açıklama', '', [1]),
  new CourseModule(2, 'Ders 2', 'Ders Açıklama', '', [2]),
  new CourseModule(3, 'Ders 3', 'Ders Açıklama', '', [3]),
  new CourseModule(4, 'Ders 4', 'Ders Açıklama', '', [4, 5, 6]),
  new CourseModule(5, 'Ders 5', 'Ders Açıklama', '', []),
  new CourseModule(6, 'Ders 6', 'Ders Açıklama', '', []),
  new CourseModule(7, 'Ders 7', 'Ders Açıklama', '', []),
  new CourseModule(8, 'Ders 8', 'Ders Açıklama', '', []),
  new CourseModule(9, 'Ders 9', 'Ders Açıklama', '', []),
];

export var HomeworkList: Homework[] = [
  new Homework(1, 'Ödev 1', 'Ödev Açıklama', ''),
  new Homework(2, 'Ödev 2', 'Ödev Açıklama', ''),
  new Homework(3, 'Ödev 3', 'Ödev Açıklama', ''),
  new Homework(4, 'Ödev 4', 'Ödev Açıklama', ''),
  new Homework(5, 'Ödev 5', 'Ödev Açıklama', ''),
  new Homework(6, 'Ödev 6', 'Ödev Açıklama', ''),
];

export var insList: Institution[] = [
  new Institution('İsletme 1', 'açıklama', '', [], [1, 2, 3]),
  new Institution('İsletme 2', 'açıklama', '', [], [3, 4]),
];

export var StudentList: Student[] = [
  new Student(1, 'Öğrenci 1', false, ''),
  new Student(2, 'Öğrenci 2', false, ''),
  new Student(3, 'Öğrenci 3', false, ''),
  new Student(4, 'Öğrenci 4', false, ''),
  new Student(5, 'Öğrenci 5', false, ''),
];

export var TeacherList: Teacher[] = [
  new Teacher(1, 'Öğretmen 1', ''),
  new Teacher(2, 'Öğretmen 2', ''),
  new Teacher(3, 'Öğretmen 3', ''),
  new Teacher(4, 'Öğretmen 4', ''),
  new Teacher(5, 'Öğretmen 5', ''),
];
