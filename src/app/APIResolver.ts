import { Injectable } from '@angular/core';

import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class APIResolver implements Resolve<any> {
  constructor(private apiService: ApiService, private router: Router
    ){}

resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    // return this.apiService.getItems();
    return 1;

  }


 


}

