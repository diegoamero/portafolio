import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: string;
  titleId?: string;
  children: ReactNode;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  titleId,
  children,
  align = "left",
}: Props) {
  const a = align === "center" ? "items-center text-center" : "items-start";
  const lineAlign = align === "center" ? "self-center" : "";
  return (
    <div className={`relative z-[1] mb-10 flex max-w-3xl flex-col gap-3 sm:mb-12 sm:gap-4 ${a}`}>
      <span
        className="inline-flex w-fit items-center rounded-full border border-blue-200/80 bg-gradient-to-r from-white/90 to-blue-50/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-800/90 shadow-sm ring-1 ring-white/60 backdrop-blur-sm"
      >
        {eyebrow}
      </span>
      <div
        className={`h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 sm:h-1.5 sm:w-16 ${lineAlign}`}
      />
      <h2
        id={titleId}
        className="text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
      >
        {title}
      </h2>
      <p className="text-pretty max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
        {children}
      </p>
    </div>
  );
}
