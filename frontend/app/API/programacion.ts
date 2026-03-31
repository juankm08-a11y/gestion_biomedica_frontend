import axios from "axios";

export const createProgramacion = async () => {
  const response = await axios.post(
    "/mantenimientos/programacion_mantenimiento/",
  );

  return response.data;
};

export const updateProgramacion = async (id: number) => {
  const response = await axios.put(
    "/mantenimientos/programacion_mantenmiento/<int:pk>/",
  );
  return response.data;
};
