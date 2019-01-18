import { TestBed } from '@angular/core/testing';

import { PlayedGamesService } from './played-games.service';

describe('PlayedGamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayedGamesService = TestBed.get(PlayedGamesService);
    expect(service).toBeTruthy();
  });
});
