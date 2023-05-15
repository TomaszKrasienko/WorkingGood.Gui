import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {AddApplicationRequest} from "../../../models/application/addApplication.Request";
import {ApplicationService} from "../../../services/application/application.service";
import {resolve} from "@angular/compiler-cli";
import {compileResults} from "@angular/compiler-cli/src/ngtsc/annotations/src/util";

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.css']
})
export class AddApplicationComponent implements OnInit {
  private activatedRouteSubscription?: Subscription
  private offerId: string;
  offerTitle: string = 'Na razie test';
  addApplication: Partial<AddApplicationRequest> = {};
  constructor(private activatedRoute: ActivatedRoute, private applicationService: ApplicationService) {
    this.activatedRouteSubscription = this.activatedRoute.params.subscribe(params =>{
      this.offerId = params['offerId'];
    });
  }
  ngOnInit(): void {
  }
  filesExample: fileExample[] = [];
  onFileSelected(event) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = reader.result.toString().split(',')[1];
          this.filesExample.push({name: event.target.files[i].name, content:result});
        }
        reader.readAsDataURL(event.target.files[i]);
      }
      console.log(this.filesExample);
    }
  }
  removeFile(event, file) {
    this.filesExample = this.filesExample.filter(x => x.name !== file.name);
  }
  submit():void {
    this.addApplication.document = this.filesExample[0].content;
    this.addApplication.offerId = this.offerId;
    this.applicationService.addApplication(this.addApplication as AddApplicationRequest)
      .subscribe(result => console.log(result), error => console.log(error));
  }
}
export interface fileExample{
  name: string;
  content: string;
}
