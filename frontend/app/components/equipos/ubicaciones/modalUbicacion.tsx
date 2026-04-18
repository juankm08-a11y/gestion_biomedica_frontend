"use client";

import {
  actualizarUbicacion,
  registrarUbicacion,
} from "@/services/ubicaciones.service";
import { useState } from "react";
import FormularioBase from "../../ui/form/FormularioBase";
import ButtonGrid from "../../ui/layout/ButtonGrid";
import InputField from "../../ui/input/InputField";
import SelectField from "../../ui/input/SelectField";
import Modal from "../../ui/modal/Modal";

interface Props {
  onClose: () => void;
  onSuccess: (idUbicacion: number) => void;
  ubicacionInicial?: any;
}

export default function ModalUbicacion({
  onClose,
  onSuccess,
  ubicacionInicial,
}: Props) {
  const [ubicacionData, setUbicacionData] = useState(
    ubicacionInicial ?? {
      sede: "",
      departamento: "",
      ciudad: "",
      area: "",
      detalle: "",
    },
  );

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setUbicacionData({
      ...ubicacionData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      let response;

      if (ubicacionInicial) {
        response = await actualizarUbicacion(
          ubicacionInicial.idUbicacion,
          ubicacionData,
        );
      } else {
        response = await registrarUbicacion(ubicacionData);
      }

      onSuccess(response.idUbicacion);
      onClose();
    } catch (error: any) {
      console.error("Error backend:", error.response?.data);
    }
  };

  return (
    <Modal  onClose={onClose} >
      <FormularioBase titulo={ubicacionInicial ? "Actualizar Ubicación": "Registrar Ubicación"}  onSubmit={handleSubmit}>
         <SelectField label="Área" name="area" value={ubicacionData.area} onChange={handleChange} options={[
              {
                value: "centrocuidados",
                label: "Centro de Cuidados Pabon",
              },
              { value: "pabon", label: "Clínica Cardiovascular Pabón" },
         ]}/> 
        <InputField label="Departamento" name="departamento" value={ubicacionData.departamento}  onChange={handleChange}/>
        <InputField label="Ciudad" name="departamento" value={ubicacionData.ciudad}  onChange={handleChange}/>
        <SelectField label="Sede" name="sede" value={ubicacionData.sede} onChange={handleChange} options={[
              {
                value: "hemodinamia",
                label: "Hemodinamia y cirugía cardiovascular",
              },
              { value: "hosp_adulto", label: "Hospitalización adulto" },
              { value: "uci_6", label: "UCI 6 piso" },
              { value: "quirófano", label: "Quirófano" },
              { value: "hosp_pediatría", label: "Hospitalización pediatría" },
              { value: "uci_coro", label: "UCI coro" },
              { value: "uci_pediátrica", label: "UCI pediátrica" },
              {
                value: "hosp_4_adulto",
                label: "Hospitalización de 4 piso adulto",
              },
              { value: "uci_neo", label: "UCI neo" },
              { value: "consulta_prioritaria", label: "Consulta prioritaria" },
              { value: "farmacia", label: "Farmacia" },
              { value: "imagenología", label: "Imagenología" },
              { value: "laboratorio", label: "Laboratorio clínico" },
            ]} />
            <InputField label="Detalle" name="detalle" value={ubicacionData.detalle} onChange={handleChange} />

      </FormularioBase>
    </Modal>
  );
}
