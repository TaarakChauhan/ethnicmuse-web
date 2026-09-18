"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const GUMROAD_HERO =
  "https://ethnicmuse.gumroad.com/l/EthnicMuseWorldLifestyleEthnicStockBundle";
const GUMROAD_ENTRY =
  "https://ethnicmuse.gumroad.com/l/SareePortraitFacesPack";
const GUMROAD_HOME = "https://ethnicmuse.gumroad.com";

const GALLERY = [
  { src: "/gallery/gallery-01.jpg", alt: "Evening glam saree portrait" },
  { src: "/gallery/gallery-02.jpg", alt: "Black sequin saree editorial" },
  { src: "/gallery/gallery-03.jpg", alt: "Royal blue silk saree look" },
  { src: "/gallery/gallery-04.jpg", alt: "Festive ethnic fashion portrait" },
  { src: "/gallery/gallery-05.jpg", alt: "Soft glam ethnic wear stock" },
  { src: "/gallery/gallery-06.jpg", alt: "Lifestyle ethnic fashion frame" },
  { src: "/gallery/gallery-07.jpg", alt: "Brand moodboard saree look" },
  { src: "/gallery/gallery-08.jpg", alt: "Velvet saree character portrait" },
  { src: "/gallery/gallery-09.jpg", alt: "Commercial ethnic fashion crop" },
];

const NAV = [
  { id: "gallery", label: "Gallery" },
  { id: "packs", label: "Packs" },
  { id: "license", label: "License" },
  { id: "shop", label: "Shop", href: GUMROAD_HERO },
];

export default function Home() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      setProgress(Math.min(1, window.scrollY / (max * 0.55)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const blurPx = useMemo(() => Math.round(progress * 14), [progress]);
  const veil = useMemo(() => Math.min(0.78, progress * 0.95), [progress]);
  const gateVisible = progress > 0.28;

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-[#f5f0ea]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a0a0b]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-5 py-4 md:px-8">
          <a href="#top" className="text-lg font-semibold tracking-[0.18em] md:text-xl">
            EthnicMuse
          </a>
          <nav className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2 text-sm text-[#d8cfc4] md:gap-x-10 md:text-[15px]">
            {NAV.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="transition hover:text-white"
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>
        </div>
      </header>

      <main id="top" className="relative pt-20">
        <section className="relative mx-auto max-w-6xl px-5 pb-10 pt-10 md:px-8 md:pt-14">
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#e8b4c8]">
            Commercial ethnic fashion stock
          </p>
          <h1 className="max-w-3xl text-3xl font-medium leading-tight md:text-5xl">
            Indian saree and ethnic lifestyle images for ads, lookbooks, and brand calendars.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-[#9a9188] md:text-lg">
            Scroll the gallery. As you go deeper, the frames soften and unlock the full commercial library on Gumroad.
          </p>
        </section>

        <section id="gallery" className="relative mx-auto max-w-6xl px-5 pb-28 md:px-8">
          <div
            className="columns-1 gap-4 sm:columns-2 lg:columns-3"
            style={{
              filter: `blur(${blurPx}px)`,
              transition: "filter 120ms linear",
            }}
          >
            {GALLERY.map((shot) => (
              <figure
                key={shot.src}
                className="mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-[#121214]"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={1200}
                  height={1600}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={shot.src.endsWith("01.jpg")}
                />
              </figure>
            ))}
          </div>

          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 top-24 bg-gradient-to-b from-transparent via-[#0a0a0b]/40 to-[#0a0a0b]"
            style={{ opacity: veil }}
            aria-hidden
          />

          <div
            className={`sticky bottom-8 z-40 mx-auto mt-[-8rem] max-w-xl px-2 transition-all duration-300 ${
              gateVisible
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-6 opacity-0"
            }`}
          >
            <div className="rounded-3xl border border-white/15 bg-[#141416]/92 p-6 shadow-2xl shadow-black/50 backdrop-blur-xl md:p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-[#e8b4c8]">
                Unlock more
              </p>
              <h2 className="mt-3 text-2xl font-medium md:text-3xl">
                The rest of the library opens on Gumroad.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#b7aea4] md:text-base">
                Commercial license included. Lifestyle and Ethnic Stock Bundle for Shopify ads, lookbooks, and brand content. CAD $29.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={GUMROAD_HERO}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#f5f0ea] px-5 py-3 text-sm font-semibold text-[#0a0a0b] transition hover:bg-white"
                >
                  Unlock full library
                </a>
                <a
                  href={GUMROAD_ENTRY}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm text-[#f5f0ea] transition hover:border-white/40"
                >
                  Start with faces pack
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="packs" className="border-t border-white/10 bg-[#0f0f11]">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-3 md:px-8">
            <article className="rounded-2xl border border-white/10 bg-[#141416] p-6">
              <h3 className="text-lg font-medium">Lifestyle bundle</h3>
              <p className="mt-2 text-sm text-[#9a9188]">
                864 ethnic fashion and lifestyle frames. Best mid tier for campaigns. CAD $29.
              </p>
              <a
                href={GUMROAD_HERO}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-[#e8b4c8] hover:text-white"
              >
                Open on Gumroad
              </a>
            </article>
            <article className="rounded-2xl border border-white/10 bg-[#141416] p-6">
              <h3 className="text-lg font-medium">Portrait faces</h3>
              <p className="mt-2 text-sm text-[#9a9188]">
                Smaller entry pack for a first commercial test. CAD $19.
              </p>
              <a
                href={GUMROAD_ENTRY}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-[#e8b4c8] hover:text-white"
              >
                Open on Gumroad
              </a>
            </article>
            <article className="rounded-2xl border border-white/10 bg-[#141416] p-6">
              <h3 className="text-lg font-medium">Full shop</h3>
              <p className="mt-2 text-sm text-[#9a9188]">
                Browse every EthnicMuse World pack in one place.
              </p>
              <a
                href={GUMROAD_HOME}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-[#e8b4c8] hover:text-white"
              >
                Visit shop
              </a>
            </article>
          </div>
        </section>

        <section id="license" className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <h2 className="text-2xl font-medium md:text-3xl">License in plain words</h2>
          <p className="mt-4 max-w-3xl text-[#b7aea4]">
            Commercial license included for ads, websites, social, lookbooks, and client work under standard EthnicMuse terms. You cannot resell the files as a competing stock pack or claim the people are real models you photographed. Images are AI generated ethnic fashion stock curated for creative use.
          </p>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-[#7d766e]">
        EthnicMuse World. Commercial ethnic fashion stock.
      </footer>
    </div>
  );
}
