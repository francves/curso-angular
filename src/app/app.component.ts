import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Primera app Fran!';
  lat:number = 10.0752569;
  lng:number = -69.3004637;
  lugares:any = [
  {active: false, nombre: "Floristeria don pepe"},
  {active: true, nombre: "Pizzería mamma mía!"},
  {active: true, nombre: "Auto lavado carwash"},
  {active: false, nombre: "Heladería icecream"},
  {active: true, nombre: "Zapatería el juanete"},
  {active: true, nombre: "Frutería my apple"}
  ]
  constructor(){
  
  }
}
