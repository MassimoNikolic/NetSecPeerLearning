import { TestBed } from '@angular/core/testing';

import { BadFileService } from './bad-file.service';

describe('BadFileService', () => {
  let service: BadFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BadFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
