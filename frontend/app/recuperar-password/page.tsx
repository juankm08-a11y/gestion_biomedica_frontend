"use client";
import { recuperarContraseña } from "@/services/usuario.service";
import { useEffect, useState } from "react";
import PageContainer from "../components/layout/PageContainer";
import FormularioBase from "../components/form/FormularioBase";
import InputField from "../components/ui/InputField";
import ButtonGrid from "../components/layout/ButtonGrid";
import PrimaryButton from "../components/layout/PrimaryButton";
import { ResetPasswordRequest } from "@/types/auth.type";
import { useSearchParams } from "next/navigation";

export default function RecuperarPasswordPage() {
  const [data, setData] = useState<ResetPasswordRequest>({
    correo: "",
    nuevaPassword: "",
    token: "",
  });

  const params = useSearchParams();
  const token = params.get("token");

  useEffect(() => {
    if (token) {
      setData((prev) => ({
        ...prev,
        token,
      }));
    }
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (data.nuevaPassword !== data.nuevaPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      await recuperarContraseña({
        correo: data.correo,
        nuevaPassword: data.nuevaPassword,
        token: data.token,
      });

      alert("Contraseña actualizada correctamente");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PageContainer title="Recuperar Contraseña">
      <FormularioBase titulo="Actualizar contraseña" onSubmit={handleSubmit}>
        <InputField
          label="Correo"
          name="correo"
          value={data.correo}
          onChange={handleChange}
          type="email"
        />
        <InputField
          label="Nueva contraseña"
          name="nuevaPassword"
          value={data.nuevaPassword}
          onChange={handleChange}
          type="password"
        />
        <InputField
          label="Token"
          name="confirmarToken"
          onChange={handleChange}
          type="token"
          value={data.token}
        />
        <ButtonGrid>
          <PrimaryButton text="Actualizar Contraseña" />
        </ButtonGrid>
      </FormularioBase>
    </PageContainer>
  );
}
