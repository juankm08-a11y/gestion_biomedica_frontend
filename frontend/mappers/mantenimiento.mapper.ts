import {
  MantenimientoResponse,
  MantenimientoRequest,
} from "../types/Mantenimiento.type";
export function mantenimientoToForm(
  data?: Partial<MantenimientoResponse>,
  idEquipo?: number,
): MantenimientoRequest {
  return {
    equipo: data?.equipo ?? idEquipo ?? 0,
    tipo: data?.tipo ?? "mantenimiento",
    estado: data?.estado ?? "pendiente",
    fechaInicio: data?.fechaInicio ?? "",
    fechaFin: data?.fechaFin ?? "",
    responsable: data?.responsable ?? 0,
  };
}
