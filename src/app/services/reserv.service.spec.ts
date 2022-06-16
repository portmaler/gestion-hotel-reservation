/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReservService } from './reserv.service';

describe('ReservService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservService]
    });
  });

  it('should ...', inject([ReservService], (service: ReservService) => {
    expect(service).toBeTruthy();
  }));
});
