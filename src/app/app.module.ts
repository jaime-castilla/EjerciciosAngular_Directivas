import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivasNgForEj1Component } from './directivas-ng-for-ej1/directivas-ng-for-ej1.component';
import { DirectivasNgIfEj1Component } from './directivas-ng-if-ej1/directivas-ng-if-ej1.component';
import { DirectivasNgIfElseEj2Component } from './directivas-ng-if-else-ej2/directivas-ng-if-else-ej2.component';
import { DirectivasNgIfElseEj3Component } from './directivas-ng-if-else-ej3/directivas-ng-if-else-ej3.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivasNgForEj1Component,
    DirectivasNgIfEj1Component,
    DirectivasNgIfElseEj2Component,
    DirectivasNgIfElseEj3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
