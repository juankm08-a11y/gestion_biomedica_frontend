import { ProgramacionMantenimientoResponse } from "@/types/ProgramacionMantenimiento.type";
import { ProgramacionMantenimientoRequest } from "../types/ProgramacionMantenimiento.type";

export function programacionToForm(
  data?: Partial<ProgramacionMantenimientoResponse>,
): ProgramacionMantenimientoRequest {
  return {
    equipo: data?.equipo ?? 0,
    unidadFrecuencia: data?.unidadFrecuencia ?? "dias",
    frecuenciaMantenimiento: Number(data?.frecuenciaMantenimiento ?? 0),
    frecuenciaCalibracion: Number(data?.frecuenciaCalibracion ?? 0),
    proximoMantenimiento: data?.proximoMantenimiento ?? "",
    proximoCalibracion: data?.proximoCalibracion ?? "",
  };
}
