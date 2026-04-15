"use client";

import { ROUTES } from "@/app/routes/routes";
import {
  actualizarEquipo,
  listarEquipos,
  obtenerEquipo,
} from "@/services/equipos.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PageContainer from "../ui/layout/PageContainer";
import FormularioBase from "../ui/form/FormularioBase";
import InputField from "../ui/input/InputField";
import ButtonGrid from "../ui/layout/ButtonGrid";
import ModalUbicacion from "./ubicaciones/modalUbicacion";
import { useError } from "@/hooks/useError";
import { UseForm } from "@/hooks/useForm";
import { EquipoRequest, EquipoResponse } from "@/types/Equipo.type";
import { useAction } from "@/hooks/useAction";
import Card from "../ui/cards/Card";

export default function FormularioActualizarEquipo({
  idEquipo,
}: {
  idEquipo: number;
}) {
  const router = useRouter();
  const [showUbicacionModal, setShowUbicacionModal] = useState(false);

  const { error, handleError } = useError();

  const { formData, handleChange, setFormData, setField } =
    UseForm<EquipoRequest>({
      nombre: "",
      marca: "",
      modelo: "",
      serie: "",
      fabricante: "",
      tipoTecnologia: "",
      ubicacion: 0,
    });

  const { execute: updateEquipo, loading } = useAction(actualizarEquipo);

  useEffect(() => {
    const cargarEquipo = async () => {
      try {
        const data: EquipoResponse = await obtenerEquipo(idEquipo);

        setFormData({
          nombre: data.nombre,
          marca: data.marca,
          modelo: data.modelo,
          serie: data.serie,
          fabricante: data.fabricante,
          tipoTecnologia: data.tipoTecnologia,
          ubicacion: data.ubicacion,
        });
      } catch (err) {
        handleError(err);
      }
    };

    if (!isNaN(idEquipo)) {
      cargarEquipo();
    }
  }, [idEquipo]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await updateEquipo(idEquipo, formData);

      alert("Equipo actualizado correctamente");

      router.push(ROUTES.equipos.LISTA);
    } catch (err) {
      handleError(err);
    }
  };
  return (
    <PageContainer>
      <Card variant="form">
        <FormularioBase
          titulo="Formulario Actualización Equipo"
          onSubmit={handleSubmit}
        >
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <InputField
            label="Nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          <InputField
            label="Marca"
            name="marca"
            value={formData.marca}
            onChange={handleChange}
          />
          <InputField
            label="Modelo"
            name="modelo"
            value={formData.modelo}
            onChange={handleChange}
          />
          <InputField
            label="Serie"
            name="serie"
            value={formData.serie}
            onChange={handleChange}
          />
          <InputField
            label="Fabricante"
            name="fabricante"
            value={formData.fabricante}
            onChange={handleChange}
          />
          <InputField
            label="Tipo Tecnología"
            name="tipoTecnologia"
            value={formData.tipoTecnologia}
            onChange={handleChange}
          />
          <InputField
            label="Ubicacion"
            name="ubicacion"
            value={formData.ubicacion}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={() => setShowUbicacionModal(true)}
            className="border px-4 py-2 rounded"
          >
            Registrar Ubicacion
          </button>

          <ButtonGrid>
            <button
              type="submit"
              disabled={loading}
              className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 font-medium"
            >
              {loading ? "Actualizando..." : "Actualizar Equipo"}
            </button>
            <button
              type="button"
              onClick={() => router.push(ROUTES.dashboard)}
              className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 font-medium"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={() => router.push(ROUTES.dashboard)}
              className="border border-gray-400 px-8 py-3 rounded-full hover:bg-gray-100 font-medium"
            >
              Actualizar Ubicacion
            </button>
          </ButtonGrid>
        </FormularioBase>
      </Card>
      {showUbicacionModal && (
        <ModalUbicacion
          onClose={() => setShowUbicacionModal(false)}
          onSuccess={(idUbicacion) => {
            setField("ubicacion", idUbicacion);
          }}
        />
      )}
    </PageContainer>
  );
}
