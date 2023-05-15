import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsListRowComponent } from './applications-list-row.component';

describe('ApplicationsListRowComponent', () => {
  let component: ApplicationsListRowComponent;
  let fixture: ComponentFixture<ApplicationsListRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationsListRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
