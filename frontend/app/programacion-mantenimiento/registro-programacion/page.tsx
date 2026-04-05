"use client";

import ProtectedRoute from "@/app/components/equipos/ProtectedRoute";
import FormularioRegistroProgramacion from "../components/FormularioRegistro";

export default function RegistroProgramacion() {
  return (
    <ProtectedRoute roles={["superadministrador", "tecnicobiomedico"]}>
      <FormularioRegistroProgramacion />
    </ProtectedRoute>
  );
}
