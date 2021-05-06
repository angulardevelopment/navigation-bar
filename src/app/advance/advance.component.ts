import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.scss']
})
export class AdvanceComponent implements OnInit {

  username: string;


  constructor(private route: ActivatedRoute) {

  }
 ngOnInit() {
    // observable way
    this.route.paramMap.subscribe(params => {
      this.username = params.get('username');
    });
  }

}
