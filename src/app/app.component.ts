import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Primera app Fran!';
  a = 3;
  b = 4;
  listo = true;
  contador = 0;
  constructor(){
  	setTimeout(() => {
  		this.listo = false;
  		console.log("Hola");
  	}, 4000)
  }
  hacerAlgo(){
  	this.contador++;
  }
}
