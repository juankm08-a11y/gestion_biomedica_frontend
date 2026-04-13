"use client";
import PageContainer from "@/app/components/layout/PageContainer";
import { obtenerEquipo } from "@/services/equipos.service";
import { Equipo } from "@/types/Equipo.type";
import { useEffect, useState } from "react";

export default function EquipoDetalle({ idEquipo }: { idEquipo: number }) {
  const [equipo, setEquipo] = useState<Equipo | null>(null);

  useEffect(() => {
    const cargarEquipo = async () => {
      try {
        const response = await obtenerEquipo(idEquipo);
        setEquipo(response.data);
      } catch (error) {
        console.error("Error cargando equipo", error);
      }
    };
    cargarEquipo();
  }, [idEquipo]);

  if (!equipo) {
    return <div>Cargando equipo...</div>;
  }

  return (
    <PageContainer title="Ver detalle de equipo">
      <p>
        <strong>ID:</strong>
        {equipo.idEquipo}
      </p>
      <p>
        <strong>Nombre:</strong>
        {equipo.nombre}
      </p>
      <p>
        <strong>Modelo:</strong>
        {equipo.modelo}
      </p>
      <p>
        <strong>Marca:</strong>
        {equipo.marca}
      </p>
      <p>
        <strong>Serie:</strong>
        {equipo.serie}
      </p>
      <p>
        <strong>Fabricante:</strong>
        {equipo.fabricante}
      </p>
      <p>
        <strong>Ubicacion:</strong>
        {equipo.ubicacion}
      </p>
      <p>
        <strong>Tipo Tecnologia:</strong>
      </p>
    </PageContainer>
  );
}
