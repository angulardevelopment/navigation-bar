import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { AdvanceComponent } from './advance/advance.component';
import { ChildComponent } from './child/child.component';
import { StickyComponent } from './sticky/sticky.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    AdvanceComponent,
    ChildComponent,
    StickyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
