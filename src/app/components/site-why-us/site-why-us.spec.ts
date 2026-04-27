import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteWhyUs } from './site-why-us';

describe('SiteWhyUs', () => {
  let component: SiteWhyUs;
  let fixture: ComponentFixture<SiteWhyUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteWhyUs],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteWhyUs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
