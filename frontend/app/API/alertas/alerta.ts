import { api } from "../api";

export const verificarAlertas = async () => {
  const response = await api.get("/mantenimientos/verificar-alertas/");
  return response.data;
};
