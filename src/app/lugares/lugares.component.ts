import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'Primera app Fran!';
  lat:number = 10.0752569;
  lng:number = -69.3004637;
  lugares:any = [
  {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: false, nombre: "Floristeria don pepe"},
  {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: "Pizzería mamma mía!"},
  {id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: "Auto lavado carwash"},
  {id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre: "Heladería icecream"},
  {id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre: "Zapatería el juanete"},
  {id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: true, nombre: "Frutería my apple"}
  ]
  constructor(){
  
  }
}
