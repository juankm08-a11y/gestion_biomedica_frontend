"use client";

import { crearEquipo } from "@/services/equipos.service";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FormularioBase from "../ui/form/FormularioBase";
import { ROUTES } from "../../routes/routes";
import InputField from "../ui/input/InputField";
import ButtonGrid from "../ui/layout/ButtonGrid";
import ModalUbicacion from "./ubicaciones/modalUbicacion";
import PageContainer from "../ui/layout/PageContainer";
import { UseForm } from "@/hooks/useForm";
import { useAction } from "@/hooks/useAction";
import { EquipoRequest } from "@/types/Equipo.type";
import Card from "../ui/cards/Card";

export default function FormularioRegistroEquipo() {
  const router = useRouter();
  const [showUbicacionModal, setShowUbicacionModal] = useState(false);

  const {
    formData: equipoData,
    handleChange,
    setField,
  } = UseForm<EquipoRequest>({
    nombre: "",
    marca: "",
    modelo: "",
    serie: "",
    fabricante: "",
    tipoTecnologia: "",
    ubicacion: 0,
  });

  const { execute: crear, loading } = useAction(crearEquipo);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await crear(equipoData);
  };

  return (
    <PageContainer>
      <Card variant="form">
        <FormularioBase
          titulo="CREAR HOJA DE VIDA DE EQUIPO"
          onSubmit={handleSubmit}
        >
          <InputField
            label="Nombre"
            name="nombre"
            value={equipoData.nombre || ""}
            onChange={handleChange}
          />

          <InputField
            label="Marca"
            name="marca"
            value={equipoData.marca || ""}
            onChange={handleChange}
          />

          <InputField
            label="Modelo"
            name="modelo"
            value={equipoData.modelo || ""}
            onChange={handleChange}
          />
          <InputField
            label="Serie"
            name="serie"
            value={equipoData.serie || ""}
            onChange={handleChange}
          />
          <InputField
            label="fabricante"
            name="fabricante"
            value={equipoData.fabricante || ""}
            onChange={handleChange}
          />
          <InputField
            label="Tipo Tecnología"
            name="tipoTecnologia"
            value={equipoData.tipoTecnologia || ""}
            onChange={handleChange}
          />
          <InputField
            label="Ubicacion"
            name="ubicacion"
            value={equipoData.ubicacion || ""}
            onChange={handleChange}
          />

          <ButtonGrid>
            <button
              className="border border-gray-400 px-6 py-2 rounded-full"
              type="submit"
              disabled={loading}
            >
              {loading ? "Guardando..." : "Guardar Equipo"}
            </button>
            <button
              className="border px-6 py-2 rounded"
              type="button"
              onClick={() => router.push(ROUTES.dashboard)}
            >
              Cancelar
            </button>
          </ButtonGrid>
        </FormularioBase>
      </Card>
      <button
        type="button"
        onClick={() => setShowUbicacionModal(true)}
        className="border px-4 py-2 rounded"
      >
        Registrar Ubicacion
      </button>
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
