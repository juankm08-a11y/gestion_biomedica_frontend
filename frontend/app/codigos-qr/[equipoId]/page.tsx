import VerQR from "../components/VerQR";

export default async function QRPage({
  params,
}: {
  params: Promise<{ equipoId: string }>;
}) {
  const { equipoId } = await params;
  const id = Number(equipoId);

  console.log("EQUIPO recibido en page:", id);

  if (isNaN(id)) {
    return <p>Id del equipo inválido</p>;
  }

  return (
    <div>
      <h1>Codigo QR del Equipo</h1>

      <VerQR equipoId={id} />
    </div>
  );
}
