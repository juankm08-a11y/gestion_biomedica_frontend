"use client";

import { useRouter } from "next/navigation";
import { ROUTES } from "@/app/routes/routes";
import InputField from "../ui/input/InputField";
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

  const {execute:login,loading} = useAction(iniciarSesion);

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

      router.push(ROUTES.dashboard)
    })
  }

  const actions = [
    {
      label: "¿Olvidaste tu contraseña?",
      route:ROUTES.recuperarpassword
    },
    {
      label:"¿Aún no tienes cuenta?",
      route:ROUTES.register,
    },
    {
      label:"No puedes acceder a tu cuenta?",
      route:ROUTES.recuperarCuenta
    },
  ]

  return (
    <AuthLayout>
      <AuthForm title="Bienvenido" subtitle="Ingresa tus credenciales" onSubmit={handleSubmit}>
        {error && (
          <p className="text-red-500">
            {error}
          </p>
        )}
         <InputField
          label="Correo"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
        />
        <InputField
          label="Contraseña"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <PrimaryButton text={loading ? "Ingresando...":"Iniciar Sesión"}/>

    
        <div className="flex flex-col items-start gap-1 mt-4">
         {actions.map((item) => (
          <button type="button" key={item.label} className="text-sm text-[var(--color-primary)] hover:underline" onClick={() => router.push(item.route)}>
            {item.label}
          </button>
         ))}
        </div>
      </AuthForm>
     
    </AuthLayout>
  );
}
