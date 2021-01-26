import { DbInitService } from './db/db-init.service';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  db: any;
  newUser!: User;
  rows: User[] = [];

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

  addRow(user: User): boolean {
    if (!user) {
      return false;
    }
    this.db.users.add({
      name: user.name,
      password: user.password,
    });
    this.loadRows();
    return true;
  }

  authUser(username: string, password: string): { [key: string]: any } {
    let nameExist = false;
    let passCorrect = false;
    this.loadRows();
    var i;
    for (i = 0; i < this.rows.length; i++) {
      if (this.rows[i].name === username) {
        nameExist = true;
        if (this.rows[i].password == password) {
          passCorrect = true;
        }
      }
    }
    return {
      nameCheck: nameExist,
      passCheck: passCorrect,
    };
  }
}
