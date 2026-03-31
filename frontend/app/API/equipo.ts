import axios from "axios";
import { connectBackend } from "./api";
import { NextResponse } from "next/server";

export default async function crearEquipo() {
  const equipo = await axios.post(`${connectBackend}`);
  console.log(`${equipo}`);
  return NextResponse.json({
    message: "Equipo creado correctamente",
    status: 201,
  });
}
