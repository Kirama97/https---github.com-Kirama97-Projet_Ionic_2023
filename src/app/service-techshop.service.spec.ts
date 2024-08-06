import { TestBed } from '@angular/core/testing';
import { ServicesenepharmacieService } from './service-senepharmacie.service';

describe('ServiceTechshopService', () => {
  let service: ServicesenepharmacieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesenepharmacieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
