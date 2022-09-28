import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.scss']
})
export class AdvanceComponent implements OnInit {

  username: string;

//   heroes$: Observable<Hero[]>;
// selectedId: number;
// heroes = HEROES;

  constructor(private route: ActivatedRoute) {

  }
 ngOnInit() {
    // observable way
    this.route.paramMap.subscribe(params => {
      this.username = params.get('username');
    });

   

this.route.snapshot.queryParamMap.get('id');

// this.heroes$ = this.route.paramMap.pipe(
//   switchMap(params => {
//     this.selectedId = Number(params.get('id'));
    // return this.service.getHeroes();
//   })
const heroId = this.route.snapshot.paramMap.get('id');

  }

  test(){
    this.route.queryParams.subscribe(queryParams => {
console.log(queryParams);

    })
  }

}
