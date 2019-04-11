import { TestBed } from '@angular/core/testing';

import { TmdbServiceService } from './tmdb-service.service';

describe('TmdbServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TmdbServiceService = TestBed.get(TmdbServiceService);
    expect(service).toBeTruthy();
  });
});
