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

@NgModule({
  declarations: [
    AppComponent,
    NavFeatComponent,
    AdvanceComponent,
    ChildComponent,
    StickyComponent,
    StripeComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
