import { DbInitService } from './services/db/db-init.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bank-app';

  constructor(private dbService: DbInitService) {}

  ngOnInit() {
    this.dbService.makeDatabase();
    this.dbService.connectToDatabase();
  }
}
