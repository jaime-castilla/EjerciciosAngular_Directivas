import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas-ng-if-ej1',
  templateUrl: './directivas-ng-if-ej1.component.html',
  styleUrls: ['./directivas-ng-if-ej1.component.css']
})
export class DirectivasNgIfEj1Component {

  domicilio: boolean = false

  comprobar(): void{

    this.domicilio = !this.domicilio
  }

}
