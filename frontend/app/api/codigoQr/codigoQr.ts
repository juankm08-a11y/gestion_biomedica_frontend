import { api } from "@/app/api/api";

export const consultarQR = async (equipoId: number) => {
  const response = await api.get(`/codigos/qr/${equipoId}/`);
  return response.data;
};
