"use client";

import { ROUTES } from "@/app/routes/routes";
import {
  actualizarOrden,
  consultarOrden,
} from "@/services/ordenesServicio.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PageContainer from "../../ui/layout/PageContainer";
import FormularioBase from "../../ui/form/FormularioBase";
import InputField from "../../ui/input/InputField";
import SelectField from "../../ui/input/SelectField";
import ButtonGrid from "../../ui/layout/ButtonGrid";
import PrimaryButton from "../../ui/buttons/PrimaryButton";
import {
  consultarMantenimiento,
  consultarMantenimientos,
} from "@/services/mantenimientos.service";

export default function FormularioActualizarOrden({
  idOrden,
}: {
  idOrden: number;
}) {
  const router = useRouter();

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

  useEffect(() => {
    if (!idOrden || isNaN(idOrden)) return;

    const cargarDatos = async () => {
      try {
        const orden = await consultarOrden(idOrden);

        const mantenimientosData = await consultarMantenimientos();

        setOrdenData(orden);
        setMantenimientos(mantenimientosData);
      } catch (error) {
        console.error("Error al cargar los datos", error);
      }
    };
    cargarDatos();
  }, [idOrden]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setOrdenData({ ...ordenData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await actualizarOrden(idOrden, ordenData);

      alert("Orden actualizada correctamente");
      router.push(ROUTES.ordenSerivicio.LISTA);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PageContainer title="Actualizar Ordende Servicio">
      <FormularioBase titulo="Actualizar Orden" onSubmit={handleSubmit}>
        <SelectField
          label="Mantenimientos"
          name="mantenimiento"
          value={ordenData.mantenimiento.toString()}
          onChange={handleChange}
          options={mantenimientos.map((m) => ({
            value: m.idMantenimiento,
            label: `Mantenimiento ${m.idMantenimiento}`,
          }))}
        />{" "}
        <InputField
          label="Tipo Servicio"
          name="tipoServicio"
          onChange={handleChange}
          value={ordenData.tipoServicio}
        />
        <InputField
          label="Descripción"
          name="descripcion"
          onChange={handleChange}
          value={ordenData.descripcion}
        />
        <InputField
          label="Fecha Inicio"
          name="fechaInicio"
          onChange={handleChange}
          value={ordenData.fechaInicio}
        />
        <InputField
          label="Fecha Fin"
          name="fechaFin"
          onChange={handleChange}
          value={ordenData.fechaFin}
        />
        <SelectField
          label="Estado"
          name="estado"
          onChange={handleChange}
          value={ordenData.estado}
          options={[
            { value: "pendiente", label: "Pendiente" },
            { value: "aprobado", label: "Aprobado" },
            { value: "ejecutado", label: "Ejecutado" },
          ]}
        />
        <ButtonGrid>
          <PrimaryButton text="Actualzar Orden" />
          <PrimaryButton
            text="Cancelar"
            onClick={() => router.push(ROUTES.ordenSerivicio.LISTA)}
          />
          <PrimaryButton
            text="Regresar a Dashboard"
            onClick={() => router.push(ROUTES.dashboard)}
          />
        </ButtonGrid>
      </FormularioBase>
    </PageContainer>
  );
}
