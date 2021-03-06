import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {LandingComponent} from "./component/landing/landing.component";
import {RouterModule, Routes} from "@angular/router";
import {ServiceComponent} from "./component/service/service.component";
import {ContactComponent} from "./component/contact/contact.component";

const appRoutes: Routes = [
  {path: 'service', component: ServiceComponent},
  {path: 'index', component: LandingComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: LandingComponent}

];

@NgModule({
  declarations: [
    AppComponent, LandingComponent, ServiceComponent, ContactComponent
  ],
  imports: [
    BrowserModule, MatToolbarModule, MatSidenavModule, BrowserAnimationsModule, FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
