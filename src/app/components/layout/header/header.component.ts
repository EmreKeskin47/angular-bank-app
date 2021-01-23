import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  //title presented on the header component
  title: string = 'Bank Application';

  constructor() {}

  ngOnInit(): void {}
}
