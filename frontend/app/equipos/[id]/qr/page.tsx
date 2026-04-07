"use client";

interface Props {
  params: { id: string };
}

export default function QRPage({ params }: Props) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>QR del equipo</h1>
      <p>ID del equipo: {params.id}</p>
      <p>Aquí se mostrará el código QR del equipo.</p>
    </div>
  );
}
