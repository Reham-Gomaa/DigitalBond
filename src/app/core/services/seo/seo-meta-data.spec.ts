import { TestBed } from '@angular/core/testing';

import { SeoMetaData } from './seo-meta-data';

describe('SeoMetaData', () => {
  let service: SeoMetaData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeoMetaData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
