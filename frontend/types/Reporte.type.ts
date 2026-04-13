export interface Reporte {
  nombre: string;
  descripcion: string;
  fechaGeneracion: string;
  tipo: string;
  archivo?: File | null;
}
