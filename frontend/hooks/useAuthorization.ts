export const getRol = () => {
  if (typeof window === "undefined") return null;

  return localStorage.getItem("rol");
};

export const isAuthenticated = () => {
  if (typeof window === "undefined") return false;

  return !!localStorage.getItem("access");
};

export const tieneRol = (roles: String[]) => {
  const rol = getRol();

  if (!rol) return false;

  return roles.includes(rol);
};
