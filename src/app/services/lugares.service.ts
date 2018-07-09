import {Injectable} from "@angular/core";
@Injectable()
export class LugaresService {
lugares:any = [
  {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: false, nombre: "Floristeria don pepe", descripcion: "La descripcion no se encuentra disponible en este momento..."},
  {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: "Pizzería mamma mía!", descripcion: "La descripcion no se encuentra disponible en este momento..."},
  {id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: "Auto lavado carwash", descripcion: "La descripcion no se encuentra disponible en este momento..."},
  {id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre: "Heladería icecream", descripcion: "La descripcion no se encuentra disponible en este momento..."},
  {id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre: "Zapatería el juanete", descripcion: "La descripcion no se encuentra disponible en este momento..."},
  {id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: true, nombre: "Frutería my apple", descripcion: "La descripcion no se encuentra disponible en este momento..."}
  ]
  public getLugares(){
  	return this.lugares;
  }
  public buscarLugar(id){
    return this.lugares.filter((lugar) => { return lugar.id == id })[0] || null;
  }
}
