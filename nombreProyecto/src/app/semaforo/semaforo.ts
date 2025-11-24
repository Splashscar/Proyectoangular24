import { Component } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  standalone: false,
  templateUrl: './semaforo.html',
  styleUrl: './semaforo.css',
})
export class Semaforo {
  cambiarCR(colorRojo: HTMLDivElement, colorVerde: HTMLDivElement, colorAmarillo: HTMLDivElement) {
    colorRojo.style.backgroundColor = 'red';
    colorVerde.style.backgroundColor = 'black';
    colorAmarillo.style.backgroundColor = 'black';

  }
  cambiarCV(colorVerde: HTMLDivElement, colorRojo: HTMLDivElement, colorAmarillo: HTMLDivElement) {
    colorRojo.style.backgroundColor = 'black';
    colorVerde.style.backgroundColor = 'green';
    colorAmarillo.style.backgroundColor = 'black';

  }
  cambiarCA(colorAmarillo: HTMLDivElement, colorRojo: HTMLDivElement, colorVerde: HTMLDivElement) {
    colorRojo.style.backgroundColor = 'red';
    colorVerde.style.backgroundColor = 'black';
    colorAmarillo.style.backgroundColor = 'yellow';

  }
}
