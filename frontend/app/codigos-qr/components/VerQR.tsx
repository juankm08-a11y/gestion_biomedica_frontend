"use client";

import { consultarQR } from "@/app/api/codigoQr/codigoQr";
import { useEffect, useState } from "react";

export default function VerQR({ equipoId }: { equipoId: number }) {
  const [qr, setQr] = useState<any>(null);

  const cargarQr = async () => {
    const response = await consultarQR(equipoId);
    setQr(response);
  };

  console.log("EquipoID:", equipoId);

  useEffect(() => {
    if (equipoId) {
      cargarQr();
    }
  }, [equipoId]);

  if (!qr) return <p>Cargando QR...</p>;

  return (
    <div>
      <img
        src={`http://127.0.0.1:8000${qr.codigo}`}
        alt="QR equipo"
        width={120}
      />
      <a href={`http://127.0.0.1:8000${qr.codigo}`} download>
        Descargar QR
      </a>
    </div>
  );
}
