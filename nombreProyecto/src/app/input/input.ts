import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  guardarV(mensaje: string, usuario: string, edad: string, telefono: string) {
    alert(mensaje + usuario)
    this.mensaje = 'Hola: ' + usuario + 'tienes: ' + edad + ' años y tu telefono es: ' + telefono;
  }
  mensaje: string = '';


  mostrarTexto(texto: string) {
    console.log(texto);
  }


}
