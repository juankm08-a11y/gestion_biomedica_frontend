"use client";

import ProtectedRoute from "@/app/components/equipos/ProtectedRoute";
import FormularioActualizarProgramacion from "@/app/components/mantenimientos/programacion-mantenimiento/FormularioActualizarProgramacion";

export default function ActualizarProgramacionPage() {
  <ProtectedRoute>
    <FormularioActualizarProgramacion />
  </ProtectedRoute>;
}
