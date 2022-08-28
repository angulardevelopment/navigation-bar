import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  @Input()
  name: Node;

  ngOnInit(): void {
      console.log(this.name);
  }

  constructor(private _location: Location) {
  }
  goBack() {
  this._location.back();
  console.log(this._location.path())
  }
}
