import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersListForCompanyFiltersComponent } from './offers-list-for-company-filters.component';

describe('OffersListForCompanyFiltersComponent', () => {
  let component: OffersListForCompanyFiltersComponent;
  let fixture: ComponentFixture<OffersListForCompanyFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersListForCompanyFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersListForCompanyFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
