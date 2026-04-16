"use client";

import { recuperarCuenta } from "@/services/usuario.service";
import PageContainer from "../ui/layout/PageContainer";
import FormularioBase from "../ui/form/FormularioBase";
import InputField from "../ui/input/InputField";
import ButtonGrid from "../ui/layout/ButtonGrid";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import { UseForm } from "@/hooks/useForm";
import { useAction } from "@/hooks/useAction";
import { useHandle } from "@/hooks/useHandle";

export default function RecoveryAccount() {
  const {formData,handleChange} = 
  UseForm({correo:""})

  const {execute: recover} = 
  useAction(recuperarCuenta)

  const {handle} = useHandle();

  const handleSubmit = (e:any) => {
    e.preventDefault()

    handle(() => recover(formData))
  }
  return (
    <PageContainer>
      <FormularioBase titulo="Recuperar Cuenta" onSubmit={handleSubmit}>
        <InputField
          label="Correo"
          name="correo"
          onChange={handleChange}
          value={formData.correo}
        />
        <ButtonGrid>
          <PrimaryButton text="Recuperar Cuenta" />
        </ButtonGrid>
      </FormularioBase>
    </PageContainer>
  );
}
