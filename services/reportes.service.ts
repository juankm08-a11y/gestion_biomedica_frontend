import { api } from "@/app/api/api";

export const consultarReporte = async () => {
  const response = await api.get("/reportes/generar-reporte/");
  return response.data;
};
