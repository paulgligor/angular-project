import { TestBed } from '@angular/core/testing';

import { PaginationnService } from './pagination.service';

describe('PaginationnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaginationnService = TestBed.get(PaginationnService);
    expect(service).toBeTruthy();
  });
});
