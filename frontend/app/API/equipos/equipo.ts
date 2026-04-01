import { api } from "../api";

export const registrarEquipo = async (data: any) => {
  const response = await api.post("/equipos/", data);
  return response.data;
};

export const consultarEquipo = async () => {
  const response = await api.get("/equipos/");
  return response.data;
};

export const consultarEquipos = async (id: number) => {
  const response = await api.get(`/equipos/${id}/`);
  return response.data;
};

export const actualizarEquipo = async (id: number, data: any) => {
  const response = await api.put(`/equipos/${id}/`, data);
  return response.data;
};

export const eliminarEquipo = async (id: number) => {
  const response = await api.delete(`/equipos/${id}/`);
  return response.data;
};
