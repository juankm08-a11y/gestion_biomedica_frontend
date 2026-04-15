export interface Orden {
  idOrden: number;
  tipoServicio: string;
  fechaInicio: string;
  fechaFin: string;
  estado: "aprobado" | "pendiente" | "ejecutado";
}
