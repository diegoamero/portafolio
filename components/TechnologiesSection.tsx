import { technologies } from "@/app/data/technologies";
import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";

export function TechnologiesSection() {
  return (
    <section
      id="tecnologias"
      className="scroll-mt-20 pb-16 pt-4 sm:pb-24"
      aria-labelledby="tecnologias-title"
    >
      <Container>
        <SectionHeader
          eyebrow="Stack"
          title="Tecnologías"
          titleId="tecnologias-title"
        >
          Herramientas y ecosistemas con los que trabajo a diario, de front y back hasta datos y
          despliegue.
        </SectionHeader>
        <ul
          className="flex flex-wrap justify-center gap-2.5 sm:justify-start sm:gap-3"
          role="list"
        >
          {technologies.map((tech) => (
            <li key={tech.name}>
              <span
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/50 bg-gradient-to-br from-white/95 to-sky-50/90 px-5 py-3 text-sm font-semibold text-slate-800 shadow-md shadow-slate-900/5 ring-1 ring-blue-100/50 transition will-change-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/10 sm:min-h-0 sm:px-4 sm:py-2.5 sm:text-base"
              >
                {tech.name}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
