import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteHero } from './site-hero';

describe('SiteHero', () => {
  let component: SiteHero;
  let fixture: ComponentFixture<SiteHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteHero],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
