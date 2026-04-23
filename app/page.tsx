import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SiteFooter } from "@/components/SiteFooter";
import { TechnologiesSection } from "@/components/TechnologiesSection";

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-hidden">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute -left-1/3 top-[-10%] h-[min(100vw,480px)] w-[min(100vw,480px)] rounded-full bg-sky-400/25 blur-3xl" />
        <div className="absolute -right-1/4 top-[20%] h-[min(90vw,420px)] w-[min(90vw,420px)] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-[-5%] left-1/2 h-[40vh] w-[min(100%,720px)] -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgb(240_249_255/0.4)_100%)]" />
      </div>
      <Header />
      <main className="relative z-[1] flex-1">
        <Hero />
        <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-blue-200/80 to-transparent px-4" />
        <ProjectsSection />
        <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-blue-200/80 to-transparent px-4" />
        <TechnologiesSection />
      </main>
      <SiteFooter />
    </div>
  );
}
