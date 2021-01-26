import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  constructor(private router: Router, private userDbService: UserService) {}
  onSubmit() {
    if (this.password.length < 6) {
      alert('Password must be longer than 6 characters');
    } else {
      let { nameCheck } = this.userDbService.authUser(
        this.username,
        this.password
      );
      if (nameCheck) {
        alert('Given username already exists in the database');
      } else {
        let user = new User(this.username, this.password);
        let res = this.userDbService.addRow(user);
        if (!res) {
          alert('Can not create user');
        } else {
          alert('User created successfully');
          this.router.navigate(['']);
        }
      }
    }
  }
}
