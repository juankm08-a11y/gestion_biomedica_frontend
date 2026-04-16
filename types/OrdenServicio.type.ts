export interface OrdenRequest {
  mantenimiento:number;
  tipoServicio: string;
  descripcion:string;
  fechaInicio: string;
  fechaFin: string;
  estado: "aprobado" | "pendiente" | "ejecutado";
}

export interface OrdenResponse {
  idOrden: number;
  mantenimiento:number;
  tipoServicio: string;
  descripcion:string;
  fechaInicio: string;
  fechaFin: string;
  estado: "aprobado" | "pendiente" | "ejecutado";
}
