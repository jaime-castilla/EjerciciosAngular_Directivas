import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas-ng-if-else-ej2',
  templateUrl: './directivas-ng-if-else-ej2.component.html',
  styleUrls: ['./directivas-ng-if-else-ej2.component.css']
})
export class DirectivasNgIfElseEj2Component {

  registrado: boolean = false        //Atributo que he puesto en el *ngIf. Si le inicializo a false como está, me sale por defecto el mensaje del ng-templace y al pulsal el botón me cambiará al mensaje del *ngIf. Si le inicializo en true, me sale por defecto el mensaje del *ngIf.

  comprobar(): void{
    
    this.registrado = !this.registrado
  }

}
