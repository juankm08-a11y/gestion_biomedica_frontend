"use client";
import {
  aprobarNotificacion,
  consultarNotificaciones,
  ejecutarNotificacion,
} from "@/app/api/notificaciones/notificacion";
import { useEffect, useState } from "react";

export default function HistorialNotificaciones() {
  const [notificaciones, setNotificaciones] = useState<any[]>([]);

  const cargarNotificaciones = async () => {
    const response = await consultarNotificaciones();

    setNotificaciones(Array.isArray(response) ? response : []);
  };

  useEffect(() => {
    cargarNotificaciones();
  }, []);

  const handleAprobar = async (id: number) => {
    await aprobarNotificacion(id);
    cargarNotificaciones();
  };

  const handleEjecutar = async (id: number) => {
    await ejecutarNotificacion(id);
    cargarNotificaciones();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-[10px] border-red-600">
      <table>
        <thead>
          <tr>
            <th>Mensaje</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Destinatario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {notificaciones.map((n) => (
            <tr key={n.idNotificacion}>
              <td>{n.mensaje}</td>
              <td>{n.fecha}</td>
              <td>{n.estado}</td>
              <td>{n.destinatario}</td>
              <td>
                <button onClick={() => handleAprobar(n.idNotificacion)}>
                  Aprobar
                </button>
                <button onClick={() => handleEjecutar(n.idNotificacion)}>
                  Ejecutar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
