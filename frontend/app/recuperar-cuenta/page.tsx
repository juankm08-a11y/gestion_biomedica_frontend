"use client";

import { recuperarCuenta } from "@/services/usuario.service";
import { useState } from "react";
import PageContainer from "../components/layout/PageContainer";
import FormularioBase from "../components/form/FormularioBase";
import InputField from "../components/ui/InputField";
import ButtonGrid from "../components/layout/ButtonGrid";
import PrimaryButton from "../components/layout/PrimaryButton";

export default function RecoveryAccount() {
  const [data, setData] = useState({
    correo: "",
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

    try {
      await recuperarCuenta();
      alert("Correo recuperado correctamente");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PageContainer title="Recuperar Cuenta">
      <FormularioBase titulo="Recuperar Cuenta" onSubmit={handleSubmit}>
        <InputField
          label="Correo"
          name="correo"
          onChange={handleChange}
          value={data.correo}
        />
        <ButtonGrid>
          <PrimaryButton text="Recuperar Cuenta" />
        </ButtonGrid>
      </FormularioBase>
    </PageContainer>
  );
}
