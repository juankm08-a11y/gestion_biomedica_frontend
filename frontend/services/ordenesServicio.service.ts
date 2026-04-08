import { api } from "@/app/api/api";
import { Orden } from "@/types/OrdenServicio.type";

export const crearOrden = async (data: Orden) => {
  const response = await api.post("/mantenimientos/orden_servicio/", data);
  return response.data;
};

export const consultarOrdenes = async () => {
  const response = await api.get("/mantenimientos/orden_servicio/");
  return response.data;
};

export const consultarOrden = async (id: number) => {
  const response = await api.get(`/ordenes/${id}/`);
  return response.data;
};

export const actualizarOrden = async (id: number, data: Orden) => {
  const response = await api.put(`/mantenimientos/orden_servicio/${id}/`, data);
  return response.data;
};

export const cerrarOrden = async (id: number) => {
  const response = await api.patch(`/mantenimientos/orden_servicio/${id}/`);
  return response.data;
};
