import { Component } from '@angular/core';

@Component({
  selector: 'app-tareas',
  standalone: false,
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas {
  tasks = [
    { name: 'crear carpeta con el nombre del proyecto', iscompleted: true },
    { name: 'abrir en VSC', iscompleted: true },
    { name: 'crear proyecto terminar', iscompleted: true },
    { name: 'crear componente', iscompleted: false },
    { name: 'llamarlo en el archivo app.html', iscompleted: true },
    { name: 'levantar el servidor', iscompleted: false },
  ]

  toggleCompletion(task: any): void {
    task.iscompleted = !task.iscompleted;

  }
}