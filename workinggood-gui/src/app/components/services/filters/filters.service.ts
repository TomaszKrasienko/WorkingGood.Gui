import { Injectable } from '@angular/core';
import {MultiParamOffersForCompanyFilters} from "../../models/params/multiParamOutputFilers";

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor() { }
  setOffersCompanyFilters(multiParamOffersForCompanyFilters: MultiParamOffersForCompanyFilters): void {
    sessionStorage.setItem('multiParamOffersForCompanyFilters', JSON.stringify(multiParamOffersForCompanyFilters));
  }
  getOffersCompanyFilters(): MultiParamOffersForCompanyFilters{
    return JSON.parse(sessionStorage.getItem('multiParamOffersForCompanyFilters'));
  }
  clearOffersCompanyFilters(): void{
    sessionStorage.removeItem('multiParamOffersForCompanyFilters');
  }
}
