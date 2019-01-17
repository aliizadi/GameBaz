import { TestBed } from '@angular/core/testing';

import { BestGamesService } from './best-games.service';

describe('BestGamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BestGamesService = TestBed.get(BestGamesService);
    expect(service).toBeTruthy();
  });
});
