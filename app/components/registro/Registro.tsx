"use client";
import { registrarSesion } from "@/services/usuario.service";
import { RegistroUsuarioRequest } from "@/types/Auth.type";
import InputField from "../ui/input/InputField";
import SelectField from "../ui/input/SelectField";
import ButtonGrid from "../ui/layout/ButtonGrid";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/app/routes/routes";
import { UseForm } from "@/hooks/useForm";
import { useAction } from "@/hooks/useAction";
import { useHandle } from "@/hooks/useHandle";
import AuthLayout from "../ui/layout/AuthLayout";
import AuthForm from "../ui/form/AuthForm";

export default function RegisterPage() {
  const router = useRouter();

  const {handle} = useHandle()
  
  const {formData,handleChange} = 
  UseForm<RegistroUsuarioRequest>({
    nombre:"",
    correo:"",
    estado:"activo",
    password:"",
    rol:"administrador",
  })

  const {execute:register,loading} = 
  useAction(registrarSesion)

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    handle(async () => {
      await register(formData)

      router.push(ROUTES.dashboard)
    })

  };


  return (
    <AuthLayout>
      <AuthForm title="Crear cuenta" subtitle="Registrar un nuevo usuario en el sistema" onSubmit={handleSubmit}>
        <InputField
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />
        <InputField
          label="Contraseña"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <InputField
          label="Correo"
          name="correo"
          type="email"
          value={formData.correo}
          onChange={handleChange}
        />
       <SelectField
          label="Estado"
          name="estado"
          onChange={handleChange}
          value={formData.estado}
          options={[
            { value: "activo", label: "Activo" },
            { value: "inactivo", label: "Inactivo" },
          ]}
        />
        <SelectField
          label="Rol"
          name="rol"
          value={formData.rol}
          onChange={handleChange}
          options={[
            { value: "superadministrador", label: "Super Administrador" },
            { value: "administrador", label: "Administrador" },
            {value:"coordinador",label:"Coordinador"},
            {value:"ingenierobiomedico",label:"Ingeniero biomédico"},
            {value:"tecnicobiomedico",label:"Técnico biomédico"}
          ]}
        />
        <ButtonGrid>
          <PrimaryButton text={loading ? "Registrando...":"Registrar"} />
        </ButtonGrid>
      </AuthForm>
    </AuthLayout>
  );
}
