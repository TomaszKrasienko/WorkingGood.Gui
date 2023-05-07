import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/components/models/employeeAuth/login';
import { EmployeeService } from 'src/app/components/services/employee/employee.service';
import {FormControl, Validators} from "@angular/forms";
import {EmployeeAuthService} from "../../../services/employeeAuth/employee-auth.service";

@Component({
  selector: 'app-login-employee',
  templateUrl: './login-employee.component.html',
  styleUrls: ['./login-employee.component.css']
})
export class LoginEmployeeComponent implements OnInit {
  loginCredentials: Partial<Login> = {}
  emailFormControl = new FormControl(
    '',
    [Validators.required, Validators.email]);
  passwordFormControl = new FormControl(
    '',
    [Validators.required]
  );
  loginError: string[] = [];
  isError: boolean = true;
  constructor(
    private employeeService: EmployeeService,
    private employeeAuthService: EmployeeAuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
  submit(){
    if(this.passwordFormControl.status === 'INVALID' || this.emailFormControl.status === 'INVALID') {
      this.markAllAsTouched();
      return;
    }
    this.employeeAuthService.login(this.loginCredentials as Login)
      .subscribe(
        result => {
          console.log(result);
          this.router.navigate(['/']);
        },
        (error) => {
          this.loginError = error.error.errors;
          this.isError = true;
          setTimeout(() => {
            this.hideError();
          }, 3000);
        });
  }
  private markAllAsTouched(): void{
    this.passwordFormControl.markAsTouched();
    this.emailFormControl.markAsTouched();
  }
  getEmailErrorMessage(): string{
    if(this.emailFormControl.hasError('required')){
      return 'You must enter a value';
    }
    if(this.emailFormControl.hasError('email')){
      return 'Not a valid email'
    }
    return '';
  }
  getPasswordErrorMessage(): string{
    if(this.emailFormControl.hasError('required')){
      return 'You must enter a value'
    }
    return '';
  }
  hideError(): void{
    this.isError = false;
    this.loginError = [];
  }
}
