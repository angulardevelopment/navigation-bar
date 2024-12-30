import { AdvanceComponent } from './advance/advance.component';
import { NavFeatComponent } from './nav-feat/nav-feat.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { childRoutes } from './advance-child.routes';
import { BookComponent } from './book/book.component';
import { APIResolver } from './services/APIResolver';
import { ComponentA } from './componentA/componentA.component';
import { ComponentB } from './componentB/componentB.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { StripeComponent } from './stripe/stripe.component';
const APP_ROUTES: Routes = [
  {
    path: 'basic',
    component: NavFeatComponent,
  },
  {
    path: 'advance/:username',  // advance/1 or advance/txt
    component: AdvanceComponent,
    children: childRoutes,
  },
  {
    path: 'book',
    component: BookComponent,
    resolve: { pageData: APIResolver },
  },
  {
    path: 'compA',
    component: ComponentA,
  },
  {
    path: 'compB',
    component: ComponentB,
  },
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: "StripeComponent", component: StripeComponent, outlet: "outlet1" },
  // { path: '**', redirectTo: '/basic', pathMatch: 'full' },
  {
    path: '**',
    component: NavFeatComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {
      useHash: false,
      enableTracing: false,
      // handle scrolling upon Angular route transitions. it always scroll to top on navigation change
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
