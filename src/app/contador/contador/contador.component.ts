import { Component } from '@angular/core';
@Component({
  selector: 'app-contador',
  template:
    '<h1>{{ title }}</h1><h3>La Base es: <strong>{{ base }}</strong></h3><button (click)="acumular(base)">+{{ base }}</button><span>{{ numero }}</span><button (click)="acumular(-base)">-{{ base }}</button>',
})
export class ContadorComponent {
  public title: string = 'Contador APP';
  public numero: number = 10;
  public base: number = 5;
  sumar(): void {
    this.numero += 1;
  }
  restar(): void {
    this.numero -= 1;
  }
  acumular(valor: number): void {
    this.numero += valor;
  }
}
