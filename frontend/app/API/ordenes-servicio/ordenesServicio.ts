import { api } from "../api";

export const crearOrden = async (data: any) => {
  const response = await api.post("/mantenimientos/orden_servicio/", data);
  return response.data;
};

export const consultarOrden = async () => {
  const response = await api.get("/mantenimientos/orden_servicio/");
  return response.data;
};

export const actualizarOrden = async (id: number, data: any) => {
  const response = await api.put(`/mantenimientos/orden_servicio/${id}/`, data);
  return response.data;
};

export const cerrarOrden = async (id: number) => {
  const response = await api.patch(`/mantenimientos/orden_servicio/${id}/`);
  return response.data;
};
