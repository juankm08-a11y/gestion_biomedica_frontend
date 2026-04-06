export interface OrdenServicio {
  idOrdenServicio: number;
  tipoServicio: string;
  fechaInicio: string;
  fechaFin: string;
  estado: "aprobado" | "pendiente" | "ejecutado";
}
