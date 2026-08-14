export interface NavLink {
    label: string;
    href: string;
}

export interface NavSection {
    title: string;
    items: NavLink[];
}

export const navigationData: NavSection[] = [
    {
        title: "Escuela de Posgrado",
        items: [
            { label: "Inicio", href: "/" },
            { label: "Maestrías", href: "/maestrias" },
            { label: "Doctorados", href: "/doctorados" },
        ],
    },
    {
        title: "Programas & Admisión",
        items: [
            { label: "Admisión", href: "/admision" },
            { label: "Comunicados", href: "/#comunicados" },
        ],
    },
    {
        title: "Enlaces de Interés",
        items: [
            { label: "Contacto", href: "/#contacto" },
            { label: "Preguntas Frecuentes", href: "/#comunicados" },
        ],
    },
    {
        title: "Solicitar Información",
        items: [
            { label: "Admisión 2026", href: "/admision" },
            { label: "Redes Sociales", href: "/#contacto" },
        ],
    },
];
