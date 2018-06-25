import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MatToolbarModule, MatSidenavModule, BrowserAnimationsModule, FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}