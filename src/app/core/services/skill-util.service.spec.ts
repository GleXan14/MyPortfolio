import { TestBed } from '@angular/core/testing';

import { SkillUtilService } from './skill-util.service';

describe('SkillUtilService', () => {
  let service: SkillUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
