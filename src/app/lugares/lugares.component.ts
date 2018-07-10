import { Component } from '@angular/core';
import { LugaresService } from "../services/lugares.service";
import {trigger, state, style} from "@angular/animations";

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  animations: [
    trigger('contenedorAnimable', [
      state('inicial', style({
        opacity: 0,
        backgroundColor: 'green',
        transform: 'rotate3d(0,0,00,00deg)'
      })),
      state('final', style({
        opacity: 1,
        backgroundColor: 'yellow',
        transform: 'rotate3d(5,10,20,30deg)'
      }))
     ])
  ]
})
export class LugaresComponent {
  title = 'Primera app Fran!';
  state = 'inicial';
  lat:number = 10.0752569;
  lng:number = -69.3004637;
  lugares = null;
  constructor(private lugaresService: LugaresService){
    lugaresService.getLugares()
    	.subscribe((lugares) => {
    		this.lugares = lugares;
        this.lugares = Object.keys(this.lugares).map((key) => this.lugares[key]);
      }, error => {//En javascript el primer callback se ejecuta si todo 
        //sale bien, si hay algún error se ejecuta el segundo
        console.log(error);
    	});
  }
}
