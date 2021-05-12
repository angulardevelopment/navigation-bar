import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sticky',
  templateUrl: './sticky.component.html',
  styleUrls: ['./sticky.component.css']
})
export class StickyComponent implements OnInit {


  constructor() { }


  ngOnInit() {
     // Not a ton of code, but hard to
     const nav = <HTMLElement>document.querySelector('#main');
     let topOfNav = nav.offsetTop;

     function fixNav() {
       if (window.scrollY >= topOfNav) {
         document.body.style.paddingTop = nav.offsetHeight + 'px';
         document.body.classList.add('fixed-nav');
       } else {
         document.body.classList.remove('fixed-nav');
         document.body.style.paddingTop = '0';
       }
     }

     window.addEventListener('scroll', fixNav);
  }

}
