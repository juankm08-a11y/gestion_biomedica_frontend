import { api } from "../api";

export const consultarQR = async (id: number) => {
  const response = await api.get(`/codigos/qr/${id}/`);
  return response.data;
};
