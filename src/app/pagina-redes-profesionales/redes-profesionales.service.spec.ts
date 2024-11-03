import { TestBed } from '@angular/core/testing';

import { RedesProfesionalesService } from './redes-profesionales.service';

describe('RedesProfesionalesService', () => {
  let service: RedesProfesionalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RedesProfesionalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
