/** URL absoluta o ruta bajo `public/` (ej. "/projects/1.png") */
export type Project = {
  title: string;
  description: string;
  /** Capturas o mockups: una o varias */
  images?: string[];
  /** Por defecto carrusel. Usa `grid` para varias miniaturas en cuadrícula (p. ej. placeholders). */
  imageLayout?: "grid" | "carousel";
  /** Enlace principal (web o App Store) */
  href?: string;
  /** Texto del botón, ej. «Descargar» o el dominio del sitio */
  linkLabel?: string;
  /** No hay enlace público: solo se muestra «Uso interno» (Avior Pass, Consumo, etc.) */
  internal?: boolean;
  repo?: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    title: "APP Movil Rutaca Airlines",
    description:
      "Aplicación móvil nativa para Android e iOS que concentra el viaje de punta a punta: un motor de reservas (booking engine) para vuelos nacionales e internacionales, con flujos de pago integrados, consulta de tarifas y destinos, y soporte multimoneda (bolívares y dólares) para que el pasajero compre y gestione su billete con claridad, sin fricción entre canales ni monedas.",
    images: [
      "https://i.postimg.cc/15pntcMw/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-34-06.png",
      "https://i.postimg.cc/PrmpxzKD/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-34-44.png",
      "https://i.postimg.cc/4Nz7dbwm/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-34-56.png",
      "https://i.postimg.cc/Nf19M7bM/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-35-19.png",
      "https://i.postimg.cc/jdzw5Qv2/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-35-40.png",
      "https://i.postimg.cc/qM8hRXQg/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-35-46.png",
    ],
    href: "https://apps.apple.com/us/app/rutaca-air/id6748773924",
    linkLabel: "Descargar",
    tags: ["React Native", "Expo", "Typescript", "Stripe", "Payment"],
  },
  {
    title: "App Movil Carabobo FC",
    description:
      "Fan app: espacio digital para el hincha con noticias, seguimiento del partido en tiempo real y toda la información del club. Incluye abonos digitales para el acceso al estadio, plantilla del equipo, estadísticas por jugador y un ecosistema pensado para acompañar al aficionado más allá de los 90 minutos.",
    images: [
      "https://i.postimg.cc/TPfzrGrq/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-20-20.png",
      "https://i.postimg.cc/cJ0pQZQ7/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-20-25.png",
      "https://i.postimg.cc/HLdqQHQy/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-20-38.png",
      "https://i.postimg.cc/FKNMjmjJ/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-20-43.png",
      "https://i.postimg.cc/k5q0x9xB/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-20-51.png",
      "https://i.postimg.cc/s2skpypG/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-21-17.png",
    ],
    href: "https://apps.apple.com/us/iphone/search?term=carabobo%20fc",
    linkLabel: "Descargar",
    tags: ["React Native", "Expo", "Typescript"],
  },
  {
    title: "App Movil Marinos de Anzoategui",
    description:
      "Otra pieza del mismo enfoque de club: aplicación móvil para el fan, con noticias, retransmisión o seguimiento del encuentro al vivo, credenciales digitales para el ingreso al recinto, plantel completo y métricas y estadísticas de plantilla. Un hub único que refuerza la conexión entre el equipo y su gente en cada jornada.",
    images: [
      "https://i.postimg.cc/B6YbrmqY/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-30-50.png",
      "https://i.postimg.cc/TwYhNzXL/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-30-55.png",
      "https://i.postimg.cc/0QWjTV8T/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-31-04.png",
      "https://i.postimg.cc/ydYWpMzk/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-31-10.png",
      "https://i.postimg.cc/k4XDY0dp/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-31-20.png",
    ],
    href: "https://apps.apple.com/us/app/marinos-de-anzo%C3%A1tegui/id6760204632",
    linkLabel: "Descargar",
    tags: ["React Native", "Expo", "TypeScript"],
  },
  {
    title: "Aplicacion de Consumo interno para eventos",
    description:
      "App móvil de uso interno en eventos masivos. Centraliza recargas y movimientos de wallet, asignación y bloqueo de medios, y orquesta la generación de ventas y liquidaciones para los comercios dentro del predio, alineando operación, caja y experiencia de compra en un solo entorno móvil.",
    images: [
      "https://i.postimg.cc/BQt7fbg4/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-43-50.png",
      "https://i.postimg.cc/J4tYC0qm/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-44-05.png",
      "https://i.postimg.cc/Fs1CXzZX/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-44-17.png",
      "https://i.postimg.cc/zX32Yvk6/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-44-21.png",
      "https://i.postimg.cc/ZK0szncS/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-44-31.png",
      "https://i.postimg.cc/65TbxqhF/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-44-48.png",
    ],
    internal: true,
    tags: ["React Native", "Expo", "NFC", "Typescript"],
  },
  {
    title: "App Movil Avior Pass",
    description:
      "Solución móvil para Avior Airlines orientada a las salas VIP: valida y controla el acceso a lounges para pasajeros Business y afiliados al programa de membresía Black, asegurando criterios de elegibilidad y trazabilidad en el punto de entrada, acorde a la política de la aerolínea.",
    images: [
      "https://i.postimg.cc/tJ9Tn8BZ/Simulator-Screenshot-i-Phone-17-2026-04-23-at-17-54-09.png",
      "https://i.postimg.cc/XqnJBtsB/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-48-46.png",
      "https://i.postimg.cc/0j9QKhV6/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-48-58.png",
      "https://i.postimg.cc/L5mXgGxh/Simulator-Screenshot-i-Phone-17-2026-04-23-at-18-49-03.png",
    ],
    internal: true,
    tags: ["React Native", "Expo", "Typescript", "Stripe", "Payment"],
  },
  {
    title: "Aplicacion web/movil para Lanchas Venezuela",
    description:
      "Proyecto amplio construido con enfoque acelerado (IA y herramientas de bajo código donde aplica), migrando un legado en WordPress hacia una base PostgreSQL en Supabase. El producto hoy engloba marketplace, panel y dashboard administrativo, integración con Google Analytics para medir comportamiento, y app móvil en iOS, unificando web y operación bajo un mismo dato y modelos de negocio en evolución.",
    images: [
      "https://i.postimg.cc/ZYDtd17X/Screenshot-2026-04-23-at-6-58-16-PM.png",
    ],
    imageLayout: "grid",
    href: "https://lanchasvenezuela.com",
    linkLabel: "lanchasvenezuela.com",
    tags: ["Supabase", "Vite", "PostgreSQL", "Typescript", "Migracion de Wordpress", "Analytics"],
  },
];
