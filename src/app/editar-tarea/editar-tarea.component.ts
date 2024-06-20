import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TareaService } from '../tarea.service';
import { Tarea } from '../tarea.model';

@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar-tarea.component.html',
  styleUrls: ['./editar-tarea.component.css']
})
export class EditarTareaComponent implements OnInit {

  tarea: Tarea = {
    descripcion: '',
    estado: '',
    prioridad: ''
  };

  constructor(
    private route: ActivatedRoute,
    private tareaService: TareaService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.tareaService.getTareas().subscribe(tareas => {
      this.tarea = tareas.find(t => t.id === id)!;
    });
  }

  updateTarea(): void {
    this.tareaService.updateTarea(this.tarea.id!, this.tarea).subscribe(() => {
      // Redirige o actualiza la lista de tareas
    });
  }
}