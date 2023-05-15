import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersListEmptyComponent } from './offers-list-empty.component';

describe('OffersListEmptyComponent', () => {
  let component: OffersListEmptyComponent;
  let fixture: ComponentFixture<OffersListEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersListEmptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersListEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
