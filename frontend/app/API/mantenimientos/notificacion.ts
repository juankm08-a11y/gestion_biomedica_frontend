import { api } from "../api";

export const generarNotificacion = async (data: any) => {
  const response = await api.post("/mantenimientos/notificacion/", data);
  return response.data;
};

export const verNotificacion = async (id: number) => {
  const response = await api.get(`/mantenimientos/${id}/`);
  return response.data;
};
