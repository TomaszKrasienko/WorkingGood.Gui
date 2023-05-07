import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { AddEmployee } from 'src/app/components/models/employee/addEmployee.Request';
import {AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  addEmployee:Partial<AddEmployee> = {};
  addEmployeeError: string[] = [];
  isError: boolean = false;
  @Output() employeeValidation = new EventEmitter<boolean>();
  emailFormControl = new FormControl(
    '',
    [Validators.required, Validators.email]);
  firstNameFormControl = new FormControl(
    '',
    [Validators.required]);
  lastNameFormControl = new FormControl(
    '',
    [Validators.required]);
  passwordFormControl = new FormControl(
    '',
    [Validators.required]
  )
  confirmPasswordFormControl = new FormControl(
    '',
    [Validators.required]);
  constructor() { }
  ngOnInit(): void {
  }
  getAddEmployee(): AddEmployee {
      return this.addEmployee as AddEmployee;
  }
  private isFormControlValid(): boolean{
    if(
      this.emailFormControl.status === 'VALID' &&
      this.firstNameFormControl.status === 'VALID' &&
      this.lastNameFormControl.status === 'VALID' &&
      this.passwordFormControl.status === 'VALID' &&
      this.confirmPasswordFormControl.status === 'VALID'
    )
      return true;
    return false;
  }
  checkPasswordConfirmation():void{
    if(!this.isPasswordConfirmMatched()){
      this.addEmployeeError.push("Password not match");
    }
  }
  private isPasswordConfirmMatched(): boolean{
    if(this.addEmployee.password == this.addEmployee.confirmPassword)
      return true;
    return false;
  }
  isFormValid(): void {
    if(this.isFormControlValid() && this.isPasswordConfirmMatched())
      this.employeeValidation.emit(true);
    else
      this.employeeValidation.emit(false);
  }
  hideError(): void{
    this.isError = false;
    this.addEmployeeError = [];
  }
}
//Todo: dorobić walidator do hasła
