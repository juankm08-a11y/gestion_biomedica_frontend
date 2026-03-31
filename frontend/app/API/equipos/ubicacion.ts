import axios from "axios";

export const actualizarUbicacion = async () => {
  const response = axios.put("/equipos/ubicaciones/<int:pk>/");
};
