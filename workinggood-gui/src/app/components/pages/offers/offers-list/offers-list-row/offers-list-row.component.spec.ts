import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersListRowComponent } from './offers-list-row.component';

describe('OffersListRowComponent', () => {
  let component: OffersListRowComponent;
  let fixture: ComponentFixture<OffersListRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersListRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
