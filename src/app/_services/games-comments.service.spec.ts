import { TestBed } from '@angular/core/testing';

import { GamesCommentsService } from './games-comments.service';

describe('GamesCommentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GamesCommentsService = TestBed.get(GamesCommentsService);
    expect(service).toBeTruthy();
  });
});
