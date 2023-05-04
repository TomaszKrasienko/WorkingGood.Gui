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
import { GetAllForCompanyComponent } from './components/pages/offers/get-all-for-company/get-all-for-company.component';
import {ErrorInterceptor} from "./components/services/interceptors/error.interceptor";

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
    GetAllForCompanyComponent
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
    MatProgressSpinnerModule
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
