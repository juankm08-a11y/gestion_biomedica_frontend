import { api } from "@/app/api/api";
import { Ubicacion } from "@/types/Ubicacion.type";

export const registrarUbicacion = async (data: Ubicacion) => {
  const response = await api.post("/equipos/ubicaciones/", data);
  return response.data;
};

export const actualizarUbicacion = async (id: number, data: Ubicacion) => {
  const response = await api.put(`/equipos/ubicaciones/${id}/`, data);
  return response.data;
};
