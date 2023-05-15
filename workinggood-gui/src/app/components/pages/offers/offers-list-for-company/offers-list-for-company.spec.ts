import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersListForCompany } from './offers-list-for-company';

describe('GetAllForCompanyComponent', () => {
  let component: OffersListForCompany;
  let fixture: ComponentFixture<OffersListForCompany>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersListForCompany ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersListForCompany);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
