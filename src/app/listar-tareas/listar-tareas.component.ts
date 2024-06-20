import { Component, OnInit } from '@angular/core';
import { TareaService } from '../tarea.service';
import { Tarea } from '../tarea.model';

@Component({
  selector: 'app-listar-tareas',
  templateUrl: './listar-tareas.component.html',
  styleUrls: ['./listar-tareas.component.css']
})
export class ListarTareasComponent implements OnInit {

  tareas: Tarea[] = [];

  constructor(private tareaService: TareaService) { }

  ngOnInit(): void {
    this.tareaService.getTareas().subscribe(tareas => {
      this.tareas = tareas;
    });
  }

  deleteTarea(id: number): void {
    this.tareaService.deleteTarea(id).subscribe(() => {
      this.tareas = this.tareas.filter(t => t.id !== id);
    });
  }
}