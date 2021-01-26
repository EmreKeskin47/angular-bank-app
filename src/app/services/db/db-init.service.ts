import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root',
})
export class DbInitService {
  db: any;

  makeDatabase(): void {
    this.db = new Dexie('BankDatabase');
    this.db.version(3).stores({
      users: 'name, password',
      accounts: 'username, balance, currency',
    });
  }

  connectToDatabase(): void {
    this.db.open().catch((error: string) => {
      alert('Errod during connecting to database : ' + error);
    });
  }
}
