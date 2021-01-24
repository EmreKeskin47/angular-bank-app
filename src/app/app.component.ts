import { Component } from '@angular/core';
import Dexie from 'dexie';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bank-app';
  db: any;
  newUser!: User;
  rows: User[] = [];

  ngOnInit() {
    this.makeDatabase();
    this.connectToDatabase();
  }

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
    this.db.users.toArray().then((p: any) => (this.rows = p));
  }

  addRow(user: User): void {
    this.db.users.add({
      name: user.name,
      password: user.password,
    });

    this.loadRows();
    this.newUser = new User('test', 'test');
  }
}
