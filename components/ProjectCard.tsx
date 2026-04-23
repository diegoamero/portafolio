import type { Project } from "@/app/data/projects";
import { ProjectImageCarousel } from "./ProjectImageCarousel";
import { ProjectImageGrid } from "./ProjectImageGrid";

function ProjectMedia({ project }: { project: Project }) {
  const list = project.images;
  if (!list?.length) return null;
  if (project.imageLayout === "grid") {
    return <ProjectImageGrid project={project} images={list} />;
  }
  return <ProjectImageCarousel title={project.title} images={list} />;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/60 bg-gradient-to-b from-white/95 to-blue-50/40 p-1 shadow-lg shadow-slate-900/[0.06] ring-1 ring-blue-100/60 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 sm:p-1.5"
    >
      <div className="flex h-full flex-col rounded-[1.35rem] border border-slate-100/80 bg-white/80 p-4 sm:p-5">
        <ProjectMedia project={project} />
        <h3 className="mt-0.5 text-lg font-bold tracking-tight text-slate-900 transition group-hover:text-blue-900 sm:text-xl">
          {project.title}
        </h3>
        <p className="mt-2 grow text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem] sm:leading-7">
          {project.description}
        </p>
        {project.tags && project.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag}>
                <span className="inline-flex rounded-lg bg-gradient-to-r from-sky-100/90 to-blue-100/80 px-2.5 py-1 text-xs font-medium text-blue-950 ring-1 ring-blue-200/40">
                  {tag}
                </span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:gap-3">
          {project.internal ? (
            <span
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50/90 px-4 text-sm font-medium text-slate-500 ring-1 ring-white/50"
              title="Aplicación de uso interno, sin enlace público"
            >
              Uso interno
            </span>
          ) : (
            project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 min-w-0 max-w-full items-center justify-center break-words rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition hover:from-blue-500 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98]"
              >
                {project.linkLabel ?? "Visitar enlace"}
              </a>
            )
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200/90 bg-white px-4 text-sm font-semibold text-slate-800 ring-1 ring-slate-100 transition hover:border-blue-200 hover:bg-sky-50/80"
            >
              Código
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
