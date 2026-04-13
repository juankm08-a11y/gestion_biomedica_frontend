import { api } from "@/app/api/api";

export const obtenerQrEquipo = async (equipoId: number) => {
  const response = await api.get(`/qr/${equipoId}/`);
  return response.data;
};
