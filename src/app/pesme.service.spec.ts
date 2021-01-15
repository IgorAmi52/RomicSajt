import { TestBed } from '@angular/core/testing';

import { PesmeService } from './pesme.service';

describe('PesmeService', () => {
  let service: PesmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
