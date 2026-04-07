"use client";

interface Props {
  params: { id: string };
}

export default function EquipoDetallePage({ params }: Props) {
  return (
    <div>
      <h1>Detalle del equipo</h1>
      <p>ID del equipo: {params.id}</p>
    </div>
  );
}
