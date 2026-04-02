import FormularioActualizarEquipo from "./components/FormularioActualizarEquipo";
import ListaEquipos from "./consulta-equipos/page";
import FormularioRegistro from "./registro-equipos/page";

export default function Equipos() {
  return (
    <main>
      <h1>HOJA DE VIDA DE EQUIPOS</h1>
      <div>
        <h1>Registrar Equipos</h1>
        <FormularioRegistro />
      </div>
      <div>
        <h1>Consultar Equipo</h1>
        <ListaEquipos />
      </div>
      <div>
        <h1>Actualizar Equipos</h1>
        <FormularioActualizarEquipo />
      </div>
    </main>
  );
}
