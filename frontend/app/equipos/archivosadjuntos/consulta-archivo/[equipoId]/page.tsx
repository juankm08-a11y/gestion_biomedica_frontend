import HistorialArchivos from "../../../components/HistorialArchivos";

export default async function ConsultaArchivo({
  params,
}: {
  params: Promise<{ equipoId: string }>;
}) {
  const { equipoId } = await params;

  return (
    <div>
      <HistorialArchivos equipoId={Number(equipoId)} />
    </div>
  );
}
