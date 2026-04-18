export interface ReporteRequest {
  equipo?:number;
  nombre:string;
  descripcion?:string;
  tipo:string;
  falla?:string;
  archivo?:File|null;
}

export interface ReporteResponse {
  totalEquipos: number;
  totalMantenimientos: number;
  mantenimientosPendientes: number;
  ordenesEjecutadas: number;
}

