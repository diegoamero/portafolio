import Image from "next/image";
import { Container } from "./Container";

const PROFILE_SRC =
  "https://i.postimg.cc/ZRwR3V21/Whats-App-Image-2026-04-23-at-7-13-20-PM.jpg";
const PROFILE_ALT = "Retrato de Diego Mejia";

type Props = {
  headline?: string;
  subline?: string;
  profileImageSrc?: string;
};

export function Hero({
  headline = "Software Engineer",
  subline = "Enfocado en el diseño y desarrollo de productos digitales de alto impacto. Mi especialidad es construir aplicaciones móviles y web que no solo son visualmente claras, sino técnicamente robustas, escalables y fáciles de mantener. Transformo arquitecturas complejas en soluciones eficientes, priorizando siempre la calidad del código y la experiencia del usuario final.",
  profileImageSrc = PROFILE_SRC,
}: Props) {
  return (
    <section
      id="inicio"
      className="scroll-mt-20 pb-14 pt-10 sm:pb-20 sm:pt-14 md:pb-24 md:pt-16"
      aria-labelledby="hero-title"
    >
      <Container>
        <div className="flex flex-col items-stretch gap-10 md:flex-row md:items-center md:gap-12 lg:gap-20">
          <div className="order-2 flex flex-1 flex-col items-center text-center md:order-1 md:items-start md:text-left">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/60 px-4 py-1.5 text-sm font-semibold text-blue-900 shadow-sm ring-1 ring-white/50 backdrop-blur-sm sm:text-base">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                aria-hidden
              />
              Hola soy Diego Mejia
            </p>
            <h1
              id="hero-title"
              className="text-balance bg-gradient-to-br from-slate-900 via-blue-900 to-blue-700 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl md:leading-[1.1] lg:text-[3.25rem]"
            >
              {headline}
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-[1.7] text-slate-600 sm:text-lg">
              {subline}
            </p>
            <div className="mt-9 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center md:max-w-lg md:justify-start">
              <a
                href="#proyectos"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-7 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:from-blue-500 hover:to-blue-600 hover:shadow-xl hover:shadow-blue-500/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 active:scale-[0.98] sm:min-w-[9.5rem]"
              >
                Ver proyectos
              </a>
              <a
                href="#tecnologias"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border-2 border-blue-200/90 bg-white/80 px-7 text-sm font-semibold text-slate-800 shadow-md shadow-slate-900/5 ring-1 ring-white/50 backdrop-blur-sm transition hover:border-blue-300 hover:bg-white hover:shadow-lg active:scale-[0.98] sm:min-w-[9.5rem]"
              >
                Tecnologías
              </a>
            </div>
          </div>
          <div className="order-1 flex shrink-0 justify-center md:order-2">
            <div
              className="relative h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72"
              style={{ maxWidth: "100%" }}
            >
              <div
                className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-400/40 via-indigo-500/30 to-cyan-400/25 opacity-80 blur-2xl"
                aria-hidden
              />
              <div className="animate-float-soft relative h-full w-full">
                <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border-2 border-white/90 bg-white shadow-2xl shadow-blue-900/20 ring-4 ring-blue-100/80">
                  <Image
                    src={profileImageSrc}
                    alt={PROFILE_ALT}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover"
                    priority
                    unoptimized={profileImageSrc.endsWith(".svg")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
