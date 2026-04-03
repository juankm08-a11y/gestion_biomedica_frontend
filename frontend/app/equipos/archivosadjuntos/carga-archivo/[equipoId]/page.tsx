import SubirArchivo from "../../../components/SubirArchivo";

export default async function CargarArchivo({
  params,
}: {
  params: Promise<{ equipoId: string }>;
}) {
  const { equipoId } = await params;
  const id = Number(equipoId);

  if (isNaN(id)) {
    return <p>ID de equipo inválido</p>;
  }
  return (
    <div>
      <SubirArchivo equipoId={id} />
    </div>
  );
}
