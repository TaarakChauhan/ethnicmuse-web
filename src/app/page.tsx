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
  { src: "/gallery/gallery-02.jpg", alt: "Elegant woman in silk saree" },
  { src: "/gallery/gallery-03.jpg", alt: "Feminine ethnic fashion portrait" },
  { src: "/gallery/gallery-04.jpg", alt: "Festive saree style portrait" },
  { src: "/gallery/gallery-05.jpg", alt: "Soft glam ethnic fashion look" },
  { src: "/gallery/gallery-06.jpg", alt: "Indian fashion portrait in warm light" },
  { src: "/gallery/gallery-07.jpg", alt: "Modern saree beauty portrait" },
  { src: "/gallery/gallery-08.jpg", alt: "Velvet saree feminine portrait" },
  { src: "/gallery/gallery-09.jpg", alt: "Ethnic fashion portrait for brands" },
  { src: "/gallery/gallery-10.jpg", alt: "Coral silk saree portrait" },
  { src: "/gallery/gallery-11.jpg", alt: "Gold jewelry saree portrait" },
  { src: "/gallery/gallery-12.jpg", alt: "Saree portrait by a bright window" },
  { src: "/gallery/gallery-13.jpg", alt: "Studio ethnic fashion portrait" },
  { src: "/gallery/gallery-14.jpg", alt: "Rose tone evening saree portrait" },
  { src: "/gallery/gallery-15.jpg", alt: "Mirror light saree fashion look" },
  { src: "/gallery/gallery-16.jpg", alt: "Pastel ethnic wear portrait" },
  { src: "/gallery/gallery-17.jpg", alt: "Bridal style saree portrait" },
  { src: "/gallery/gallery-18.jpg", alt: "Soft light feminine saree portrait" },
  { src: "/gallery/gallery-19.jpg", alt: "Luxury textile fashion portrait" },
  { src: "/gallery/gallery-20.jpg", alt: "Festival glow ethnic fashion look" },
  { src: "/gallery/gallery-21.jpg", alt: "Cream blouse saree portrait" },
  { src: "/gallery/gallery-22.jpg", alt: "Emerald evening saree look" },
  { src: "/gallery/gallery-23.jpg", alt: "Blush tone ethnic fashion portrait" },
  { src: "/gallery/gallery-24.jpg", alt: "Ornate jewelry fashion portrait" },
  { src: "/gallery/gallery-25.jpg", alt: "Quiet luxury saree portrait" },
  { src: "/gallery/gallery-26.jpg", alt: "Candle glow ethnic fashion look" },
  { src: "/gallery/gallery-27.jpg", alt: "Modern desi fashion portrait" },
  { src: "/gallery/gallery-28.jpg", alt: "Campaign ready saree portrait" },
  { src: "/gallery/gallery-29.jpg", alt: "Feminine Indian fashion portrait" },
  { src: "/gallery/gallery-30.jpg", alt: "Silk saree beauty portrait" },
  { src: "/gallery/gallery-31.jpg", alt: "Elegant ethnic style portrait" },
  { src: "/gallery/gallery-32.jpg", alt: "Glam saree portrait in soft light" },
  { src: "/gallery/gallery-33.jpg", alt: "Festive Indian fashion portrait" },
  { src: "/gallery/gallery-34.jpg", alt: "Graceful woman in ethnic wear" },
  { src: "/gallery/gallery-35.jpg", alt: "Warm tone saree fashion look" },
  { src: "/gallery/gallery-36.jpg", alt: "Classic ethnic beauty portrait" },
  { src: "/gallery/gallery-37.jpg", alt: "Saree portrait with gold details" },
  { src: "/gallery/gallery-38.jpg", alt: "Rose saree feminine fashion look" },
  { src: "/gallery/gallery-39.jpg", alt: "Luminous ethnic fashion portrait" },
  { src: "/gallery/gallery-40.jpg", alt: "Cultural fashion portrait in silk" },
  { src: "/gallery/gallery-41.jpg", alt: "Polished saree portrait for brands" },
  { src: "/gallery/gallery-42.jpg", alt: "Feminine festive fashion look" },
  { src: "/gallery/gallery-43.jpg", alt: "Elegant woman in ethnic style" },
  { src: "/gallery/gallery-44.jpg", alt: "Saree beauty portrait with jewelry" },
  { src: "/gallery/gallery-45.jpg", alt: "Soft pink ethnic fashion portrait" },
  { src: "/gallery/gallery-46.jpg", alt: "Rich color saree portrait" },
  { src: "/gallery/gallery-47.jpg", alt: "Indian woman in evening fashion" },
  { src: "/gallery/gallery-48.jpg", alt: "Graceful silk saree portrait" },
  { src: "/gallery/gallery-49.jpg", alt: "Modern feminine ethnic look" },
  { src: "/gallery/gallery-50.jpg", alt: "Warm glam fashion portrait" },
  { src: "/gallery/gallery-51.jpg", alt: "Saree portrait with festive glow" },
  { src: "/gallery/gallery-52.jpg", alt: "Refined ethnic fashion portrait" },
  { src: "/gallery/gallery-53.jpg", alt: "Feminine studio saree look" },
  { src: "/gallery/gallery-54.jpg", alt: "Indian beauty in silk fashion" },
  { src: "/gallery/gallery-55.jpg", alt: "Elegant jewelry ethnic portrait" },
  { src: "/gallery/gallery-56.jpg", alt: "Soft rose saree fashion portrait" },
  { src: "/gallery/gallery-57.jpg", alt: "Draped saree feminine portrait" },
  { src: "/gallery/gallery-58.jpg", alt: "Contemporary ethnic fashion look" },
  { src: "/gallery/gallery-59.jpg", alt: "Radiant woman in saree style" },
  { src: "/gallery/gallery-60.jpg", alt: "Glamorous Indian fashion portrait" },
  { src: "/gallery/gallery-61.jpg", alt: "Pastel silk saree beauty look" },
  { src: "/gallery/gallery-62.jpg", alt: "Festive jewelry saree portrait" },
  { src: "/gallery/gallery-63.jpg", alt: "Feminine ethnic portrait in warm tones" },
  { src: "/gallery/gallery-64.jpg", alt: "Luxury saree fashion look" },
  { src: "/gallery/gallery-65.jpg", alt: "Elegant Indian style portrait" },
  { src: "/gallery/gallery-66.jpg", alt: "Soft glam woman in ethnic wear" },
  { src: "/gallery/gallery-67.jpg", alt: "Bright saree beauty portrait" },
  { src: "/gallery/gallery-68.jpg", alt: "Rich silk ethnic fashion portrait" },
  { src: "/gallery/gallery-69.jpg", alt: "Modern Indian feminine portrait" },
  { src: "/gallery/gallery-70.jpg", alt: "Saree fashion look with soft light" },
  { src: "/gallery/gallery-71.jpg", alt: "Graceful ethnic portrait for brands" },
  { src: "/gallery/gallery-72.jpg", alt: "Gold detail saree fashion look" },
  { src: "/gallery/gallery-73.jpg", alt: "Feminine evening ethnic portrait" },
  { src: "/gallery/gallery-74.jpg", alt: "Colorful Indian fashion portrait" },
  { src: "/gallery/gallery-75.jpg", alt: "Refined silk saree beauty look" },
  { src: "/gallery/gallery-76.jpg", alt: "Indian ethnic fashion portrait" },
  { src: "/gallery/gallery-77.jpg", alt: "Softly lit saree feminine look" },
  { src: "/gallery/gallery-78.jpg", alt: "Festive glam woman in saree" },
  { src: "/gallery/gallery-79.jpg", alt: "Elegant ethnic beauty in silk" },
  { src: "/gallery/gallery-80.jpg", alt: "Warm studio saree portrait" },
  { src: "/gallery/gallery-81.jpg", alt: "Feminine fashion look with jewelry" },
  { src: "/gallery/gallery-82.jpg", alt: "Indian saree portrait in soft tones" },
  { src: "/gallery/gallery-83.jpg", alt: "Luxe ethnic fashion portrait" },
  { src: "/gallery/gallery-84.jpg", alt: "Graceful festive saree look" },
  { src: "/gallery/gallery-85.jpg", alt: "Modern silk saree portrait" },
  { src: "/gallery/gallery-86.jpg", alt: "Radiant ethnic woman portrait" },
  { src: "/gallery/gallery-87.jpg", alt: "Blush glam Indian fashion look" },
  { src: "/gallery/gallery-88.jpg", alt: "Classic saree beauty portrait" },
  { src: "/gallery/gallery-89.jpg", alt: "Feminine cultural fashion portrait" },
  { src: "/gallery/gallery-90.jpg", alt: "Evening ethnic style portrait" },
  { src: "/gallery/gallery-91.jpg", alt: "Silk drape fashion portrait" },
  { src: "/gallery/gallery-92.jpg", alt: "Elegant saree look for brands" },
  { src: "/gallery/gallery-93.jpg", alt: "Soft light Indian fashion look" },
  { src: "/gallery/gallery-94.jpg", alt: "Ornate ethnic beauty portrait" },
  { src: "/gallery/gallery-95.jpg", alt: "Festive silk saree fashion" },
  { src: "/gallery/gallery-96.jpg", alt: "Warm feminine fashion portrait" },
  { src: "/gallery/gallery-97.jpg", alt: "Contemporary Indian saree look" },
  { src: "/gallery/gallery-98.jpg", alt: "Polished ethnic beauty portrait" },
  { src: "/gallery/gallery-99.jpg", alt: "Glamorous saree style portrait" },
  { src: "/gallery/gallery-100.jpg", alt: "Feminine Indian fashion look" },
];

