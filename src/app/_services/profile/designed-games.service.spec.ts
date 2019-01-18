import { TestBed } from '@angular/core/testing';

import { DesignedGamesService } from './designed-games.service';

describe('DesignedGamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesignedGamesService = TestBed.get(DesignedGamesService);
    expect(service).toBeTruthy();
  });
});
