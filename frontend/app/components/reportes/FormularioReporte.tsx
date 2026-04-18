"use client";

import { useAction } from "@/hooks/useAction";
import { useError } from "@/hooks/useError";
import { UseForm } from "@/hooks/useForm";
import { useHandle } from "@/hooks/useHandle";
import { generarReporte } from "@/services/reportes.service";
import { ReporteRequest } from "@/types/Reporte.type";
import PageContainer from "../ui/layout/PageContainer";
import Card from "../ui/cards/Card";
import FormularioBase from "../ui/form/FormularioBase";
import InputField from "../ui/input/InputField";
import SelectField from "../ui/input/SelectField";
import ButtonGrid from "../ui/layout/ButtonGrid";

export default function FormularioReporte() {

    const {error} = useError();

    const {handle} = useHandle();

    const {formData,handleChange,setFormData} = 
    UseForm<ReporteRequest>({
         equipo:undefined,
         nombre:"",
         descripcion:"",
         tipo:"",
         falla:"",
         archivo:null,
    })

    const {execute:generar,loading} =
    useAction(generarReporte);

    const handleSubmit = (e:any) => {
        e.preventDefault();

        handle(async () => {
            const reporte = await generar(formData)

            console.log("Reporte generado: ",reporte)

            alert("Reporte generado correctamente")
        })
    }

    const handleFileChange = (e:any) => {
        const file = e.target.files?.[0];

        setFormData({
            ...formData,
            archivo:file
        })
    }
    return (
        <PageContainer>
            <Card variant="form">
                <FormularioBase titulo="Generar Reporte" onSubmit={handleSubmit}>

                    {error && (
                        <p className="text-red-500 mb-4">
                            {error}
                        </p>
                    )}

                    <InputField label="Nombre del Reporte" name="fechaInicio" type="date" value={formData.nombre} onChange={handleChange}/>
                    <InputField label="Fecha Fin" name="descripción" type="data" value={formData.descripcion ?? ""} onChange={handleChange}/>
                    <SelectField label="Tipo de Reporte" name="tipoReporte" value={formData.tipo} onChange={handleChange} options={[
                        {value:"mantenimiento",label:"Mantenimiento"},
                        {value:"falla",label:"Falla"},
                        {value:"inspección",label:"Inspección"}
                    ]}/>
                    <InputField
                    label="Tipo de Falla"
                    name="falla"
                    value={formData.falla ?? ""}
                    onChange={handleChange}/>
                    <div className="flex flex-col gap-2">
                        <label className="font-medium">
                            Archivo
                        </label>
                        <input type="file" onChange={handleFileChange} className="border p-2 rounded"/>
                        <ButtonGrid>
                            <button type="submit" className="border border-gray-400 px-8 py-3 rounded-full" disabled={loading}>
                                {loading ? "Generando...":"Generar Reporte"}
                            </button>
                        </ButtonGrid>
                    </div>
                </FormularioBase>
            </Card>
        </PageContainer>
    )
}