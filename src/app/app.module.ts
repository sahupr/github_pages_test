import { BrowserModule } from '@angular/platform-browser';
  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { DashboardComponent } from './dashboard/dashboard.component';
  import { RouterModule } from '@angular/router';
  import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

  @NgModule({
    declarations: [
      DashboardComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule
    ],
    providers: [],
    bootstrap: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class AppModule { }
