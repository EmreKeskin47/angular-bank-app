import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  db: any;
  newUser!: User;
  rows: User[] = [];

  makeDatabase(): void {
    this.db = new Dexie('BankDatabase');
    this.db.version(1).stores({
      users: 'name, password',
    });
    this.loadRows();
  }

  connectToDatabase(): void {
    this.db.open().catch((error: string) => {
      alert('Errod during connecting to database : ' + error);
    });
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
    this.db.users.toArray().then((row: any) => {
      var i;
      for (i = 0; i < row.length; i++) {
        if (row[i].name === username) {
          nameExist = true;
          if (row[i].password == password) {
            passCorrect = true;
          }
        }
      }
    });
    return {
      nameCheck: nameExist,
      passCheck: passCorrect,
    };
  }
}
