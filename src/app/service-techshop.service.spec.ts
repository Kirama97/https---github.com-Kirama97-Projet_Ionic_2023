import { TestBed } from '@angular/core/testing';

import { ServiceTechshopService } from './service-techshop.service';

describe('ServiceTechshopService', () => {
  let service: ServiceTechshopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTechshopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
