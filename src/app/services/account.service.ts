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
    this.db.users.clear().then((result: any) => console.log(result));
    this.loadRows();
  }

  loadRows(): void {
    this.db.users.toArray().then((p: any) => {
      this.rows = p;
    });
  }
}
