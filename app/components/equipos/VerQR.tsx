"use client";

import PageContainer from "../ui/layout/PageContainer";
import Image from "next/image";
import { obtenerQrEquipo } from "@/services/qr.service";
import { useFetch } from "@/hooks/useFetch";
import Panel from "../ui/panel/Panel";

export default function VerQR({ equipoId }: { equipoId: number }) {
  const {
    data: qr,
    loading,
    error,
  } = useFetch(() => obtenerQrEquipo(equipoId), [equipoId]);

  if (loading) return <p>Cargando QR...</p>;

  if (error) return <p>Error cargando QR</p>;

  if (!qr) return <p>Cargando QR...</p>;
  return (
    <PageContainer>
      <Panel variant="qr" title="Codigo QR del equipo">
        <div className="flex flex-col items-center gap-4">
          <Image src={qr.codigo} width={200} alt="codigo qr equipo" />
          <a href={qr.codigo} download>
            Descargar QR
          </a>
        </div>
      </Panel>
    </PageContainer>
  );
}
