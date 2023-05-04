import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { AddCompany } from 'src/app/components/models/company/addCompany.Request';
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent implements OnInit {
  @Output() companyValidation = new EventEmitter<boolean>();
  addCompany: Partial<AddCompany> = {};
  companyNameFormControl: FormControl = new FormControl(
    '',
    Validators.required
  );
  constructor() { }

  ngOnInit(): void {
  }
  getAddCompany(): AddCompany{
    console.log(this.addCompany);
    return this.addCompany as AddCompany;
  }
  isFormValid(): void {
    this.companyValidation.emit(
      this.companyNameFormControl.status === 'VALID'
    )
  }
}
