import { TestBed } from '@angular/core/testing';

import { BestNewGamesService } from './best-new-games.service';

describe('BestNewGamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BestNewGamesService = TestBed.get(BestNewGamesService);
    expect(service).toBeTruthy();
  });
});
