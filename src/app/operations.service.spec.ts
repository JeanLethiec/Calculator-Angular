import { TestBed } from '@angular/core/testing';

import { OperationsService } from './operations.service';

describe('OperationsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OperationsService = TestBed.get(OperationsService);
    expect(service).toBeTruthy();
  });

  it('should retrieve operations history', (done) => {
    const service: OperationsService = TestBed.get(OperationsService);
    service.getHistory().then(data => {
      expect(data).toBeDefined();
      done();
    })
  })
});
