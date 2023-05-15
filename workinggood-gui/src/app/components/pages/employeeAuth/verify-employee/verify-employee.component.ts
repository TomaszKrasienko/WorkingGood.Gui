import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { BaseReponse } from 'src/app/components/models/baseResponse';
import {EmployeeAuthService} from "../../../services/employeeAuth/employee-auth.service";

@Component({
  selector: 'app-verify-employee',
  templateUrl: './verify-employee.component.html',
  styleUrls: ['./verify-employee.component.css']
})
export class VerifyEmployeeComponent implements OnInit {
  isSuccess?: boolean;
  veriificationToken: string = '';
  activatedRouteSubscription?: Subscription;

  constructor(private employeeAuthService: EmployeeAuthService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRouteSubscription = this.activatedRoute.params.subscribe(params => {
      this.veriificationToken = params['token'];
    });
    console.log(this.veriificationToken)
    this.employeeAuthService.verifyEmployee(this.veriificationToken)
      .subscribe(
        (result: BaseReponse) => {
          this.isSuccess = true
        },
        (error: BaseReponse) => {
          console.log(error);
          this.isSuccess = false
        });
  }
  redirectToLogin(): void {
    this.router.navigate(['/login'])
  }
}
