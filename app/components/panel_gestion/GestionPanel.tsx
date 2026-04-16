import Icon from "../ui/iconos/Icon";
import Panel from "../ui/panel/Panel";

export default function GestionUsuariosPanel() {
  return (
    <Panel variant="gestion" title="PANEL ADMINISTRATIVO">
      <div className="bg-blue-200 p-4 mb-6 text-center">
        Hola señor administrador bienvenido al sistema de gestión de equipos biomédicos
      </div>

      <h3 className="text-center font-bold mb-6">
        Gestión del sistema
      </h3>

      <div className="grid grid-cols-3 gap-10 text-center">
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Icon name="alerta" size={40} />
          <p>HISTORIAL DEL SISTEMA</p>
        </div>
         <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Icon name="medico" size={40} />
          <p>USUARIOS</p>
        </div> <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Icon name="hospital" size={40} />
          <p>ROLES</p>
        </div> <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Icon name="configuracion" size={40} />
          <p>Configuración del sistema</p>
        </div>
         <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Icon name="alerta" size={40} />
          <p>HISTORIAL DEL SISTEMA</p>
        </div>
        <div className="flex flex-col items-center gap-2 cursor-pointer">
          <Icon name="regresar" size={40} />
          <p>Cerrar sesión</p>
        </div>
      </div>
      
    </Panel>
  );
}
