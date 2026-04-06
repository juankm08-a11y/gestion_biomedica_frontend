"use client";
import { useState } from "react";
import { recuperarContraseña } from "../../services/usuario.service.js";
import PageContainer from "../components/layout/PageContainer.js";
import FormularioBase from "../components/form/FormularioBase.js";
import InputField from "../components/ui/InputField.js";
import ButtonGrid from "../components/layout/ButtonGrid.js";
import PrimaryButton from "../components/layout/PrimaryButton.js";

export default function RecuperarPasswordPage() {
  const [data, setData] = useState({
    correo: "",
    password: "",
    confirmarPassword: "",
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

    if (data.password !== data.confirmarPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      await recuperarContraseña({
        correo: data.correo,
        password: data.password,
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
          name="password"
          value={data.password}
          onChange={handleChange}
          type="password"
        />
        <InputField
          label="Confirmar contraseña"
          name="confirmarPassword"
          onChange={handleChange}
          type="password"
          value={data.confirmarPassword}
        />
        <ButtonGrid>
          <PrimaryButton text="Actualizar Contraseña" />
        </ButtonGrid>
      </FormularioBase>
    </PageContainer>
  );
}
