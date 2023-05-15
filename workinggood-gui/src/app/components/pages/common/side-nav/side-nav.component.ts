import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {EmployeeAuthService} from "../../../services/employeeAuth/employee-auth.service";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  isEmployeeLogin: boolean = false;
  constructor(private employeeAuthService: EmployeeAuthService) { }

  ngOnInit(): void {
    this.isEmployeeLogin = this.employeeAuthService.isUserLogin();
    console.log(this.isEmployeeLogin);
  }
  public onSidenavClose =() => {
    this.sidenavClose.emit();
  }
}
