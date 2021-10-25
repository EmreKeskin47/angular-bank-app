import { EnrollmentService } from './enrollment.service';
import { User } from './user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tdf';
  public topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;

  constructor(private _enrollmentService: EnrollmentService) {}
  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
  userModel = new User('Rob', 'rob@test.com', 123213, '', 'morning', true);

  onSubmit() {
    this._enrollmentService.enroll(this.userModel).subscribe(
      (data) => console.log('Succes', data),
      (error) => console.log('Error', error)
    );
  }
}
