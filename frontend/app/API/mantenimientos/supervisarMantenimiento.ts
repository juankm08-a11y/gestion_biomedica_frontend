import { api } from "../api";

export const supervisarMantenimiento = async () => {
  const response = await api.get("/mantenimientos/programados/");
  return response.data;
};
