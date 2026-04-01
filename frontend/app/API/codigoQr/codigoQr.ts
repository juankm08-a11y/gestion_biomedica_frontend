import { api } from "../api";

export const generarCodigo = async (id: number) => {
  const response = await api.post(`/codigos/qr/<int:equipo_id>/`);
  return response.data;
};
