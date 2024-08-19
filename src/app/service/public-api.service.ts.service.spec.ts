import { TestBed } from '@angular/core/testing';

import { PublicApiServiceTsService } from './public-api.service.ts.service';

describe('PublicApiServiceTsService', () => {
  let service: PublicApiServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicApiServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
