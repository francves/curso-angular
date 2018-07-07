import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

//Modulo de google maps par angular
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
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
