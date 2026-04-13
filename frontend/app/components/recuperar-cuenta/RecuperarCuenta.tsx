"use client";

import { recuperarCuenta } from "@/services/usuario.service";
import { useState } from "react";
import PageContainer from "../layout/PageContainer";
import FormularioBase from "../form/FormularioBase";
import InputField from "../ui/InputField";
import ButtonGrid from "../layout/ButtonGrid";
import PrimaryButton from "../layout/PrimaryButton";

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
      await recuperarCuenta(data);
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
