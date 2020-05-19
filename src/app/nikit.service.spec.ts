import { TestBed } from '@angular/core/testing';

import { NikitService } from './nikit.service';

describe('NikitService', () => {
  let service: NikitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NikitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
