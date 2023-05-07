import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {EmployeeAuthService} from "../../../services/employeeAuth/employee-auth.service";
import {EmployeeService} from "../../../services/employee/employee.service";
import {BaseReponse} from "../../../models/baseResponse";
import {Employee} from "../../../models/employee/employee";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  userInitials: string;
  shoppingListItems: number = 0;
  constructor(private router:Router, private employeeAuthService: EmployeeAuthService, private employeeService: EmployeeService) { }
  ngOnInit(): void {
    if(this.isUserLogin()){
      this.employeeService.getLoggedUser()
        .subscribe((result: BaseReponse) => {
          let objectResponse = result.object as Employee;
          this.userInitials = objectResponse.initials;
        }, error => console.log(error));
    }
  }
  public onToggleSidenav(){
    this.sidenavToggle.emit();
  }
  isUserLogin(): boolean {
    return this.employeeAuthService.isUserLogin();
  }
  getUser(): string {
    let userEmail = this.employeeAuthService.getUserEmail();
    return userEmail;
  }
  redirectToLogin(): void {
    this.router.navigate(['/login']);
  }
  redirectToRegister(): void {
    this.router.navigate(['/registerCompany']);
  }
  logOut(): void {
    this.employeeAuthService.logout();
    this.router.navigate(['/']);
  }
}
