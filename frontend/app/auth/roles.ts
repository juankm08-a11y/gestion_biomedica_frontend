export const ROLES = {
    SUPERADMIN: "superadministrador",
    ADMIN:"administrador",
    INGENIERO: "ingenierobiomedico",
    TECNICO: "tecnicobiomedico",
    COORDINADOR: "coordinador"
} as const;

export type Rol = typeof ROLES[keyof typeof ROLES];