import { api } from "../api";

export const registrarUbicacion = async (data: any) => {
  const response = await api.post("/equipos/ubicaciones/", data);
  return response.data;
};

export const actualizarUbicacion = async (id: number) => {
  const response = await api.put(`/equipos/ubicaciones/${id}`);
  return response.data;
};
