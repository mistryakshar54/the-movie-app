import { TestBed } from '@angular/core/testing';

import { TmdbServiceService } from './tmdb-service.service';
import {HttpClientModule} from '@angular/common/http';

describe('TmdbServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports : [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: TmdbServiceService = TestBed.get(TmdbServiceService);
    expect(service).toBeTruthy();
  });
});
