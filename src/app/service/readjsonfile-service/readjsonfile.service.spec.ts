import { TestBed } from '@angular/core/testing';
import { ReadjsonfileService } from './readjsonfile.service';

describe('ReadjsonfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadjsonfileService = TestBed.get(ReadjsonfileService);
    expect(service).toBeTruthy();
  });
});
