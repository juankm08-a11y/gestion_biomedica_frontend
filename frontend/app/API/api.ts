import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
console.log("BASE_URL", BASE_URL);
if (!BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_URL no está definda");
}

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use((config) => {
//   if (typeof window !== "undefined") {
//     const token = localStorage.getItem("token");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//   }

//   return config;
// });

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       console.error("No autorizado. Token inválido o expirado.");
//     }

//     return Promise.reject(error);
//   },
// );
