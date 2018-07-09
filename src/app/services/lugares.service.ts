import {Injectable} from "@angular/core";

import {AngularFireDatabase} from "angularfire2/database/database";

import {Http, Headers} from "@angular/http";

import { map } from 'rxjs/operators'

@Injectable()
export class LugaresService {
  API_ENDPOINT = "https://platzisquare-cur-1530981470746.firebaseio.com/";
lugares:any = [
  {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: false, nombre: "Floristeria don pepe", descripcion: "La descripcion no se encuentra disponible en este momento..."},
  {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: "Pizzería mamma mía!", descripcion: "La descripcion no se encuentra disponible en este momento..."},
  {id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: "Auto lavado carwash", descripcion: "La descripcion no se encuentra disponible en este momento..."},
  {id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre: "Heladería icecream", descripcion: "La descripcion no se encuentra disponible en este momento..."},
  {id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre: "Zapatería el juanete", descripcion: "La descripcion no se encuentra disponible en este momento..."},
  {id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: true, nombre: "Frutería my apple", descripcion: "La descripcion no se encuentra disponible en este momento..."}
  ];
  constructor(private afDB: AngularFireDatabase, private http: Http){

  }
  public getLugares(){
  	//return this.afDB.list('lugares/');
    return this.http.get(this.API_ENDPOINT+'/.json')
      .pipe(map((resultado) => {
        const data = resultado.json().lugares;
        return data;
      }))
  }
  public buscarLugar(id){
    return this.lugares.filter((lugar) => { return lugar.id == id })[0] || null;
  }
  public guardarLugar(lugar){
    //this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
    const headers = new Headers({"Content-Type":"application/json"});
    return this.http.post(this.API_ENDPOINT+'/lugares.json', lugar, {headers: headers});
  }
  public editarLugar(lugar){
    this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
  }
  public obtenerGeoData(direccion){
    //http://maps.google.com/maps/api/geocode/json?address=78-43+diagonal+70f,+Bogota,Colombia
    return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+direccion);
  }
  public getLugar(id){
    return this.afDB.object('lugares/'+id);
  }
}
