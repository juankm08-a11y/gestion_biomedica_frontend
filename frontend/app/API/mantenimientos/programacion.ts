import axios from "axios";

export const crearProgramacion = async () => {
  const response = await axios.post(
    "/mantenimientos/programacion_mantenimiento/",
  );

  return response.data;
};

export const actualizarProgramacion = async (id: number) => {
  const response = await axios.put(
    "/mantenimientos/programacion_mantenmiento/<int:pk>/",
  );
  return response.data;
};
