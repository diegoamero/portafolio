import { Container } from "./Container";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#tecnologias", label: "Tecnologías" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/75 shadow-sm shadow-blue-950/5 backdrop-blur-xl">
      <Container as="div" className="flex h-14 items-center justify-between sm:h-16">
        <a
          href="#inicio"
          className="group flex items-center gap-2 text-sm font-bold tracking-tight text-slate-900 sm:text-base"
        >
          <span
            className="flex h-2 w-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-sm ring-2 ring-white"
            aria-hidden
          />
          <span className="bg-gradient-to-r from-slate-900 to-blue-800 bg-clip-text text-transparent">
            Portfolio
          </span>
        </a>
        <nav
          className="flex items-center gap-0.5 sm:gap-1"
          aria-label="Secciones"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative min-h-11 min-w-11 touch-manipulation rounded-full px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-r after:from-blue-500 after:to-cyan-400 after:transition-transform after:duration-200 hover:text-blue-800 hover:after:scale-x-100 sm:min-h-0 sm:min-w-0 sm:px-4"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}
