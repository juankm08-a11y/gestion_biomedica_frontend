import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const rutasPublicas = [
  "/login",
  "/register",
  "/recuperar-password",
  "/recuperar-cuenta",
];

const permisosPorRuta: Record<string, string[]> = {
  "/equipos": ["superadministrador", "administrador", "ingenierobiomedico"],

  "/mantenimientos": ["superadministrador", "ingenierobiomedico"],

  "/programacion-mantenimiento": ["superadministrador", "tecnicobiomedico"],
  "/orden-servicio": ["superadministrador", "tecnicobiomedico"],
  "/certificados": ["superadministrador", "ingenierobiomedico"],
  "/notificaciones": ["superadministrador", "administrador"],
  "/reportes": ["superadministrador", "administrador"],
  "/supervisar-mantenimiento": ["superadministrador", "coordinador"],
};

export function middleware(request: NextRequest) {
  const token = request.cookies.get("access")?.value;
  const rol = request.cookies.get("rol")?.value;
  const { pathname } = request.nextUrl;

  if (rutasPublicas.includes(pathname)) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  for (const ruta in permisosPorRuta) {
    if (pathname.startsWith(ruta)) {
      const rolesPermitidos = permisosPorRuta[ruta];

      if (!rol || !rolesPermitidos.includes(rol)) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
    }
  }
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/equipos/:path*",
    "/mantenimientos/:path*",
    "/programacion-mantenimiento/:path*",
    "/orden-servicio/:path*",
    "/certificados/:path*",
    "/notificaciones/:path*",
    "/reportes/:path*",
    "/supervisar-mantenimiento/:path*",
  ],
};
