import { Component } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent {
  pageTitle: string = 'Create Account';
  //Will be automatically filled later
  username!: string;
  currency!: string;
  amount!: number;

  constructor() {}

  onSubmit() {}
}
