import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTareasComponent } from './listar-tareas/listar-tareas.component';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';
import { EditarTareaComponent } from './editar-tarea/editar-tarea.component';

const routes: Routes = [
  { path: '', redirectTo: '/tareas', pathMatch: 'full' },
  { path: 'tareas', component: ListarTareasComponent },
  { path: 'tareas/nueva', component: CrearTareaComponent },
  { path: 'tareas/editar/:id', component: EditarTareaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppModule { }
 
