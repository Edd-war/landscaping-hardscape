import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteMarquee } from './site-marquee';

describe('SiteMarquee', () => {
  let component: SiteMarquee;
  let fixture: ComponentFixture<SiteMarquee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteMarquee],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteMarquee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
