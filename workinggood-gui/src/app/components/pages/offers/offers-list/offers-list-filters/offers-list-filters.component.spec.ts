import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersListFiltersComponent } from './offers-list-filters.component';

describe('OffersListFiltersComponent', () => {
  let component: OffersListFiltersComponent;
  let fixture: ComponentFixture<OffersListFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersListFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersListFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
