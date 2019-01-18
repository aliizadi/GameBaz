import { TestBed } from '@angular/core/testing';

import { UsersCommentsService } from './users-comments.service';

describe('UsersCommentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersCommentsService = TestBed.get(UsersCommentsService);
    expect(service).toBeTruthy();
  });
});
