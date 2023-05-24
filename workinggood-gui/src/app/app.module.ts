import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewCompanyComponent } from './components/pages/company/new-company/new-company.component';
import { SideNavComponent } from './components/pages/common/side-nav/side-nav.component';
import { HeaderComponent } from './components/pages/common/header/header.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { NewEmployeeComponent } from './components/pages/employeeAuth/new-employee/new-employee.component';
import { RegisterCompanyComponent } from './components/pages/register-company/register-company.component';

import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AfterRegisterComponent } from './components/pages/register-company/after-register/after-register.component';
import { VerifyEmployeeComponent } from './components/pages/employeeAuth/verify-employee/verify-employee.component';
import { LoginEmployeeComponent } from './components/pages/employeeAuth/login-employee/login-employee.component';
import { AuthInterceptor } from './components/services/interceptors/auth.interceptor';
import { OffersListForCompany } from './components/pages/offers/offers-list-for-company/offers-list-for-company';
import {ErrorInterceptor} from "./components/services/interceptors/error.interceptor";
import { AddOfferComponent } from './components/pages/offers/add-offer/add-offer.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { OfferDetailsComponent } from './components/pages/offers/offer-details/offer-details.component';
import { OffersListComponent } from './components/pages/offers/offers-list/offers-list.component';
import { OffersListRowComponent } from './components/pages/offers/offers-list/offers-list-row/offers-list-row.component';
import {MatCardModule} from "@angular/material/card";
import { AddApplicationComponent } from './components/pages/applications/add-application/add-application.component';
import { ApplicationsListComponent } from './components/pages/applications/applications-list/applications-list.component';
import { ApplicationsListRowComponent } from './components/pages/applications/applications-list/applications-list-row/applications-list-row.component';
import { OffersListEmptyComponent } from './components/pages/offers/offers-list/offers-list-empty/offers-list-empty.component';
import { OffersListForCompanyRow } from './components/pages/offers/offers-list-for-company/offers-list-for-company-row/offers-list-for-company-row';
import { OffersListForCompanyEmpty } from './components/pages/offers/offers-list-for-company/offers-list-for-company-empty/offers-list-for-company-empty';
import {MatPaginatorModule} from "@angular/material/paginator";
import { OffersListForCompanyFiltersComponent } from './components/pages/offers/offers-list-for-company/offers-list-for-company-filters/offers-list-for-company-filters.component';
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { EditOfferComponent } from './components/pages/offers/edit-offer/edit-offer.component';
import { OffersListFiltersComponent } from './components/pages/offers/offers-list/offers-list-filters/offers-list-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCompanyComponent,
    SideNavComponent,
    HeaderComponent,
    NewEmployeeComponent,
    RegisterCompanyComponent,
    AfterRegisterComponent,
    VerifyEmployeeComponent,
    LoginEmployeeComponent,
    OffersListForCompany,
    AddOfferComponent,
    OfferDetailsComponent,
    OffersListComponent,
    OffersListRowComponent,
    AddApplicationComponent,
    ApplicationsListComponent,
    ApplicationsListRowComponent,
    OffersListEmptyComponent,
    OffersListForCompanyRow,
    OffersListForCompanyEmpty,
    OffersListForCompanyFiltersComponent,
    EditOfferComponent,
    OffersListFiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatCardModule,
    MatPaginatorModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  // providers: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
    // ,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ErrorInterceptor,
    //   multi: true
    // }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
