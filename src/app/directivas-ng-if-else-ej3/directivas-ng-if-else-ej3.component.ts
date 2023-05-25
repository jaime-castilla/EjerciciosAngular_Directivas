import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas-ng-if-else-ej3',
  templateUrl: './directivas-ng-if-else-ej3.component.html',
  styleUrls: ['./directivas-ng-if-else-ej3.component.css']
})
export class DirectivasNgIfElseEj3Component {

  mayorEdad: boolean = false

  comprobar(): void{

    this.mayorEdad = !this.mayorEdad
  }

}
