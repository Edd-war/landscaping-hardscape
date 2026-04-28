import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteServices } from './site-services';

describe('SiteServices', () => {
  let component: SiteServices;
  let fixture: ComponentFixture<SiteServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteServices],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
