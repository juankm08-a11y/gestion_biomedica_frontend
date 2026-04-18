import { ROLES } from "./roles";

export const PERMISOS = {
    equipos: [
        ROLES.SUPERADMIN,
        ROLES.ADMIN,
        ROLES.INGENIERO,
        ROLES.TECNICO
    ],

    mantenimientos: [
        ROLES.SUPERADMIN,
        ROLES.TECNICO
    ],

    programaciones: [
        ROLES.SUPERADMIN,
        ROLES.TECNICO
    ],

    ordenes: [
        ROLES.SUPERADMIN,
        ROLES.TECNICO
    ],

    certificados: [
        ROLES.SUPERADMIN,
        ROLES.ADMIN
    ],

    notificaciones: [
        ROLES.SUPERADMIN,
        ROLES.ADMIN
    ],

    reportes: [
        ROLES.SUPERADMIN,
        ROLES.INGENIERO,
    ],

    supervisarMantenimiento: [
        ROLES.SUPERADMIN,
        ROLES.COORDINADOR
    ]
}