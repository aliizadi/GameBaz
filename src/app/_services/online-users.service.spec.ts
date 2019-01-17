import { TestBed } from '@angular/core/testing';

import { OnlineUsersService } from './online-users.service';

describe('OnlineUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnlineUsersService = TestBed.get(OnlineUsersService);
    expect(service).toBeTruthy();
  });
});
