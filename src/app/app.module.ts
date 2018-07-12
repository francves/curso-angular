import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

//Modulo de google maps par angular
import { AgmCoreModule } from '@agm/core';

import {ResaltarDirective} from "./directives/resaltar.directive";
import {ContarClicksDirective} from "./directives/contar-clicks.directive";

import {Routes, RouterModule} from "@angular/router";

import {DetalleComponent} from "./detalle/detalle.component";
import {LugaresComponent} from "./lugares/lugares.component";
import {ContactoComponent} from "./contacto/contacto.component";

import {LugaresService} from "./services/lugares.service";
import {AutorizacionService} from "./services/autorizacion.service";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {CrearComponent} from "./crear/crear.component";

import {HttpModule} from "@angular/http";

import {LinkifystrPipe} from "./pipes/linkifystr.pipe";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {LoginComponent} from "./login/login.component";
import {RegistroComponent} from "./registro/registro.component";

import {MyGuard} from "./services/my-guard.service";


const appRoutes: Routes = [
  {path: '', component: LugaresComponent},
  {path: 'lugares', component: LugaresComponent},
  {path: 'detalle/:id', component: DetalleComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'crear/:id', component: CrearComponent, canActivate:[MyGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent}
];

export const firebaseConfig = {
    apiKey: "AIzaSyCnGfmMH-_7UcXxNOzCGQ-QA4eCwhFNSmA",
    authDomain: "platzisquare-cur-1530981470746.firebaseapp.com",
    databaseURL: "https://platzisquare-cur-1530981470746.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "687415291351"
};

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    LinkifystrPipe,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqwxaavd3zbcYP8crDhNl2QPxd7-wpNjA'
    }),
     RouterModule.forRoot(appRoutes),
     AngularFireModule.initializeApp(firebaseConfig),
     AngularFireDatabaseModule,
     AngularFireAuthModule,
     HttpModule,
     BrowserAnimationsModule
  ],
  providers: [LugaresService, AutorizacionService, MyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
