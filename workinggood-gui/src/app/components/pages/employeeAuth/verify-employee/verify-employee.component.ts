import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { BaseReponse } from 'src/app/components/models/baseResponse';
import { EmployeeService } from 'src/app/components/services/employee/employee.service';

@Component({
  selector: 'app-verify-employee',
  templateUrl: './verify-employee.component.html',
  styleUrls: ['./verify-employee.component.css']
})
export class VerifyEmployeeComponent implements OnInit {
  isSuccess?: boolean;
  veriificationToken: string = '';
  activatedRouteSubscription?: Subscription;

  constructor(private employeeServivce: EmployeeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRouteSubscription = this.activatedRoute.params.subscribe(params => {
      this.veriificationToken = params['token'];
    });
    console.log(this.veriificationToken)
    this.employeeServivce.verifyEmployee(this.veriificationToken)
      .subscribe(
        (result: BaseReponse) => {
          this.isSuccess = true
        },
        (error: BaseReponse) => {
          console.log(error);
          this.isSuccess = false
        });
  }

}
