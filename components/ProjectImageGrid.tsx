import Image from "next/image";
import type { Project } from "@/app/data/projects";

export function ProjectImageGrid({
  project,
  images,
}: {
  project: Project;
  images: string[];
}) {
  return (
    <ul
      className={`mb-4 grid gap-2 ${
        images.length === 1
          ? "grid-cols-1"
          : "grid-cols-1 sm:grid-cols-2"
      }`}
      role="list"
    >
      {images.map((src, index) => (
        <li
          key={`${src}-${index}`}
          className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-md shadow-slate-900/5 ring-1 ring-white/50"
        >
          <Image
            src={src}
            alt={`${project.title} — imagen ${index + 1}`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            unoptimized={src.endsWith(".svg")}
          />
        </li>
      ))}
    </ul>
  );
}
