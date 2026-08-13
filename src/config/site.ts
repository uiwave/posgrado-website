const convertirABooleano = (valor: string | undefined) =>
    valor?.toLowerCase() === "true";

export const siteConfig = {
    features: {
        procesoAdmision: convertirABooleano(
            import.meta.env.PUBLIC_PROCESO_ADMISION
        ),
    },
} as const;
