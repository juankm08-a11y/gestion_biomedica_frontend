export interface ProgramacionMantenimientoRequest {
  equipo: number;
  unidadFrecuencia: string;
  frecuenciaMantenimiento: number;
  frecuenciaCalibracion: number;
  proximoMantenimiento: string;
  proximoCalibracion: string;
}

export interface ProgramacionMantenimientoResponse {
  idProgramacion: number;
  equipo:number;
  unidadFrecuencia: string;
  frecuenciaMantenimiento: number;
  frecuenciaCalibracion: number;
  proximoMantenimiento: string;
  proximoCalibracion: string;
  mantenimiento: number;
}
