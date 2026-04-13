export interface Mantenimiento {
  idMantenimiento: number;
  equipo: number;
  tipo: "mantenimiento" | "calibracion" | "falla" | "sistema";
  fechaInicio: string;
  fechaFin: string;
  estado: "aprobado" | "pendiente" | "ejecutado";
  responsable: number;
}
