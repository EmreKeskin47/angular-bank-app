import { Component } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent {
  pageTitle: string = 'Create Account';
  disableSelect = new FormControl(false);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor() {}
}
