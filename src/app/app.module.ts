import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

//Modulo de google maps par angular
import { AgmCoreModule } from '@agm/core';

import {ResaltarDirective} from "./directives/resaltar.directive";
import {ContarClicksDirective} from "./directives/contar-clicks.directive";

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    //ContarClicksDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqwxaavd3zbcYP8crDhNl2QPxd7-wpNjA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
