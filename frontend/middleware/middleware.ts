import { PERMISOS } from "@/app/auth/permissions";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const rutasPublicas = [
  "/login",
  "/register",
  "/recuperar-password",
  "/recuperar-cuenta",
];

const permisosPorRuta: Record<string, string[]> = {
  "/equipos": PERMISOS.equipos,
  "/mantenimientos": PERMISOS.certificados,
  "/programacion-mantenimiento": PERMISOS.programaciones,
  "/orden-servicio": PERMISOS.ordenes,
  "/certificados": PERMISOS.certificados,
  "/notificaciones": PERMISOS.notificaciones,
  "/reportes": PERMISOS.reportes,
  "/super-mantenimiento": PERMISOS.supervisarMantenimiento,
};

export default function middleware(request: NextRequest) {
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
  return NextResponse.next();
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
