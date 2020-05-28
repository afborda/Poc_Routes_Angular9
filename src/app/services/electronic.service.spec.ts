import { TestBed } from '@angular/core/testing';

import { ElectronicService } from './electronic.service';

describe('EletronicService', () => {
  let service: ElectronicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectronicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
