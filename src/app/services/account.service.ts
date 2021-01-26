import { DbInitService } from './db/db-init.service';
import { Account } from './../models/Account';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  db: any;
  newAccount!: Account;
  rows: Account[] = [];

  constructor(private bdService: DbInitService) {
    this.db = bdService.db;
    this.loadRows();
  }

  clearRows(): void {
    this.db.accounts.clear().then((result: any) => console.log(result));
    this.loadRows();
  }

  loadRows(): void {
    this.db.accounts.toArray().then((p: any) => {
      this.rows = p;
    });
  }

  hasAccount(name: string): boolean {
    if (name) {
      this.loadRows();
      var i;
      for (i = 0; i < this.rows.length; i++) {
        if (this.rows[i].username.toString() == name.toString()) {
          return true;
        }
      }
      return false;
    }
    return false;
  }

  addAccount(username: string, balance: number, currency: string): boolean {
    let added = false;
    if (username && balance && currency) {
      this.db.accounts
        .add({
          username: username,
          balance: balance,
          currency: currency,
        })
        .then((added = true));
    }
    return added;
  }
}
