import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, NavigationCancel, NavigationError,} from '@angular/router';
@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {

  constructor(private route: Router) {
    route.events.subscribe((events) => {

      console.log(events);
 
        if (events instanceof NavigationEnd) {
        console.log('triggered event when navigation ends successfully', events);
        }
        if (events instanceof NavigationStart) {
        console.log(events);
        }
        if (events instanceof NavigationCancel) {
        console.log('triggered due to a Route Guard returning false during navigation.', events);
        }
        if (events instanceof NavigationError) {
        console.log('when navigation fails due to an unexpected error.', events);
        }

  });


  // this.router.events
  // .filter(event => event instanceof NavigationEnd)
  // .map(() => this.activatedRoute)
  // .map(route => {
  //   while (route.firstChild) {
  //     route = route.firstChild;
  //   }

  //   return route;
  // })
  // .filter(route => route.outlet === 'primary')
  // .mergeMap(route => route.data)
  // .subscribe(event => {
  //   this.titleService.setTitle(event['title'] + config.suffixTitle);
  // });

  }
  ngOnInit() {
    const triggers = Array.from(document.querySelectorAll('.cool > li'));
    const background = <HTMLDivElement>document.querySelector('.dropdownBackground');
    const nav = document.querySelector('.top');

    function handleEnter() {
      this.classList.add('trigger-enter');
      setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
      background.classList.add('open');

      const dropdown = this.querySelector('.dropdown');
      const dropdownCoords = dropdown.getBoundingClientRect();
      const navCoords = nav.getBoundingClientRect();

      const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
      };

      background.style.setProperty('width', `${coords.width}px`);
      background.style.setProperty('height', `${coords.height}px`);
      background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
    }

    function handleLeave() {
      this.classList.remove('trigger-enter', 'trigger-enter-active');
      background.classList.remove('open');
    }

    triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
    triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
  }

  test(){
    console.log('Routes: ', JSON.stringify(this.route.config, undefined, 2))
    
// this.route.navigate(['/login'], { queryParams: { returnUrl: state.url }});
// this.route.navigate(['/basic'],  { relativeTo: this.route });
// this.route.navigate(['/advance', 'vd']).then( (e) => {
// if (e) {
// console.log("Navigation is successful!", e);
// } else {
// console.log("Navigation has failed!");
// }
// });



  }

}
