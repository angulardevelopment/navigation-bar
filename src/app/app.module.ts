import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavFeatComponent } from './nav-feat/nav-feat.component';
import { AdvanceComponent } from './advance/advance.component';
import { ChildComponent } from './child/child.component';
import { StickyComponent } from './sticky/sticky.component';
import { StripeComponent } from './stripe/stripe.component';
import { BookComponent } from './book/book.component';
import { ComponentA } from './componentA/componentA.component';
import { ComponentB } from './componentB/componentB.component';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from './services/custom-route-reuse-strategy';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    NavFeatComponent,
    AdvanceComponent,
    ChildComponent,
    StickyComponent,
    StripeComponent,
    BookComponent,
    ComponentA, ComponentB,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // {
    //   provide: RouteReuseStrategy,
    //   useClass: CustomRouteReuseStrategy,
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
