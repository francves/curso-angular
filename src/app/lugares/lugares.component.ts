import { Component } from '@angular/core';
import { LugaresService } from "../services/lugares.service";


@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'Primera app Fran!';
  lat:number = 10.0752569;
  lng:number = -69.3004637;
  lugares = null;
  constructor(private lugaresService: LugaresService){
    lugaresService.getLugares()
    	.subscribe((lugares) => {
    		this.lugares = lugares;
        this.lugares = Object.keys(this.lugares).map((key) => this.lugares[key]);
    	});
  }
}
