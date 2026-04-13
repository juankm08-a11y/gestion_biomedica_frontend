import { api } from "@/app/api/api";
import { ProgramacionMantenimiento } from "@/types/ProgramacionMantenimiento.type";

export const crearProgramacionMantenimiento = async (
  data: ProgramacionMantenimiento,
) => {
  const response = await api.post("/programaciones/", data);
  return response.data;
};

export const consultarProgramacionMantenimiento = async () => {
  const response = await api.get("/programaciones/");
  return response.data;
};

export const actualizarProgramacion = async (
  id: number,
  data: ProgramacionMantenimiento,
) => {
  const response = await api.put(`/programaciones/${id}/`);
  return response.data;
};
