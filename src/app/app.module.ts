import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavFeatComponent } from './nav-feat/nav-feat.component';
import { AdvanceComponent } from './advance/advance.component';
import { ChildComponent } from './child/child.component';
import { StickyComponent } from './sticky/sticky.component';
import { StripeComponent } from './stripe/stripe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavFeatComponent,
    AdvanceComponent,
    ChildComponent,
    StickyComponent,
    StripeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
