"use client";
import VerOrden from "./consulta-orden/page";
import RegistroOrden from "./registro-orden/page";

export default function OrdenesServicioPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 border-[10px] border-red-600">
      <h1 className="text-2xl font-bold mb-6">Ordenes de Servicio</h1>

      <div className="bg-white border border-gray-300 p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Registrar Orden</h2>
        <VerOrden />
      </div>

      <div className="bg-white border border-gray-300 p-6">
        <h2 className="text-lg font-smibold mb-4">Lista de Ordenes</h2>
        <RegistroOrden />
      </div>
    </div>
  );
}
