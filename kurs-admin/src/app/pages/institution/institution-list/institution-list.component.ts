import { insList } from './../../../mock-date';
import { Component, OnInit } from '@angular/core';
import { Institution } from 'src/app/models/Institution';

@Component({
  selector: 'app-institution-list',
  templateUrl: './institution-list.component.html',
  styleUrls: ['./institution-list.component.scss'],
})
export class InstitutionListComponent implements OnInit {
  insList: Institution[] = [];
  tempLogo =
    'data:image/png;base64,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';
  constructor() {}

  ngOnInit(): void {
    this.insList = insList;
  }
}
