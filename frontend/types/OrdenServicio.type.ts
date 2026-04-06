export interface Orden {
  idOrdenServicio: number;
  tipoServicio: string;
  fechaInicio: string;
  fechaFin: string;
  estado: "aprobado" | "pendiente" | "ejecutado";
}
