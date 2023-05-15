import {Component, Input, OnInit} from '@angular/core';
import {ApplicationService} from "../../../services/application/application.service";
import {Application} from "../../../models/application/application";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-applications-list',
  templateUrl: './applications-list.component.html',
  styleUrls: ['./applications-list.component.css']
})
export class ApplicationsListComponent implements OnInit {
  @Input() offerId: string;
  applicationsList: Application[] = [];
  constructor(private applicationService: ApplicationService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.applicationService.getByOfferId(this.offerId)
      .subscribe((result: Application[]) => {
        this.applicationsList = result
      }, result => console.log(result));
  }

}
