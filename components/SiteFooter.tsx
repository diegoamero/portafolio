import { Container } from "./Container";

const year = new Date().getFullYear();

const social = [
  { href: "https://github.com", label: "GitHub" },
  { href: "https://www.linkedin.com", label: "LinkedIn" },
  { href: "mailto:hola@ejemplo.com", label: "Email" },
] as const;

export function SiteFooter() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#0a1628] via-[var(--footer-bg)] to-[#020617] text-[var(--footer-fg)]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]"
        aria-hidden
      />
      <Container
        as="div"
        className="relative flex flex-col items-center justify-between gap-8 py-12 sm:flex-row sm:items-start"
      >
        <div className="text-center sm:text-left">
          <p className="text-lg font-bold tracking-tight text-white">
            Software Engineer
          </p>
          <p className="mt-1.5 text-sm text-slate-400">
            © {year} — Portfolio personal
          </p>
        </div>
        <nav
          className="flex flex-wrap items-center justify-center gap-2 sm:justify-end"
          aria-label="Redes y contacto"
        >
          {social.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="min-h-11 min-w-11 touch-manipulation rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-sky-400/40 hover:bg-sky-500/15 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
