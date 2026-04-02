import { api } from "../api";

export const consultarReporte = async () => {
  const response = await api.get("/reportes/");
  return response.data;
};
