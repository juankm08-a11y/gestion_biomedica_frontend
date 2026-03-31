import { NextResponse } from "next/server";

export const connectBackend = async () => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  if (!BASE_URL) {
    return NextResponse.json({ error: "API URL not found" }, { status: 500 });
  }
  console.log(`Conexion con backend exitoso ${BASE_URL}/`);
  return NextResponse.json({ message: "Connection success" }, { status: 200 });
};
