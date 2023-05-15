import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersListForCompanyEmpty } from './offers-list-for-company-empty';

describe('GetAllForCompanyEmptyComponent', () => {
  let component: OffersListForCompanyEmpty;
  let fixture: ComponentFixture<OffersListForCompanyEmpty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersListForCompanyEmpty ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersListForCompanyEmpty);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
