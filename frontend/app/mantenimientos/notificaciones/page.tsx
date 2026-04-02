"use client";

import {
  generarNotificacion,
  verNotificacion,
} from "@/app/api/mantenimientos/notificacion";
import { useEffect, useState } from "react";

export default function NotificacionesPage() {
  const [notificaciones, setNotificaciones] = useState<any[]>([]);

  const cargarNotificaciones = async () => {
    const response = await generarNotificacion();
    setNotificaciones(response.data);
  };

  useEffect(() => {
    cargarNotificaciones();
  }, []);

  return (
    <div>
      <h1>Notificaciones</h1>
      <div>
        {notificaciones.map((notificacion) => (
          <div key={notificacion.id}>
            <div>
              <div>
                <p>{notificacion.mensaje}</p>
                <p>{notificacion.estado}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
