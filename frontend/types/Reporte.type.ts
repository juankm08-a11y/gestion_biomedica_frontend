export interface ReporteRequest {
  fechaInicio?:string;
  fechaFin?:string;
  tipoReporte?:string;
}

export interface ReporteResponse {
  totalEquipos: number;
  totalMantenimientos: number;
  mantenimientosPendientes: number;
  ordenesEjecutadas: number;
}

