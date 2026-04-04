"use client";

import { useEffect, useState } from "react";
import { consultarEquipo } from "../api/equipos/equipo";
import { consultarQR } from "../api/codigoQr/codigoQr";

export default function GenerarCodigoQRPage() {
  const [equipos, setEquipos] = useState<any[]>([]);
  const [equipoSeleccionado, setEquipoSeleccionado] = useState("");
  const [qr, setQr] = useState("");
  const backendUrl = process.env.NEXT_PUBLIC_API_URL?.replace("/api", "");

  const cargarEquipos = async () => {
    try {
      const response = await consultarEquipo();
      setEquipos(response.data);
    } catch (error) {
      console.error("Error cargando equipos:", error);
    }
  };

  useEffect(() => {
    cargarEquipos();
  }, []);

  const handleConsultarQR = async () => {
    try {
      const response = await consultarQR(Number(equipoSeleccionado));
      setQr(response.data.qr);
      alert("QR generado correctamente");
    } catch (error) {
      console.error("Error al generar el QR:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10 border-[10px] border-red-600">
      <div className="bg-white p-10 border border-gray-300 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Generar código QR de Equipo
        </h1>
        <label className="block mb-2 font-semibold">Seleccionar Equipo</label>
        <select
          className="border w-full p-2 mb-4"
          value={equipoSeleccionado}
          onChange={(e) => setEquipoSeleccionado(e.target.value)}
        >
          <option value="">Seleccione un equipo</option>
          {equipos.map((equipo) => (
            <option key={equipo.idEquipo} value={equipo.idEquipo}>
              {equipo.nombre} - {equipo.marca}
            </option>
          ))}
        </select>

        <button
          className="border px-6 py-2 rounded hover:bg-gray-100 w-full"
          onClick={handleConsultarQR}
        >
          Ver QR
        </button>

        {qr && (
          <div className="mt-6 text-center">
            <p className="font-semibold mb-2">Código QR generado</p>

            <img
              src={`${backendUrl}${qr}`}
              alt="QR equipo"
              className="mx-auto border p-2"
            />
          </div>
        )}
      </div>
    </div>
  );
}
