"use client";

import { consultarQR } from "@/services/qr.service";
import { useEffect, useState } from "react";
import PageContainer from "../layout/PageContainer";
import Image from "next/image";

export default function VerQR({ equipoId }: { equipoId: number }) {
  const [qr, setQr] = useState<any>(null);

  useEffect(() => {
    cargarQR();
  }, []);

  const cargarQR = async () => {
    const res = await consultarQR(equipoId);
    setQr(res);
  };

  if (!qr) return <p>Cargando QR...</p>;
  return (
    <PageContainer title="Código QR del Equipo">
      <Image src={qr.codigo} width={200} alt="codigo qr equipo" />
      <a href={qr.codigo} download></a>{" "}
    </PageContainer>
  );
}
