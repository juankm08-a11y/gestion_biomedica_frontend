"use client";

import {
  aprobarMantenimiento,
  consultarMantenimientos,
  eliminarMantenimiento,
} from "@/services/mantenimientos.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PageContainer from "../ui/layout/PageContainer";
import Table from "../ui/table/DataTable";
import { ROUTES } from "@/app/routes/routes";
import { consultarUsuarios } from "@/services/usuario.service";

export default function HistorialMantenimiento() {
  const [mantenimientos, setMantenimientos] = useState<any[]>([]);
  const [buscar, setBuscar] = useState("");
  const router = useRouter();
  const [modalAprobar, setModalAprobar] = useState<number | null>(null);
  const [usuarioFirma, setUsuarioFirma] = useState<number | null>(null);
  const [usuarios, setUsuarios] = useState<any[]>([]);

  const cargarMantenimiento = async () => {
    try {
      const response = await consultarMantenimientos();
      setMantenimientos(Array.isArray(response) ? response : []);
    } catch (error: any) {
      console.error("Error: ", error.response);
    }
  };

  useEffect(() => {
    const cargarUsuarios = async () => {
      try {
        const response = await consultarUsuarios();
        setUsuarios(Array.isArray(response) ? response : []);
      } catch (error) {
        console.error("Error al cargar usuarios", error);
      }
    };
    cargarUsuarios();
  }, []);

  useEffect(() => {
    cargarMantenimiento();
  }, []);

  const handleEliminar = async (id: number) => {
    if (!confirm("Seguro que deseas eliminar este mantenimiento")) return;

    await eliminarMantenimiento(id);
    cargarMantenimiento();
  };

  const mantenimientosFiltrados = mantenimientos.filter(
    (m) =>
      String(m.equipoNombre ?? "")
        .toLowerCase()
        .includes(buscar.toLowerCase()) ||
      String(m.tipo ?? "")
        .toLowerCase()
        .includes(buscar.toLowerCase()) ||
      String(m.estado ?? "")
        .toLowerCase()
        .includes(buscar.toLowerCase()),
  );

  const headers = [
    "Equipo",
    "Tipo",
    "Estado",
    "Fecha Inicio",
    "Fecha Fin",
    "Responsable",
    "Acciones",
  ];

  const rows = mantenimientosFiltrados.map((mantenimiento) => [
    mantenimiento.equipoNombre ?? mantenimiento.equipo,
    mantenimiento.tipo,
    mantenimiento.estado,
    mantenimiento.fechaInicio,
    mantenimiento.fechaFin,
    mantenimiento.responsableNombre ?? mantenimiento.responsable,
    <div className="flex gap-2">
      <button
        onClick={() =>
          router.push(
            ROUTES.mantenimientos.ACTUALIZAR(mantenimiento.idMantenimiento),
          )
        }
        className="border px-4 py-2 rounded"
      >
        Editar
      </button>
      <button
        onClick={() => handleEliminar(mantenimiento.idMantenimiento)}
        className="border px-4 py-2 rounded"
      >
        Eliminar
      </button>
      <button
        className="border px-4 py-2 rounded bg-green-500 text-white"
        onClick={() =>
          router.push(
            `/mantenimientos/orden-servicio/registro?mantenimientoId=${mantenimiento.idMantenimiento}`,
          )
        }
      >
        Crear Orden
      </button>
      <button
        className="border px-4 py-2 rounded bg-green-500 text-white"
        onClick={() => setModalAprobar(mantenimiento.idMantenimiento)}
      >
        Aprobar
      </button>
      <button
        onClick={() =>
          router.push(
            ROUTES.mantenimientos.REGISTRAR_PROGRAMACION(
              mantenimiento.idMantenimiento,
            ),
          )
        }
      >
        Programar Mantenimiento
      </button>
      <button
        onClick={() =>
          router.push(
            ROUTES.mantenimientos.SUPERVISAR(mantenimiento.idMantenimiento),
          )
        }
      >
        Supervisar Mantenimiento
      </button>
    </div>,
  ]);
  return (
    <PageContainer>
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Buscar mantenimiento..."
          className="border p-2 flex-1 text-base"
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
        />
        <button className="border px-4 py-2">Buscar</button>
      </div>
      <Table headers={headers} rows={rows} />
      {modalAprobar && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded  w-[400px]">
            <h2 className="text-lg font-bold mb-4">Aprobar Mantenimiento</h2>
            <select
              className="border p-2 w-full mb-4"
              onChange={(e) => setUsuarioFirma(Number(e.target.value))}
            >
              <option value="">Seleccione responsable</option>
              {usuarios.map((u) => (
                <option value={u.idUsuario} key={u.idUsuario}>
                  {u.nombre}
                </option>
              ))}
            </select>
            <div className="flex justify-end gap-3">
              <button onClick={() => setModalAprobar(null)}>Cancelar</button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={async () => {
                  if (!usuarioFirma) {
                    alert("Debe seleccionar un responsable");
                    return;
                  }
                  await aprobarMantenimiento(modalAprobar, usuarioFirma);
                  setModalAprobar(null);
                  cargarMantenimiento();
                }}
              >
                Firmar y Aprobar
              </button>
            </div>
          </div>
        </div>
      )}
    </PageContainer>
  );
}
