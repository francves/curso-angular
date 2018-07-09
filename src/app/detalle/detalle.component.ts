import { Component } from '@angular/core';

import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
  lugares:any = [
  {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: false, nombre: "Floristeria don pepe", descripcion: "Descripcion no disponible por los momentos..."},
  {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: "Pizzería mamma mía!", descripcion: "Descripcion no disponible por los momentos..."},
  {id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: "Auto lavado carwash", descripcion: "Descripcion no disponible por los momentos..."},
  {id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre: "Heladería icecream", descripcion: "Descripcion no disponible por los momentos..."},
  {id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre: "Zapatería el juanete", descripcion: "Descripcion no disponible por los momentos..."},
  {id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: true, nombre: "Frutería my apple", descripcion: "Descripcion no disponible por los momentos..."}
  ];
  id = null;
  lugar:any = {};
  constructor(private route: ActivatedRoute){
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.queryParams['action2']);
    console.log(this.route.snapshot.queryParams['referer']);
    this.id = this.route.snapshot.params['id'];
    this.lugar = this.buscarLugar();
  }
  buscarLugar(){
    return this.lugares.filter((lugar) => { return lugar.id == this.id })[0] || null;
  }

}
