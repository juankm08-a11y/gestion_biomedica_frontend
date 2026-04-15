import { useState } from "react";

export function useError() {
  const [error, setError] = useState<string | null>(null);

  const handleError = (err: any) => {
    const message =
      err?.response?.data?.message ||
      err?.message ||
      "Ocurrió un error inesperado";

    setError(message);

    console.error(err);
  };

  const clearError = () => setError(null);

  return {
    error,
    handleError,
    clearError,
  };
}
