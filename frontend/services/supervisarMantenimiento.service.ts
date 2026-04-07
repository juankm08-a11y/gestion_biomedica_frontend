import { api } from "@/app/api/api";

export const supervisarMantenimiento = async () => {
  const response = await api.get("/mantenimientos/programados/");
  return response.data;
};
