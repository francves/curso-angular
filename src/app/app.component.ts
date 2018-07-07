import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Primera app Fran!';
  lugares:any = [
  {nombre: "Floristeria don pepe"},
  {nombre: "Pizzería mamma mía!"},
  {nombre: "Auto lavado carwash"}
  ]
  constructor(){
  
  }
}
