import { TestBed, async, inject } from '@angular/core/testing';

import { CanActivateProfileGuard } from './can-activate-profile.guard';

describe('CanActivateProfileGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActivateProfileGuard]
    });
  });

  it('should ...', inject([CanActivateProfileGuard], (guard: CanActivateProfileGuard) => {
    expect(guard).toBeTruthy();
  }));
});
