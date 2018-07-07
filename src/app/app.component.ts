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
  {cercania: 1, distancia: 1, active: false, nombre: "Floristeria don pepe"},
  {cercania: 1, distancia: 1.8, active: true, nombre: "Pizzería mamma mía!"},
  {cercania: 2, distancia: 5, active: true, nombre: "Auto lavado carwash"},
  {cercania: 3, distancia: 10, active: false, nombre: "Heladería icecream"},
  {cercania: 3, distancia: 35, active: true, nombre: "Zapatería el juanete"},
  {cercania: 3, distancia: 120, active: true, nombre: "Frutería my apple"}
  ]
  constructor(){
  
  }
}
