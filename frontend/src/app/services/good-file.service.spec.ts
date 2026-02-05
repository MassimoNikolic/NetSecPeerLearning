import { TestBed } from '@angular/core/testing';

import { GoodFileService } from './good-file.service';

describe('GoodFileService', () => {
  let service: GoodFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoodFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
