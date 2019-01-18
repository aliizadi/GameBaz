import { TestBed } from '@angular/core/testing';

import { ProfileSummeryService } from './profile-summery.service';

describe('ProfileSummeryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileSummeryService = TestBed.get(ProfileSummeryService);
    expect(service).toBeTruthy();
  });
});
