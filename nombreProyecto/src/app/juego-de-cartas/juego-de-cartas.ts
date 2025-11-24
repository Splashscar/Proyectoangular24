import { Component } from '@angular/core';

@Component({
  selector: 'app-juego-de-cartas',
  standalone: false,
  templateUrl: './juego-de-cartas.html',
  styleUrl: './juego-de-cartas.css',
})
export class JuegoDeCartas {
   cartas: string[] = [];
  cartasVolteadas: number[] = [];
  cartasAdivinadas: number[] = [];
  intentos: number = 0;
  mensajeGanaste: string = '';

  constructor() {
    this.iniciarJuego();
  }

  iniciarJuego() {
    this.cartasVolteadas = [];
    this.cartasAdivinadas = [];
    this.intentos = 0;
    this.mensajeGanaste = '';

    const base = ['🐱', '🐶', '🐸', '🐻', '🦊', '🐼', '🐯', '🐰'];
    this.cartas = [...base, ...base].sort(() => Math.random() - 0.5);
  }

  voltearCarta(indice: number) {
    if (
      this.cartasVolteadas.length < 2 &&
      !this.cartasVolteadas.includes(indice) &&
      !this.cartasAdivinadas.includes(indice)
    ) {
      this.cartasVolteadas.push(indice);
    }

    if (this.cartasVolteadas.length === 2) {
      this.intentos++; 
      const [primera, segunda] = this.cartasVolteadas;

      if (this.cartas[primera] === this.cartas[segunda]) {
        this.cartasAdivinadas.push(primera, segunda);
        if (this.cartasAdivinadas.length === this.cartas.length) {
          this.mensajeGanaste = '🎉 ¡Has ganado el juego! 🎉';
        }
      }

      setTimeout(() => {
        this.cartasVolteadas = [];
      }, 800);
    }
  }

  estaVolteada(indice: number): boolean {
    return (
      this.cartasVolteadas.includes(indice) ||
      this.cartasAdivinadas.includes(indice)
    );
  }
}
  