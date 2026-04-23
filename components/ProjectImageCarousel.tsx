"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  title: string;
  images: string[];
};

export function ProjectImageCarousel({ title, images }: Props) {
  const [index, setIndex] = useState(0);
  const n = images.length;
  const touch = useRef<{ x: number } | null>(null);

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => {
        const next = i + dir;
        if (next < 0) return n - 1;
        if (next >= n) return 0;
        return next;
      });
    },
    [n],
  );

  const goTo = useCallback((i: number) => {
    setIndex(Math.max(0, Math.min(i, n - 1)));
  }, [n]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <div
      className="mb-4"
      role="region"
      aria-roledescription="carrusel"
      aria-label={`Capturas de ${title}`}
    >
      <div
        className="group relative aspect-[9/19] w-full max-h-[min(70vh,520px)] overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-b from-slate-100 to-slate-50 shadow-inner shadow-slate-900/5 ring-1 ring-white/60 sm:aspect-[10/19] sm:max-h-[min(65vh,480px)]"
        onTouchStart={(e) => {
          touch.current = { x: e.touches[0].clientX };
        }}
        onTouchEnd={(e) => {
          if (!touch.current) return;
          const dx = e.changedTouches[0].clientX - touch.current.x;
          touch.current = null;
          if (Math.abs(dx) < 40) return;
          if (dx > 0) go(-1);
          else go(1);
        }}
      >
        <div
          className="flex h-full w-full touch-pan-y transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative h-full w-full min-w-full shrink-0"
            >
              <Image
                src={src}
                alt={`${title} — captura ${i + 1} de ${n}`}
                fill
                className="object-contain object-top sm:object-center"
                sizes="(min-width: 768px) 50vw, 100vw"
                priority={i === 0}
                unoptimized={src.endsWith(".svg")}
              />
            </div>
          ))}
        </div>

        {n > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/95 text-blue-900 shadow-lg shadow-slate-900/10 backdrop-blur transition hover:scale-105 hover:bg-white sm:left-2 sm:h-11 sm:w-11"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/95 text-blue-900 shadow-lg shadow-slate-900/10 backdrop-blur transition hover:scale-105 hover:bg-white sm:right-2 sm:h-11 sm:w-11"
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {n > 1 && (
        <div
          className="mt-3 flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Elegir captura"
        >
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              onClick={() => goTo(i)}
              className={`h-2 min-w-2 rounded-full transition ${
                i === index
                  ? "w-6 bg-gradient-to-r from-blue-600 to-cyan-500"
                  : "w-2 bg-slate-300/90 hover:bg-blue-300"
              }`}
              aria-label={`Captura ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 6l-6 6 6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
