import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCompanyComponent } from './components/pages/company/new-company/new-company.component';
import { NewEmployeeComponent } from './components/pages/employeeAuth/new-employee/new-employee.component';
import { RegisterCompanyComponent } from './components/pages/register-company/register-company.component';
import { AfterRegisterComponent } from './components/pages/register-company/after-register/after-register.component';
import { VerifyEmployeeComponent } from './components/pages/employeeAuth/verify-employee/verify-employee.component';
import { LoginEmployeeComponent } from './components/pages/employeeAuth/login-employee/login-employee.component';
import {GetAllForCompanyComponent} from "./components/pages/offers/get-all-for-company/get-all-for-company.component";

const routes: Routes = [
  {path:"addCompany", component:NewCompanyComponent},
  {path:"addEmployee", component:NewEmployeeComponent},
  {path:"verify-employee/:token", component: VerifyEmployeeComponent},
  {path:"login", component: LoginEmployeeComponent},
  {path:"registerCompany", component:RegisterCompanyComponent},
  {path:"afterRegister", component: AfterRegisterComponent},
  {path:"offers", component: GetAllForCompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
