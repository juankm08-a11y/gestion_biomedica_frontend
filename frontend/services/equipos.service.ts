import { api } from "@/app/api/api";
import { Equipo } from "@/types/Equipo.type";

export const crearEquipo = async (data: Equipo) => {
  const res = await api.post("/equipos/", data);
  return res.data;
};

export const listarEquipos = async () => {
  const res = await api.get("/equipos/");
  return res.data;
};

export const obtenerEquipo = async (id: number) => {
  const res = await api.get(`/equipos/${id}/`);
  return res.data;
};

export const actualizarEquipo = async (id: number, data: Equipo) => {
  const res = await api.put(`/equipos/${id}/`, data);
  return res.data;
};

export const eliminarEquipo = async (id: number) => {
  const res = await api.delete(`/equipos/${id}/`);
  return res.data;
};
