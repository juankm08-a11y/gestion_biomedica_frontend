import FormularioActualizarEquipo from "../components/FormularioActualizarEquipo/FormularioActualizarEquipo";

export default function ActualizarEquipo({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <FormularioActualizarEquipo id={Number(params.id)} />
    </div>
  );
}
