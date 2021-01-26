import { AccountService } from './../../services/account.service';
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
  balance!: number;

  constructor(private accountDbService: AccountService) {}

  onSubmit() {
    if (!this.username || !this.balance) {
      alert('All fields must be filled');
    } else {
      let hasAccount = this.accountDbService.hasAccount(this.username);
      if (hasAccount) {
        this.accountDbService.addAccount(
          this.username,
          this.balance,
          this.currency
        );
        alert('Desired account created');
      } else {
        this.accountDbService.addAccount(this.username, 10000, 'TL');
        alert(
          'You did not have an account therefore account containin 10,000TL is created for you'
        );
      }
    }
  }
}
