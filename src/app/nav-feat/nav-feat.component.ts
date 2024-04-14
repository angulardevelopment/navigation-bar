import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-nav-feat',
  templateUrl: './nav-feat.component.html',
  styleUrls: ['./nav-feat.component.scss']
})
export class NavFeatComponent implements OnInit {

  @Input()
  name: Node;

  ngOnInit(): void {
      console.log(this.name);
  }

  constructor(private _location: Location, private router: Router, private activatedRoute: ActivatedRoute) {
  }
  goBack() {
  this._location.back();
  console.log(this._location.path())
  }

  jbjn(){
//     const url = this._router
// 			.createUrlTree([], {
// 			   relativeTo: this._route,
// 			   queryParams: this.routeParams
// 		        }).toString();
// const url = this.router.createUrlTree([], {relativeTo: this.activatedRoute, queryParams: {param: 1}}).toString()

//  this._location.go(url);

// way
this._location.replaceState("/some/newstate/");


  }
}
