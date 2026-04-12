import { api } from "@/app/api/api";
import { Orden } from "@/types/OrdenServicio.type";

export const crearOrden = async (data: Orden) => {
  const response = await api.post("/ordenes-servicio/", data);
  return response.data;
};

export const consultarOrdenes = async () => {
  const response = await api.get("/ordenes-servicio/");
  return response.data;
};

export const consultarOrden = async (id: number) => {
  const response = await api.get(`/ordenes-servicio/${id}/`);
  return response.data;
};

export const actualizarOrden = async (id: number, data: Orden) => {
  const response = await api.put(`/ordenes-servicio/${id}/`, data);
  return response.data;
};

export const cerrarOrden = async (id: number) => {
  const response = await api.patch(`/ordenes-servicio/${id}/`);
  return response.data;
};
