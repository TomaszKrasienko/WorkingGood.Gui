import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCompanyComponent } from './components/pages/company/new-company/new-company.component';
import { NewEmployeeComponent } from './components/pages/employeeAuth/new-employee/new-employee.component';
import { RegisterCompanyComponent } from './components/pages/register-company/register-company.component';
import { AfterRegisterComponent } from './components/pages/register-company/after-register/after-register.component';
import { VerifyEmployeeComponent } from './components/pages/employeeAuth/verify-employee/verify-employee.component';
import { LoginEmployeeComponent } from './components/pages/employeeAuth/login-employee/login-employee.component';
import {OffersListForCompany} from "./components/pages/offers/offers-list-for-company/offers-list-for-company";
import {AddOfferComponent} from "./components/pages/offers/add-offer/add-offer.component";
import {OfferDetailsComponent} from "./components/pages/offers/offer-details/offer-details.component";
import {OffersListComponent} from "./components/pages/offers/offers-list/offers-list.component";
import {AddApplicationComponent} from "./components/pages/applications/add-application/add-application.component";
import {ApplicationsListComponent} from "./components/pages/applications/applications-list/applications-list.component";

const routes: Routes = [
  {path:"addCompany", component:NewCompanyComponent},
  {path:"addEmployee", component:NewEmployeeComponent},
  {path:"verify-employee/:token", component: VerifyEmployeeComponent},
  {path:"login", component: LoginEmployeeComponent},
  {path:"registerCompany", component:RegisterCompanyComponent},
  {path:"afterRegister", component: AfterRegisterComponent},
  {path:"addOffer", component: AddOfferComponent},
  {path:"offersList", component: OffersListComponent},
  {path:"offersForCompany", component: OffersListForCompany},
  {path:"offer/:id", component: OfferDetailsComponent},
  {path:"offers", component: OffersListForCompany},
  {path:"addApplication/:offerId", component: AddApplicationComponent},
  {path:"applications/:offerId", component: ApplicationsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
