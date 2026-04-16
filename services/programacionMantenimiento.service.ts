import { api } from "@/app/api/api";
import {
  ProgramacionMantenimientoRequest,
  ProgramacionMantenimientoResponse,
} from "@/types/ProgramacionMantenimiento.type";

export const crearProgramacionMantenimiento = async (
  idMantenimiento: number,
  data: ProgramacionMantenimientoRequest,
): Promise<ProgramacionMantenimientoResponse> => {
  const response = await api.post(`programaciones/${idMantenimiento}/`, data);
  return response.data;
};

export const consultarProgramacionMantenimiento = async (
  idMantenimiento: number,
): Promise<ProgramacionMantenimientoResponse> => {
  const response = await api.get(`/programaciones/${idMantenimiento}/`);

  return response.data;
};

export const actualizarProgramacion = async (
  idMantenimiento: number,
  data: ProgramacionMantenimientoRequest,
): Promise<ProgramacionMantenimientoResponse> => {
  const response = await api.put(`/programaciones/${idMantenimiento}/`, data);
  return response.data;
};
