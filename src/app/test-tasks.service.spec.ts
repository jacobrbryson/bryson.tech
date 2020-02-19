import { TestBed } from '@angular/core/testing';

import { TestTasksService } from './test-tasks.service';

describe('TestTasksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestTasksService = TestBed.get(TestTasksService);
    expect(service).toBeTruthy();
  });
});
