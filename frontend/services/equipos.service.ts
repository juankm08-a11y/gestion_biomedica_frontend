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

export const obtenerEquipo = async (idEquipo: number) => {
  const res = await api.get(`/equipos/${idEquipo}/`);
  return res.data;
};

export const actualizarEquipo = async (idEquipo: number, data: Equipo) => {
  const res = await api.put(`/equipos/${idEquipo}/`, data);
  return res.data;
};

export const eliminarEquipo = async (idEquipo: number) => {
  const res = await api.delete(`/equipos/${idEquipo}/`);
  return res.data;
};
