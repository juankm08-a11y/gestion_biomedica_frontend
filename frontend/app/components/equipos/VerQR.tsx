"use client";

import { useEffect, useState } from "react";
import PageContainer from "../layout/PageContainer";
import Image from "next/image";
import { obtenerQrEquipo } from "@/services/qr.service";
import { useQr } from "@/hooks/useQr";

export default function VerQR({ equipoId }: { equipoId: number }) {
  const { qr, loading } = useQr(equipoId);

  if (loading) return <p>Cargando QR...</p>;

  if (!qr) return <p>Cargando QR...</p>;
  return (
    <PageContainer title="Código QR del Equipo">
      <Image src={qr.codigo} width={200} alt="codigo qr equipo" />
      <a href={qr.codigo} download></a>{" "}
    </PageContainer>
  );
}
