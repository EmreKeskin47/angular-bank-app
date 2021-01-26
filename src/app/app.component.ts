import { UserService } from './services/user.service';
import { Component } from '@angular/core';
import Dexie from 'dexie';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bank-app';

  constructor(private userDbService: UserService) {}

  ngOnInit() {
    this.userDbService.makeDatabase();
    this.userDbService.connectToDatabase();
  }
}
