"use client";

import { recuperarCuenta } from "@/services/usuario.service";
import InputField from "../ui/input/InputField";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import { UseForm } from "@/hooks/useForm";
import { useAction } from "@/hooks/useAction";
import { useHandle } from "@/hooks/useHandle";
import AuthLayout from "../ui/layout/AuthLayout";
import AuthForm from "../ui/form/AuthForm";
import { useError } from "@/hooks/useError";

export default function RecoveryAccount() {
  const {formData,handleChange} = 
  UseForm({correo:""})

  const {execute: recover} = 
  useAction(recuperarCuenta)

  const {handle} = useHandle();

  const {error} = useError()

  const handleSubmit = (e:any) => {
    e.preventDefault()

    handle(() => recover(formData))
  }
  return (
    <AuthLayout>
      <AuthForm title="Recuperar cuenta" subtitle="Ingresa tu correo para recuperar el acceso" 
      onSubmit={handleSubmit} >
        {error && (
          <p className="text-red-500 text-sm text-center">
            {error}
          </p>
        )}
        <InputField
          label="Correo"
          name="correo"
          onChange={handleChange}
          value={formData.correo}
        />
        <PrimaryButton text="Recuperar Cuenta" />
      </AuthForm>
    </AuthLayout>
  );
}
