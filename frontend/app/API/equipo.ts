import axios from "axios";
import { API } from "./api";
import { NextResponse } from "next/server";

export async function createEquipo() {
  const equipo = await axios.post(`${API}`);
  console.log(`${equipo}`);
  return NextResponse.json({
    message: "Equipo creado correctamente",
    status: 201,
  });
}

export async function consultarEquipo(id) {
  const equipo = await axios.get(`${API}/<int:pk>/`);
  return NextResponse.json({
    message: "Equipo encontrado",
    status: 201,
  });
}
