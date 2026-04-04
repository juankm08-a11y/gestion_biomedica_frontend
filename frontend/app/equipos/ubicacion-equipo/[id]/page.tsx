"use client";

import { useParams } from "next/navigation";
import FormularioActualizarUbicacion from "../components/FormularioActualizarUbicacion1";
import ProtectedRoute from "@/app/components/ProtectedRoute";

export default function ActualizarUbicacionPage() {
  const params = useParams();

  const id = Number(Array.isArray(params.id) ? params.id[0] : params.id);

  return (
    <ProtectedRoute
      roles={[
        "superadministrador",
        "administrador",
        "ingenierobiomedico",
        "tecnicobiomedico",
      ]}
    >
      <FormularioActualizarUbicacion id={id} />;
    </ProtectedRoute>
  );
}
