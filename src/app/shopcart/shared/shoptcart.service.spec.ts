/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShopcartService } from './shopcart.service';

describe('Service: ShoptCart', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopcartService]
    });
  });

  it('should ...', inject([ShopcartService], (service: ShopcartService) => {
    expect(service).toBeTruthy();
  }));
});
