import { api } from "@/app/api/api";
import { Notificacion } from "@/types/Notificacion.type";

export const consultarNotificaciones = async () => {
  const response = await api.get("/mantenimientos/notificacion/");
  return response.data;
};

export const crearNotificacion = async (data: Notificacion) => {
  const response = await api.post("/mantenimientos/notificacion/", data);
  return response.data;
};

export const aprobarNotificacion = async (id: number) => {
  const response = await api.patch(`/mantenimientos/notificacion/${id}/`);
  return response.data;
};

export const ejecutarNotificacion = async (id: number) => {
  const response = await api.put(`/mantenimientos/notificacion/${id}/`);
  return response.data;
};
