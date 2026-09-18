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

  useEffect(() => {
    const onScroll = () => {
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      // Blur starts later so more photos stay sharp first
      const raw = window.scrollY / (max * 0.78);
      setProgress(Math.min(1, Math.max(0, (raw - 0.22) / 0.78)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const blurPx = useMemo(() => Math.round(progress * 16), [progress]);
  const veil = useMemo(() => Math.min(0.82, progress * 1.05), [progress]);
  const gateVisible = progress > 0.18;

  return (
    <div className="min-h-screen bg-[#fff7fb] text-[#4a2f3a]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_#ffe4ef_0%,_#fff7fb_45%,_#f8eef5_100%)]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e8b4c8]/35 bg-[#fff7fb]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-5 py-4 md:px-8">
          <a
            href="#top"
            className="font-serif text-xl tracking-[0.12em] text-[#7a3d55] md:text-2xl"
          >
            EthnicMuse
          </a>
          <nav className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2 text-sm text-[#8a5a6c] md:gap-x-10 md:text-[15px]">
            {NAV.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-[#7a3d55]"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="transition hover:text-[#7a3d55]"
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
          <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#c46b8c]">
            Soft glam ethnic fashion stock
          </p>
          <h1 className="max-w-3xl font-serif text-3xl font-medium leading-tight text-[#5c3144] md:text-5xl">
            Feminine Indian saree and ethnic lifestyle images for ads, lookbooks, and brand calendars.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-[#8a5a6c] md:text-lg">
            Scroll through a longer gallery first. Farther down, the frames soften and open the full commercial library on Gumroad.
          </p>
        </section>

        <section id="gallery" className="relative mx-auto max-w-6xl px-5 pb-36 md:px-8">
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
                className="mb-4 break-inside-avoid overflow-hidden rounded-[1.4rem] border border-[#e8b4c8]/40 bg-white/70 shadow-[0_10px_30px_rgba(122,61,85,0.08)]"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={1200}
                  height={1600}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 3}
                />
              </figure>
            ))}
          </div>

          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 top-[35%] bg-gradient-to-b from-transparent via-[#fff7fb]/55 to-[#fff7fb]"
            style={{ opacity: veil }}
            aria-hidden
          />

          <div
            className={`sticky bottom-8 z-40 mx-auto mt-[-10rem] max-w-xl px-2 transition-all duration-300 ${
              gateVisible
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-6 opacity-0"
            }`}
          >
            <div className="rounded-[1.75rem] border border-[#e8b4c8]/55 bg-[#fffafc]/95 p-6 shadow-[0_20px_50px_rgba(122,61,85,0.18)] backdrop-blur-xl md:p-8">
              <p className="text-xs uppercase tracking-[0.24em] text-[#c46b8c]">
                Unlock more
              </p>
              <h2 className="mt-3 font-serif text-2xl font-medium text-[#5c3144] md:text-3xl">
                The rest of the library opens on Gumroad.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#8a5a6c] md:text-base">
                Commercial license included. Lifestyle and Ethnic Stock Bundle for Shopify ads, lookbooks, and brand content. CAD $29.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={GUMROAD_HERO}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#c46b8c] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#b35a7c]"
                >
                  Unlock full library
                </a>
                <a
                  href={GUMROAD_ENTRY}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[#e8b4c8] bg-white/70 px-5 py-3 text-sm text-[#7a3d55] transition hover:border-[#c46b8c]"
                >
                  Start with faces pack
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="packs" className="border-t border-[#e8b4c8]/35 bg-[#ffeaf2]/55">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-3 md:px-8">
            <article className="rounded-[1.4rem] border border-[#e8b4c8]/45 bg-white/80 p-6 shadow-sm">
              <h3 className="font-serif text-lg font-medium text-[#5c3144]">Lifestyle bundle</h3>
              <p className="mt-2 text-sm text-[#8a5a6c]">
                864 ethnic fashion and lifestyle frames. Best mid tier for campaigns. CAD $29.
              </p>
              <a
                href={GUMROAD_HERO}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-[#c46b8c] hover:text-[#7a3d55]"
              >
                Open on Gumroad
              </a>
            </article>
            <article className="rounded-[1.4rem] border border-[#e8b4c8]/45 bg-white/80 p-6 shadow-sm">
              <h3 className="font-serif text-lg font-medium text-[#5c3144]">Portrait faces</h3>
              <p className="mt-2 text-sm text-[#8a5a6c]">
                Smaller entry pack for a first commercial test. CAD $19.
              </p>
              <a
                href={GUMROAD_ENTRY}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-[#c46b8c] hover:text-[#7a3d55]"
              >
                Open on Gumroad
              </a>
            </article>
            <article className="rounded-[1.4rem] border border-[#e8b4c8]/45 bg-white/80 p-6 shadow-sm">
              <h3 className="font-serif text-lg font-medium text-[#5c3144]">Full shop</h3>
              <p className="mt-2 text-sm text-[#8a5a6c]">
                Browse every EthnicMuse World pack in one place.
              </p>
              <a
                href={GUMROAD_HOME}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-[#c46b8c] hover:text-[#7a3d55]"
              >
                Visit shop
              </a>
            </article>
          </div>
        </section>

        <section id="license" className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <h2 className="font-serif text-2xl font-medium text-[#5c3144] md:text-3xl">License in plain words</h2>
          <p className="mt-4 max-w-3xl text-[#8a5a6c]">
            Commercial license included for ads, websites, social, lookbooks, and client work under standard EthnicMuse terms. You cannot resell the files as a competing stock pack or claim the people are real models you photographed. Images are AI generated ethnic fashion stock curated for creative use.
          </p>
        </section>
      </main>

      <footer className="border-t border-[#e8b4c8]/35 py-8 text-center text-sm text-[#9a6a7c]">
        EthnicMuse World. Soft glam commercial ethnic fashion stock.
      </footer>
    </div>
  );
}
