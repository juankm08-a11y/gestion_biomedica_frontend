import { api } from "@/app/api/api";
import { Ubicacion } from "@/types/Ubicacion.type";

export const registrarUbicacion = async (data: Ubicacion) => {
  const response = await api.post("/ubicaciones/", data);
  return response.data;
};

export const actualizarUbicacion = async (id: number, data: Ubicacion) => {
  const response = await api.put(`/ubicaciones/${id}/`, data);
  return response.data;
};