const NAV = [
  { id: "gallery", label: "Gallery" },
  { id: "packs", label: "Packs" },
  { id: "license", label: "License" },
  { id: "shop", label: "Shop", href: GUMROAD_HERO },
];

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      // Mobile has less scroll room; start blur a touch later so more frames stay sharp
      const isMobile = window.innerWidth < 768;
      const startAt = isMobile ? 0.28 : 0.22;
      const span = isMobile ? 0.72 : 0.78;
      const raw = window.scrollY / (max * (isMobile ? 0.85 : 0.78));
      setProgress(Math.min(1, Math.max(0, (raw - startAt) / span)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const blurPx = useMemo(() => Math.round(progress * 16), [progress]);
  const veil = useMemo(() => Math.min(0.82, progress * 1.05), [progress]);
  const gateVisible = progress > 0.18;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fff5f8] text-[#4a1530]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_#ffd6e7_0%,_#fff5f8_42%,_#fce4ec_100%)]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#c2185b]/20 bg-[#fff5f8]/88 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8 md:py-4">
          <a
            href="#top"
            className="font-serif text-lg tracking-[0.18em] text-[#2d0a1a] md:text-2xl"
          >
            EthnicMuse
          </a>

          <nav className="hidden items-center gap-x-10 text-[15px] text-[#7a3d55] md:flex">
            {NAV.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center transition hover:text-[#c2185b]"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="inline-flex min-h-11 items-center transition hover:text-[#c2185b]"
                >
                  {item.label}
                </a>
              ),
            )}
          </nav>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[#c2185b]/30 bg-white/70 text-[#2d0a1a] md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              {menuOpen ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#c2185b]/15 bg-[#fff5f8]/98 px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-1">
              {NAV.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-11 items-center rounded-xl px-3 text-base text-[#4a1530] transition hover:bg-[#ffd6e7]/60"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="inline-flex min-h-11 items-center rounded-xl px-3 text-base text-[#4a1530] transition hover:bg-[#ffd6e7]/60"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ),
              )}
            </nav>
          </div>
        )}
      </header>

      <main id="top" className="relative pt-[3.75rem] md:pt-20">
        <section className="relative mx-auto max-w-6xl px-4 pb-8 pt-8 md:px-8 md:pb-12 md:pt-16">
          <p className="mb-3 text-[11px] uppercase tracking-[0.32em] text-[#d81b60] md:text-xs">
            Bold feminine ethnic fashion stock
          </p>
          <h1 className="max-w-3xl font-serif text-3xl font-medium leading-[1.15] tracking-tight text-[#2d0a1a] sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="md:hidden">
              Indian saree and ethnic lifestyle images for ads and brand campaigns.
            </span>
            <span className="hidden md:inline">
              Feminine Indian saree and ethnic lifestyle images for ads, lookbooks, and brand calendars.
            </span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#7a3d55] md:mt-6 md:text-lg">
            <span className="md:hidden">
              Scroll the gallery. Farther down, frames soften and the full commercial library opens on Gumroad.
            </span>
            <span className="hidden md:inline">
              Scroll through a longer gallery first. Farther down, the frames soften and open the full commercial library on Gumroad.
            </span>
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={GUMROAD_HERO}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#d81b60] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(194,24,91,0.35)] transition hover:bg-[#c2185b]"
            >
              Unlock full library · CAD $29
            </a>
            <a
              href="#gallery"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#c2185b]/35 bg-white/80 px-6 py-3 text-sm font-medium text-[#4a1530] transition hover:border-[#d81b60] hover:text-[#c2185b]"
            >
              Browse gallery
            </a>
          </div>
        </section>

        <section
          id="gallery"
          className="relative mx-auto max-w-6xl overflow-x-hidden px-4 pb-40 md:px-8 md:pb-36"
        >
          <div
            className="columns-1 gap-4 sm:columns-2 lg:columns-3"
            style={{
              filter: `blur(${blurPx}px)`,
              transition: "filter 140ms linear",
            }}
          >
            {GALLERY.map((shot, index) => (
              <figure
                key={shot.src}
                className="gallery-frame relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-[#c2185b]/18 bg-white/80 shadow-[0_14px_40px_rgba(45,10,26,0.12)] md:rounded-[1.6rem] md:shadow-[0_18px_48px_rgba(45,10,26,0.14)]"
                onContextMenu={(event) => event.preventDefault()}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={1200}
                  height={1600}
                  className="gallery-image h-auto w-full object-cover select-none"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                  draggable={false}
                  onDragStart={(event) => event.preventDefault()}
                />
                <div className="gallery-protection" aria-hidden="true" />
                <span className="gallery-watermark" aria-hidden="true">
                  EthnicMuse
                </span>
              </figure>
            ))}
          </div>

          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 top-[35%] bg-gradient-to-b from-transparent via-[#fff5f8]/55 to-[#fff5f8]"
            style={{ opacity: veil }}
            aria-hidden
          />

          <div
            className={`sticky bottom-8 z-40 mx-auto mt-[-10rem] hidden max-w-xl px-2 transition-all duration-300 md:block ${
              gateVisible
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-6 opacity-0"
            }`}
          >
            <div className="rounded-[1.75rem] border border-[#c2185b]/25 bg-[#fffafc]/95 p-8 shadow-[0_24px_60px_rgba(45,10,26,0.22)] backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.28em] text-[#d81b60]">
                Unlock more
              </p>
              <h2 className="mt-3 font-serif text-3xl font-medium text-[#2d0a1a]">
                The rest of the library opens on Gumroad.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#7a3d55]">
                Commercial license included. Lifestyle and Ethnic Stock Bundle for Shopify ads, lookbooks, and brand content. CAD $29.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={GUMROAD_HERO}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#d81b60] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(194,24,91,0.35)] transition hover:bg-[#c2185b]"
                >
                  Unlock full library
                </a>
                <a
                  href={GUMROAD_ENTRY}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#c2185b]/35 bg-white/80 px-5 py-3 text-sm text-[#4a1530] transition hover:border-[#d81b60]"
                >
                  Start with faces pack
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="packs"
          className="border-t border-[#c2185b]/18 bg-[#ffe0ec]/70"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-4 py-14 md:grid-cols-3 md:gap-8 md:px-8 md:py-20">
            <article className="rounded-2xl border border-[#c2185b]/20 bg-white/90 p-6 shadow-[0_12px_36px_rgba(45,10,26,0.1)] md:rounded-[1.5rem] md:p-7">
              <h3 className="font-serif text-xl font-medium text-[#2d0a1a]">
                Lifestyle bundle
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#7a3d55]">
                864 ethnic fashion and lifestyle frames. Best mid tier for campaigns. CAD $29.
              </p>
              <a
                href={GUMROAD_HERO}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-[#d81b60] transition hover:text-[#c2185b]"
              >
                Open on Gumroad
              </a>
            </article>
            <article className="rounded-2xl border border-[#c2185b]/20 bg-white/90 p-6 shadow-[0_12px_36px_rgba(45,10,26,0.1)] md:rounded-[1.5rem] md:p-7">
              <h3 className="font-serif text-xl font-medium text-[#2d0a1a]">
                Portrait faces
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#7a3d55]">
                Smaller entry pack for a first commercial test. CAD $19.
              </p>
              <a
                href={GUMROAD_ENTRY}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-[#d81b60] transition hover:text-[#c2185b]"
              >
                Open on Gumroad
              </a>
            </article>
            <article className="rounded-2xl border border-[#c2185b]/20 bg-white/90 p-6 shadow-[0_12px_36px_rgba(45,10,26,0.1)] md:rounded-[1.5rem] md:p-7">
              <h3 className="font-serif text-xl font-medium text-[#2d0a1a]">
                Full shop
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#7a3d55]">
                Browse every EthnicMuse World pack in one place.
              </p>
              <a
                href={GUMROAD_HOME}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-[#d81b60] transition hover:text-[#c2185b]"
              >
                Visit shop
              </a>
            </article>
          </div>
        </section>

        <section
          id="license"
          className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20"
        >
          <h2 className="font-serif text-2xl font-medium text-[#2d0a1a] md:text-4xl">
            License in plain words
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#7a3d55] md:text-base">
            Commercial license included for ads, websites, social, lookbooks, and client work under standard EthnicMuse terms. You cannot resell the files as a competing stock pack or claim the people are real models you photographed. Images are AI generated ethnic fashion stock curated for creative use.
          </p>
        </section>
      </main>

      <footer className="border-t border-[#c2185b]/18 py-8 pb-28 text-center text-sm text-[#7a3d55] md:pb-10">
        EthnicMuse World. Bold feminine commercial ethnic fashion stock.
      </footer>

      <div
        className={`fixed inset-x-0 bottom-0 z-50 mobile-sticky-cta transition-all duration-300 md:hidden ${
          gateVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-full opacity-0"
        }`}
      >
        <div className="border-t border-[#c2185b]/25 bg-[#fff5f8]/95 px-4 pt-3 shadow-[0_-12px_40px_rgba(45,10,26,0.18)] backdrop-blur-xl">
          <a
            href={GUMROAD_HERO}
            target="_blank"
            rel="noreferrer"
            className="flex min-h-12 w-full items-center justify-between gap-3 rounded-2xl bg-[#d81b60] px-5 py-3 text-white shadow-[0_10px_28px_rgba(194,24,91,0.4)]"
          >
            <span className="text-sm font-semibold tracking-wide">CAD $29</span>
            <span className="text-sm font-semibold">Unlock full library</span>
          </a>
        </div>
      </div>
    </div>
  );
}
