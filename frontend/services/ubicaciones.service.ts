import { api } from "@/app/api/api";
import { Ubicacion } from "@/types/Ubicacion.type";

export const registrarUbicacion = async (data: Ubicacion) => {
  const response = await api.post("/ubicaciones/", data);
  return response.data;
};

export const actualizarUbicacion = async (
  idUbicacion: number,
  data: Ubicacion,
) => {
  const response = await api.put(`/ubicaciones/${idUbicacion}/`, data);
  return response.data;
};
