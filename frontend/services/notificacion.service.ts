import { api } from "@/app/api/api";
import { Notificacion } from "@/types/Notificacion.type";

export const consultarNotificaciones = async () => {
  const response = await api.get("/notificaciones/");
  return response.data;
};

export const crearNotificacion = async (data: Notificacion) => {
  const response = await api.post("/notificaciones/", data);
  return response.data;
};

export const aprobarNotificacion = async (id: number) => {
  const response = await api.patch(`/notificaciones/${id}/`);
  return response.data;
};

export const ejecutarNotificacion = async (id: number) => {
  const response = await api.put(`/notificaciones/${id}/`);
  return response.data;
};
