import { HomeComponent } from './pages/home/home.component';
import { HwSubmitComponent } from './pages/homework/hw-submit/hw-submit.component';
import { AddTeacherComponent } from './pages/secretary/add-teacher/add-teacher.component';
import { VerifyStudentPaymentComponent } from './pages/secretary/verify-student-payment/verify-student-payment.component';
import { ModuleEditComponent } from './pages/course-module/module-edit/module-edit.component';
import { ModuleCreateComponent } from './pages/course-module/module-create/module-create.component';
import { HwEditComponent } from './pages/homework/hw-edit/hw-edit.component';
import { HwCreateComponent } from './pages/homework/hw-create/hw-create.component';
import { CourseEditComponent } from './pages/course/course-edit/course-edit.component';
import { HwListComponent } from './pages/homework/hw-list/hw-list.component';
import { ModuleListComponent } from './pages/course-module/module-list/module-list.component';
import { CourseCreateComponent } from './pages/course/course-create/course-create.component';
import { CourseListComponent } from './pages/course/course-list/course-list.component';
import { InstitutionEditComponent } from './pages/institution/institution-edit/institution-edit.component';
import { InstitutionCreateComponent } from './pages/institution/institution-create/institution-create.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { InstitutionListComponent } from './pages/institution/institution-list/institution-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'institution',
    component: InstitutionListComponent,
  },
  {
    path: 'institution/create',
    component: InstitutionCreateComponent,
  },
  {
    path: 'institution/edit',
    component: InstitutionEditComponent,
  },
  {
    path: 'course',
    component: CourseListComponent,
  },
  {
    path: 'course/create',
    component: CourseCreateComponent,
  },
  {
    path: 'course/edit',
    component: CourseEditComponent,
  },
  {
    path: 'module',
    component: ModuleListComponent,
  },
  {
    path: 'module/create',
    component: ModuleCreateComponent,
  },
  {
    path: 'module/edit',
    component: ModuleEditComponent,
  },
  {
    path: 'homework',
    component: HwListComponent,
  },
  {
    path: 'homework/create',
    component: HwCreateComponent,
  },
  {
    path: 'homework/edit',
    component: HwEditComponent,
  },
  {
    path: 'user',
    component: CreateUserComponent,
  },
  {
    path: 'secretary/student',
    component: VerifyStudentPaymentComponent,
  },
  {
    path: 'secretary/teacher',
    component: AddTeacherComponent,
  },
  {
    path: 'student/courses',
    component: CourseListComponent,
  },
  {
    path: 'student/homework',
    component: HwSubmitComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
