import { api } from "../api";

export const cargarArchivoAdjunto = async (data: any) => {
  const response = await api.post("/mantenimientos/archivo_adjunto/", data);
  return response.data;
};

export const verArchivoAdjunto = async (id: number) => {
  const response = await api.get(`/mantenimientos/archivo_adjunto/${id}/`);
  return response.data;
};
