"use client";

import { ROUTES } from "@/app/routes/routes";
import { consultarMantenimientos } from "@/services/mantenimientos.service";
import { crearOrden } from "@/services/ordenesServicio.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import FormularioBase from "../../ui/form/FormularioBase";
import SelectField from "../../ui/input/SelectField";
import InputField from "../../ui/input/InputField";
import ButtonGrid from "../../ui/layout/ButtonGrid";

export default function FormularioRegistrarOrden() {
  const [mantenimientos, setMantenimientos] = useState<any[]>([]);
  const [ordenData, setOrdenData] = useState({
    idOrden: 0,
    mantenimiento: 0,
    tipoServicio: "",
    descripcion: "",
    fechaInicio: "",
    fechaFin: "",
    estado: "pendiente" as "aprobado" | "pendiente" | "ejecutado",
  });

  const router = useRouter();

  useEffect(() => {
    const cargar = async () => {
      const data = await consultarMantenimientos();
      setMantenimientos(Array.isArray(data) ? data : []);
    };
    cargar();
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setOrdenData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const payload = {
      ...ordenData,
      mantenimiento: Number(ordenData.mantenimiento),
    };
    await crearOrden(payload);

    alert("Orden registrada correctamente");

    router.push(ROUTES.ordenSerivicio.LISTA);
  };

  return (
    <FormularioBase titulo="Registrar Orden" onSubmit={handleSubmit}>
      <SelectField
        label="Mantenimiento"
        name="mantenimiento"
        value={ordenData.mantenimiento.toString()}
        onChange={handleChange}
        options={mantenimientos.map((mantenimiento) => ({
          value: mantenimiento.idMantenimiento,
          label: mantenimiento.idMantenimiento.toString(),
        }))}
      />
      <InputField
        label="Tipo Servicio"
        name="tipoServicio"
        value={ordenData.tipoServicio}
        onChange={handleChange}
      />
      <InputField
        label="Descripcion"
        name="descripcion"
        value={ordenData.descripcion}
        onChange={handleChange}
      />
      <SelectField
        label="Estado"
        name="estado"
        value={ordenData.estado}
        onChange={handleChange}
        options={[
          { value: "aprobado", label: "Aprobado" },
          { value: "pendiente", label: "Pendiente" },
          { value: "ejecutado", label: "Ejecutado" },
        ]}
      />
      <ButtonGrid>
        <button
          type="submit"
          className="px-8 py-3 rounded-full bg-blue-500 text-white"
        >
          Guardar Orden
        </button>
        <button
          type="button"
          className="px-8 py-3 rounded-full bg-gray-500 text-white"
          onClick={() => router.push(ROUTES.ordenSerivicio.LISTA)}
        >
          Cancelar
        </button>
        <button
          type="button"
          onClickCapture={() => router.push(ROUTES.dashboard)}
          className="px-8 py-3 rounded-full bg-gray-500 text-white"
        >
          Regresar a Dashboard
        </button>
      </ButtonGrid>
    </FormularioBase>
  );
}
