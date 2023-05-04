import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllForCompanyComponent } from './get-all-for-company.component';

describe('GetAllForCompanyComponent', () => {
  let component: GetAllForCompanyComponent;
  let fixture: ComponentFixture<GetAllForCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllForCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllForCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
