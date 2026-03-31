import axios from "axios";
import { api } from "./api";
import { NextResponse } from "next/server";

export const createEquipo = async () => {
  const response = await api.post("/equipos/");
};

export const getEquipos = async () => {
  const response = await api.get("/equipos/");
  return response.data;
};

export const getEquipo = async (id: number) => {
  const response = await api.get("/equipos/${id}");
  return response.data;
};

export const putEquipo = async (id: number) => {
  const response = await api.put("/equipos/${id}/");
  return response.data;
};

export const deleteEquipo = async (id: number) => {
  const response = await api.delete("/equipos/${id}");
  return response.data;
};
