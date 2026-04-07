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

export const consultarMantenimiento = async (id: number) => {
  const response = await api.get(`/mantenimientos/${id}/`);
  return response.data;
};

export const actualizarMantenimiento = async (
  id: number,
  data: Mantenimiento,
) => {
  const response = await api.put(`/mantenimientos/${id}/`, data);
  return response.data;
};

export const eliminarMantenimiento = async (id: number) => {
  const response = await api.delete(`/mantenimientos/${id}/`);
  return response.data;
};
