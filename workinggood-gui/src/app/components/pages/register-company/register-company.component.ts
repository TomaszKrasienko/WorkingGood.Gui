import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { NewEmployeeComponent } from '../employeeAuth/new-employee/new-employee.component';
import { AddEmployee } from '../../models/employee/addEmployee.Request';
import { NewCompanyComponent } from '../company/new-company/new-company.component';
import { AddCompany } from '../../models/company/addCompany.Request';
import { Company } from '../../models/company/company';
import { CompanyService } from '../../services/company/company.service';
import { EmployeeService } from '../../services/employee/employee.service';
import { BaseReponse } from '../../models/baseResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-company',
  templateUrl: './register-company.component.html',
  styleUrls: ['./register-company.component.css']
})
export class RegisterCompanyComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  companyValidator: boolean = false;
  employeeValidator: boolean = false;

  addEmployee: AddEmployee;
  addCompany: AddCompany;
  @ViewChild(NewEmployeeComponent) newEmployeeComponent: NewEmployeeComponent;
  @ViewChild(NewCompanyComponent) newCompanyComponent: NewCompanyComponent;
  isLinear = false;
  constructor(
    private _formBuilder: FormBuilder,
    private companyService: CompanyService,
    private employeeService: EmployeeService,
    private router: Router) { }
  ngOnInit(): void {
  }
  isCompanyValid(result: boolean):  void {
    this.companyValidator = result;
  }
  isEmployeeValid(result: boolean): void {
    this.employeeValidator = result;
  }
  registerCompany(){
      this.addCompany = this.newCompanyComponent.getAddCompany();
      this.addEmployee = this.newEmployeeComponent.getAddEmployee();
      this.companyService.addNewCompany(this.addCompany)
        .subscribe(
          (result: BaseReponse) => {
          const companyId: string = (result.object as Company).id;
          this.employeeService.registerEmployee(this.addEmployee, companyId)
            .subscribe(
              result => {
                console.log(result);
                this.router.navigate(['/afterRegister']);
              },
              error => {
                this.newEmployeeComponent.isError = true;
                this.newEmployeeComponent.addEmployeeError = error.error.errors;
                setTimeout(() => {
                  this.newEmployeeComponent.hideError();
                }, 3000);
              }
            );
        },
        error => console.log(error));
  }
}
