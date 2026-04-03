import ConsultaNotificacion from "./consulta-notificacion/page";
import CrearNotificacion from "./registro-notificacion/page";

export default function NotificacionPage() {
  return (
    <div>
      <h1>Hola Mundo desde Notificaciones</h1>
      <CrearNotificacion />
      <ConsultaNotificacion />
    </div>
  );
}
