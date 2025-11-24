import { Component, ElementRef, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('nombreProyecto');
  cambiarCR(colorRojo: HTMLDivElement, colorVerde: HTMLDivElement, colorAmarillo: HTMLDivElement) {
    colorRojo.style.color = 'red';
    colorVerde.style.color = 'black';
    colorAmarillo.style.color = 'black';

  }
  cambiarCV(colorVerde: HTMLDivElement, colorRojo: HTMLDivElement, colorAmarillo: HTMLDivElement) {
    colorRojo.style.color = 'black';
    colorVerde.style.color = 'green';
    colorAmarillo.style.color = 'black';

  }
  cambiarCA(colorAmarillo: HTMLDivElement, colorRojo: HTMLDivElement, colorVerde: HTMLDivElement) {
    colorRojo.style.color = 'black';
    colorVerde.style.color = 'black';
    colorAmarillo.style.color = 'yellow';

  }
}