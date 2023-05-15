import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersListForCompanyRow } from './offers-list-for-company-row';

describe('GetAllForCompanyRowComponent', () => {
  let component: OffersListForCompanyRow;
  let fixture: ComponentFixture<OffersListForCompanyRow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersListForCompanyRow ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersListForCompanyRow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
