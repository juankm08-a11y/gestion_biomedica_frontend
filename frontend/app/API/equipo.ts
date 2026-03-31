import { api } from "./api";

export const createEquipo = async () => {
  const response = await api.post("/equipos/");
  return response.data;
};

export const getEquipos = async () => {
  const response = await api.get("/equipos/");
  return response.data;
};

export const getEquipo = async (id: number) => {
  const response = await api.get("/equipos/${id}");
  return response.data;
};

export const putEquipo = async (id: number) => {
  const response = await api.put("/equipos/${id}/");
  return response.data;
};

export const deleteEquipo = async (id: number) => {
  const response = await api.delete("/equipos/${id}");
  return response.data;
};
