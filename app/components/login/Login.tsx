"use client";

import { useRouter } from "next/navigation";
import { ROUTES } from "@/app/routes/routes";
import InputField from "../ui/input/InputField";
import ButtonGrid from "../ui/layout/ButtonGrid";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import { LoginRequest } from "@/types/Auth.type";
import { UseForm } from "@/hooks/useForm";
import { useAction } from "@/hooks/useAction";
import { useHandle } from "@/hooks/useHandle";
import { useError } from "@/hooks/useError";
import { iniciarSesion } from "@/services/usuario.service";
import AuthForm from "../ui/form/AuthForm";
import AuthLayout from "../ui/layout/AuthLayout";

export default function Login() {
  const router = useRouter();

  const {formData,handleChange} = 
  UseForm<LoginRequest>({
    correo:"",
    password:"",
  })

  const {execute:login} = useAction(iniciarSesion);

  const {handle} = useHandle()

  const {error} = useError()

  const handleSubmit = (e:any) => {
    e.preventDefault()

    handle(async () => {
      const response = await login(formData)

      localStorage.setItem("access",response.access)
      localStorage.setItem("refresh",response.refresh)
      localStorage.setItem("rol",response.rol)
      localStorage.setItem("usuario",response.usuario)
    })
  }

  return (
    <AuthLayout>
      <AuthForm title="Bienvenido" subtitle="Ingresa tus credenciales" onSubmit={handleSubmit}>
        {error && (
          <p className="text-red-500">
            {error}
          </p>
        )}
        <InputField
          label="Contraseña"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <InputField
          label="Correo"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
        />

        <ButtonGrid>
          <PrimaryButton text="Iniciar Sesion" />
        </ButtonGrid>
        <div className="flex flex-col items-center gap-2 mt-4">
          <button
            type="button"
            className="text-blue-500 hover:underline text-sm"
            onClick={() => router.push(ROUTES.recuperarpassword)}
          >
            ¿Olvidaste tu contraseña?
          </button>
          <button
            type="button"
            className="text-blue-500 hover:underline text-sm"
            onClick={() => router.push(ROUTES.register)}
          >
            ¿Aún no tienes cuenta?
          </button>
          <button
            type="button"
            className="text-blue-500 hover:underline text-sm"
            onClick={() => router.push(ROUTES.recuperarCuenta)}
          >
            No puedes acceder a tu cuenta?
          </button>
        </div>
      </AuthForm>
     
    </AuthLayout>
  );
}
