import { api } from "@/app/api/api";

export const consultarReporte = async () => {
  const response = await api.get("/reportes/");
  return response.data;
};

export const registrarReporte = async () => {
  const response = await api.post("/reportes/");
  return response.data;
};
