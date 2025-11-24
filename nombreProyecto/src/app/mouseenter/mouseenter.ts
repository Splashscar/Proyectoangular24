import { Component } from '@angular/core';

@Component({
  selector: 'app-mouseenter',
  standalone: false,
  templateUrl: './mouseenter.html',
  styleUrl: './mouseenter.css',
})
export class Mouseenter {
  mensaje: string = ""

  mostrarMensaje() {
    this.mensaje = "¡El ratón esta sobre el elemento!"
  }

  ocultarMensaje() {
    this.mensaje = ""
  }

}
