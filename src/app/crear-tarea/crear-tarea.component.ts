import { Component } from '@angular/core';
import { TareaService } from '../tarea.service';
import { Tarea } from '../tarea.model';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css']
})
export class CrearTareaComponent {

  tarea: Tarea = {
    descripcion: '',
    estado: 'iniciada',
    prioridad: 'Normal'
  };

  constructor(private tareaService: TareaService) { }

  createTarea(): void {
    this.tareaService.createTarea(this.tarea).subscribe(() => {
      // Redirige o actualiza la lista de tareas
    });
  }
}