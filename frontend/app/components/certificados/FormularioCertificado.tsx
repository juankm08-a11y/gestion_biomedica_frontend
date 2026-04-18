"use client";

import { ROUTES } from "@/app/routes/routes";
import { consultarUsuarios } from "@/services/usuario.service";
import { useRouter } from "next/navigation";
import FormularioBase from "../ui/form/FormularioBase";
import InputField from "../ui/input/InputField";
import SelectField from "../ui/input/SelectField";
import ButtonGrid from "../ui/layout/ButtonGrid";
import { useError } from "@/hooks/useError";
import { useList } from "@/hooks/useList";
import { UsuarioResponse } from "@/types/Usuario.type";
import { UseForm } from "@/hooks/useForm";
import { CertificadoMetrologicoRequest } from "@/types/Certificado.type";
import { certificadoToForm } from "@/mappers/certificado.mapper";
import { useAction } from "@/hooks/useAction";
import PageContainer from "../ui/layout/PageContainer";
import Card from "../ui/cards/Card";
import { registrarCertificado } from "@/services/certificados.service";
import { useHandle } from "@/hooks/useHandle";

export default function FormularioRegistroCertificado() {
  const router = useRouter();

  const {error} = useError()

  const {data:usuarios} = useList<UsuarioResponse>(consultarUsuarios);

  const {formData, handleChange} = UseForm<CertificadoMetrologicoRequest>(certificadoToForm())

  const {handle} = useHandle();
  
  const {execute: crearCertificado,loading} = 
  useAction(registrarCertificado)

  const handleSubmit = (e:any) => {
    e.preventDefault();

    handle(async () => {
      await crearCertificado(formData);

      alert("Certificado registrado correctamente");

      router.push(ROUTES.certificados.LISTA)
    })
  }

  return (
   <PageContainer>
    <Card variant="form">
       <FormularioBase titulo="Registrar Certificado" onSubmit={handleSubmit}>
        {error && <p className="text-red-500 mb-4">
          {error}
          </p>}
      <InputField
        label="Numero Certificado"
        name="numeroCertificado"
        value={formData.numeroCertificado}
        onChange={handleChange}
        type="number"
      />

      <InputField
        label="Fecha"
        name="fecha"
        value={formData.fecha}
        onChange={handleChange}
        type="number"
      />
      <SelectField
        label="Responsable"
        name="responsable"
        value={formData.responsable.toString()}
        onChange={handleChange}
        options={(usuarios ?? []).map((usuario) => ({
          value:usuario.id.toString(),
          label:usuario.nombre,
        }))}
      />
      <ButtonGrid>
        <button
          type="submit"
          disabled={loading}
          className="border border-gray-400 px-8 py-3 rounded-full"
        >
          {loading ? "Registrando...": "Registrar Certificado"}
        </button>
        <button
          type="button"
          className="border border-gray-400 px-8 py-3 rounded-full"
          onClick={() => router.push(ROUTES.certificados.LISTA)}
        >
          Cancelar
        </button>
        <button
          type="button"
          onClick={() => router.push(ROUTES.dashboard)}
          className="border border-gray-400 px-8 py-3 rounded-full"
        >
          Regresar a Dashboard
        </button>
      </ButtonGrid>
    </FormularioBase>
    </Card>
   </PageContainer>
  );
}
