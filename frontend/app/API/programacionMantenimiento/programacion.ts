import { api } from "../api";

export const crearProgramacion = async (data: any) => {
  const response = await api.post(
    "/mantenimientos/programacion_mantenimiento/",
    data,
  );

  return response.data;
};

export const consultarProgramacion = async () => {
  const response = await api.get("/mantenimientos/programacion_mantenimiento/");
  return response.data;
};

export const actualizarProgramacion = async (id: number, data: any) => {
  const response = await api.put(
    `/mantenimientos/programacion_mantenimiento/${id}/`,
  );
  return response.data;
};
