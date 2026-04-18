export interface MantenimientoRequest {
  equipo: number;
  tipo: "mantenimiento" | "calibracion" | "falla" | "sistema";
  fechaInicio: string;
  fechaFin: string;
  estado: "aprobado" | "pendiente" | "ejecutado";
  responsable: number;
}

export interface MantenimientoResponse {
  idMantenimiento: number;
  equipo: number;
  tipo: "mantenimiento" | "calibracion" | "falla" | "sistema";
  fechaInicio: string;
  fechaFin: string;
  estado: "aprobado" | "pendiente" | "ejecutado";
  responsable: number;
}
