import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  mensaje: string = 'Mensaje por defecto';
  cambiarMensaje(texto: string) {
    this.mensaje = texto;
  }
}
