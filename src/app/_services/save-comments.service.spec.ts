import { TestBed } from '@angular/core/testing';

import { SaveCommentsService } from './save-comments.service';

describe('SaveCommentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaveCommentsService = TestBed.get(SaveCommentsService);
    expect(service).toBeTruthy();
  });
});
