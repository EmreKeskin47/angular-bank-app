import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  constructor(private router: Router) {}
  onSubmit() {
    console.log('onSumbit');
    this.router.navigate(['']);
  }
}
