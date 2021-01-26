import { TestBed } from '@angular/core/testing';

import { DbInitService } from './db-init.service';

describe('DbInitService', () => {
  let service: DbInitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbInitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
