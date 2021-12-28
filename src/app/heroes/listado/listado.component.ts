import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spideman', 'Ironman', 'Capitan America', 'Thor'];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.pop() || ''; //quita el ultimo elemento del arreglo
    console.log(this.heroeBorrado);
    //this.heroes.shift();//remueve el primero elemento de arreglo
  }
}
