import { api } from "@/app/api/api";
import { Mantenimiento } from "@/types/Mantenimiento.type";

export const registrarMantenimiento = async (data: Mantenimiento) => {
  const response = await api.post("/mantenimientos/", data);
  return response.data;
};

export const consultarMantenimientos = async () => {
  const response = await api.get("/mantenimientos/");
  return response.data;
};

export const consultarMantenimiento = async (idMantenimiento: number) => {
  const response = await api.get(`/mantenimientos/${idMantenimiento}/`);
  return response.data;
};

export const actualizarMantenimiento = async (
  idMantenimiento: number,
  data: Mantenimiento,
) => {
  const response = await api.put(`/mantenimientos/${idMantenimiento}/`, data);
  return response.data;
};

export const eliminarMantenimiento = async (idMantenimiento: number) => {
  const response = await api.delete(`/mantenimientos/${idMantenimiento}/`);
  return response.data;
};

export const aprobarMantenimiento = async (
  idMantenimiento: number,
  aprobadoPor: number,
) => {
  const response = await api.patch(
    `/mantenimientos/${idMantenimiento}/aprobar/`,
    { aprobado_por: aprobadoPor },
  );
  return response.data;
};

export const supervisarMantenimiento = async (idMantenimiento: number) => {
  const response = await api.get(
    `/mantenimientos/${idMantenimiento}/supervisar/`,
  );
  return response.data;
};
