import { TestBed } from '@angular/core/testing';

import { UserInformationService } from './user-information.service';

describe('UserInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserInformationService = TestBed.get(UserInformationService);
    expect(service).toBeTruthy();
  });
});
