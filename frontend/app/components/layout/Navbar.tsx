"use client";
import { ROUTES } from "@/app/routes/routes";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex gap-6">
      <Link href={ROUTES.dashboard}>Dashboard</Link>
      <Link href={ROUTES.equipos.LISTA}>Equipos</Link>
      <Link href={ROUTES.mantenimietos.LISTA}>Mantenimientos</Link>
      <Link href={ROUTES.reportes}>Reportes</Link>
    </nav>
  );
}
