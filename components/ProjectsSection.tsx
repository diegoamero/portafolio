import { projects } from "@/app/data/projects";
import { Container } from "./Container";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader } from "./SectionHeader";

export function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="scroll-mt-20 py-14 sm:py-20"
      aria-labelledby="proyectos-title"
    >
      <Container>
        <SectionHeader
          eyebrow="Proyectos"
          title="Lo que he construido"
          titleId="proyectos-title"
        >
          Aplicaciones móviles, plataformas web y productos reales, desde experiencias de
          afición hasta reservas aéreas, pasarelas y operación en evento.
        </SectionHeader>
        <ul className="grid grid-cols-1 gap-7 sm:gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.title}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
