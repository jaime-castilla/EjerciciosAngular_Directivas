import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas-ng-for-ej3',
  templateUrl: './directivas-ng-for-ej3.component.html',
  styleUrls: ['./directivas-ng-for-ej3.component.css']
})
export class DirectivasNgForEj3Component {

  imagenes: string[] = ["https://placeimg.com/320/240/animals" , "https://placeimg.com/320/240/architecture" , "https://placeimg.com/320/240/nature"]
  nombre: string[] = ["Foto animales" , "Foto arquitectura" , "Foto naturaleza"]

}
