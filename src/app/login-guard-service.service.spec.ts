import { TestBed } from '@angular/core/testing';

import { LoginGuardServiceService } from './login-guard-service.service';

describe('LoginGuardServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginGuardServiceService = TestBed.get(LoginGuardServiceService);
    expect(service).toBeTruthy();
  });
});
