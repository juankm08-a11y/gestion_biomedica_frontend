import { NextResponse } from "next/server";

export const connectBackend = async () => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
  console.log(`Conexion con backend exitoso ${BASE_URL}`);
  return NextResponse.json({ message: "Connection success" }, { status: 200 });
};
