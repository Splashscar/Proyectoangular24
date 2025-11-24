import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Mouseenter } from './mouseenter/mouseenter';
import { Tareas } from './tareas/tareas';
import { JuegoDeCartas } from './juego-de-cartas/juego-de-cartas';
import { Input } from './input/input';
import { Child } from './child/child';
import { Semaforo } from './semaforo/semaforo';
 

@NgModule({
  declarations: [
    App,
    Mouseenter,
    Tareas,
    JuegoDeCartas,
    Input,
    Child,
    Semaforo,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
