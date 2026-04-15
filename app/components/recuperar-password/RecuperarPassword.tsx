"use client";

import { recuperarContraseña } from "@/services/usuario.service";
import { useEffect, useState } from "react";
import { ResetPasswordRequest } from "@/types/auth.type";
import PageContainer from "../ui/layout/PageContainer";
import FormularioBase from "../ui/form/FormularioBase";
import InputField from "../ui/input/InputField";
import ButtonGrid from "../ui/layout/ButtonGrid";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import { useRouter, useSearchParams } from "next/navigation";
import { ROUTES } from "@/app/routes/routes";

export default function RecuperarPasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [data, setData] = useState<ResetPasswordRequest>({
    uid: "",
    nuevaPassword: "",
    token: "",
  });

  useEffect(() => {
    const uid = searchParams.get("uid");
    const token = searchParams.get("token");
    if (uid && token) {
      setData((prev) => ({
        ...prev,
        token,
        uid,
      }));
    }
  }, [searchParams]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await recuperarContraseña({
        uid: data.uid,
        nuevaPassword: data.nuevaPassword,
        token: data.token,
      });

      alert("Contraseña actualizada correctamente");

      router.push(ROUTES.dashboard);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PageContainer>
      <FormularioBase titulo="Actualizar contraseña" onSubmit={handleSubmit}>
        <InputField
          label="Nueva contraseña"
          name="nuevaPassword"
          value={data.nuevaPassword}
          onChange={handleChange}
          type="password"
        />

        <ButtonGrid>
          <PrimaryButton text="Actualizar Contraseña" />
        </ButtonGrid>
      </FormularioBase>
    </PageContainer>
  );
}
