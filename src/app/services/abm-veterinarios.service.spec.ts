import { TestBed } from '@angular/core/testing';

import { AbmVeterinariosService } from './abm-veterinarios.service';

describe('AbmVeterinariosService', () => {
  let service: AbmVeterinariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbmVeterinariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
