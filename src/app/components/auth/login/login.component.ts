import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private userDbService: UserService) {}

  onSubmit() {
    let { nameCheck, passCheck } = this.userDbService.authUser(
      this.username,
      this.password
    );
    if (!nameCheck) {
      alert('Given username do not exist in the database');
    } else if (!passCheck) {
      console.log('Given password do not match given username');
    } else {
      this.router.navigate(['']);
    }
  }
}
