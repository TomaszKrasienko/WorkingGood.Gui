import {Component, OnInit} from '@angular/core';
import {EmployeeAuthService} from "./components/services/employeeAuth/employee-auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'workinggood-gui';
  constructor() {
  }
  ngOnInit(): void {
  }
}
