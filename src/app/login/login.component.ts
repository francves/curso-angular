import { Component } from '@angular/core';
import {AutorizacionService} from "../services/autorizacion.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
	logeo:any = {};
  constructor(private autorizacionService: AutorizacionService){
  }
  login(){
  	this.autorizacionService.login(this.logeo.email, this.logeo.password);
  	this.logeo={};
  }
  facebookLogin(){
  	this.autorizacionService.facebookLogin();
  }
}
