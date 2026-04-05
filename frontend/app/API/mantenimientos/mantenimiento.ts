import { api } from "../api";

export const registrarMantenimiento = async (data: any) => {
  const response = await api.post("/mantenimientos/", data);
  return response.data;
};

export const consultarMantenimiento = async () => {
  const response = await api.get("/mantenimientos/");
  return response.data;
};

export const actualizarMantenimiento = async (id: number, data: any) => {
  const response = await api.put(`/mantenimientos/${id}/`, data);
  return response.data;
};

export const eliminarMantenimiento = async (id: number) => {
  const response = await api.delete(`/mantenmientos/${id}/`);
  return response.data;
};
