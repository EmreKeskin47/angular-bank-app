import { ComponentsModule } from './components/components.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InstitutionListComponent } from './pages/institution/institution-list/institution-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { MatRadioModule } from '@angular/material/radio';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HwSubmitComponent } from './pages/homework/hw-submit/hw-submit.component';
import { HwListComponent } from './pages/homework/hw-list/hw-list.component';
import { CourseListComponent } from './pages/course/course-list/course-list.component';
import { ModuleListComponent } from './pages/course-module/module-list/module-list.component';
import { InstitutionCreateComponent } from './pages/institution/institution-create/institution-create.component';
import { InstitutionEditComponent } from './pages/institution/institution-edit/institution-edit.component';
import { MatSelectModule } from '@angular/material/select';
import { CourseCreateComponent } from './pages/course/course-create/course-create.component';
import { CourseEditComponent } from './pages/course/course-edit/course-edit.component';
import { HwCreateComponent } from './pages/homework/hw-create/hw-create.component';
import { HwEditComponent } from './pages/homework/hw-edit/hw-edit.component';
import { ModuleCreateComponent } from './pages/course-module/module-create/module-create.component';
import { ModuleEditComponent } from './pages/course-module/module-edit/module-edit.component';
import { VerifyStudentPaymentComponent } from './pages/secretary/verify-student-payment/verify-student-payment.component';
import { AddTeacherComponent } from './pages/secretary/add-teacher/add-teacher.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    InstitutionListComponent,
    CreateUserComponent,
    SideNavComponent,
    HwSubmitComponent,
    HwListComponent,
    CourseListComponent,
    ModuleListComponent,
    InstitutionCreateComponent,
    InstitutionEditComponent,
    CourseCreateComponent,
    CourseEditComponent,
    HwCreateComponent,
    HwEditComponent,
    ModuleCreateComponent,
    ModuleEditComponent,
    VerifyStudentPaymentComponent,
    AddTeacherComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    NgbModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
