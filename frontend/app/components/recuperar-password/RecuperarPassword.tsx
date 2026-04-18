"use client";

import { recuperarContraseña } from "@/services/usuario.service";
import { useEffect, useState } from "react";
import { ResetPasswordRequest } from "@/types/Auth.type";
import PageContainer from "../ui/layout/PageContainer";
import FormularioBase from "../ui/form/FormularioBase";
import InputField from "../ui/input/InputField";
import ButtonGrid from "../ui/layout/ButtonGrid";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import { useRouter, useSearchParams } from "next/navigation";
import { ROUTES } from "@/app/routes/routes";
import { UseForm } from "@/hooks/useForm";
import { useAction } from "@/hooks/useAction";
import { useHandle } from "@/hooks/useHandle";
import { useError } from "@/hooks/useError";
import AuthLayout from "../ui/layout/AuthLayout";
import AuthForm from "../ui/form/AuthForm";

export default function RecuperarPasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
 const {formData,handleChange, setFormData} = 
 UseForm<ResetPasswordRequest>({
  uid:"",
  nuevaPassword:"",
  token:"",
 })

 const {execute:reset} = 
 useAction(recuperarContraseña)

 const {handle} = useHandle()

 const {error} = useError()

 useEffect(() => {
  const uid = searchParams.get("uid");
  const token = searchParams.get("token");

  if (uid && token) {
    setFormData(prev => ({
      ...prev,
      uid,
      token
    }))
  }
 }, [searchParams])

 const handleSubmit = (e:any) => {
  e.preventDefault()

  handle(async () => {
    await reset(formData)

    router.push(ROUTES.dashboard)
  }) 
 }

  return (
    <AuthLayout>
     <AuthForm title="Actualizar contraseña" subtitle="Ingresa tu nueva contraseña" onSubmit={handleSubmit}>
      {error && (
        <p className="text-red-500 tex-sm text-center">
          {error}
        </p>
      )}
       <InputField
          label="Nueva contraseña"
          name="nuevaPassword"
          value={formData.nuevaPassword}
          onChange={handleChange}
          type="password"
        />

      
        <PrimaryButton text="Actualizar Contraseña" />
      </AuthForm>    
    </AuthLayout>
  );
}
