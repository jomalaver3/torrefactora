export interface Tarea {
  id?: number;
  descripcion: string;
  estado: string;  // "iniciada", "en proceso", "completada"
  prioridad: string;  // "Urgente", "Normal", "Bajo"
}