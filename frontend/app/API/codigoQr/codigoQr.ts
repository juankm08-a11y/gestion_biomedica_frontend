import axios from "axios";

export const generarCodigo = async (id: number) => {
  const response = await axios.post("/codigos/qr/<int:equipo_id>/");
  return response.data;
};
