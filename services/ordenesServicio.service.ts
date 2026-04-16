import { api } from "@/app/api/api";
import { OrdenRequest, OrdenResponse } from "@/types/OrdenServicio.type";

export const crearOrden = async (data: OrdenRequest): Promise<OrdenResponse> => {
  const response = await api.post("/ordenes-servicio/", data);
  return response.data;
};

export const consultarOrdenes = async (): Promise<OrdenResponse[]> => {
  const response = await api.get("/ordenes-servicio/");
  return response.data;
};

export const consultarOrden = async (idOrden: number): Promise<OrdenResponse> => {
  const response = await api.get(`/ordenes-servicio/${idOrden}/`);
  return response.data;
};

export const actualizarOrden = async (idOrden: number, data: OrdenRequest): Promise<OrdenRequest> => {
  const response = await api.put(`/ordenes-servicio/${idOrden}/`, data);
  return response.data;
};

export const cerrarOrden = async (idOrden: number): Promise<OrdenResponse> => {
  const response = await api.patch(`/ordenes-servicio/${idOrden}/`);
  return response.data;
};
