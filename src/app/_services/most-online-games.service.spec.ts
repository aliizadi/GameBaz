import { TestBed } from '@angular/core/testing';

import { MostOnlineGamesService } from './most-online-games.service';

describe('MostOnlineGamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostOnlineGamesService = TestBed.get(MostOnlineGamesService);
    expect(service).toBeTruthy();
  });
});
