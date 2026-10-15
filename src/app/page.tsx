"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const GUMROAD_HERO =
  "https://ethnicmuse.gumroad.com/l/EthnicMuseWorldLifestyleEthnicStockBundle";
const GUMROAD_ENTRY =
  "https://ethnicmuse.gumroad.com/l/SareePortraitFacesPack";
const GUMROAD_HOME = "https://ethnicmuse.gumroad.com";
const GUMROAD_PORTRAITS =
  "https://ethnicmuse.gumroad.com/l/EthnicMuseSareePortraitPack";

const PACK_CARDS = [
  {
    title: "The Saree Portrait Starter",
    price: "$7.99",
    priceNote: "USD",
    bestFor: "Testing ad creatives, seasonal announcements, and social grids.",
    inside: [
      "272 high resolution saree portraits",
      "Curated mix of soft glam, warm window light, and festive silk looks",
      "Watermark free, color graded files ready for text overlays",
      "Commercial license included",
    ],
    cta: "Get the Starter Pack",
    href: GUMROAD_PORTRAITS,
    external: true,
    featured: false,
  },
  {
    title: "The Complete Lifestyle Stock Bundle",
    price: "$14.99",
    priceNote: "USD",
    bestFor: "Shopify collection launches, lookbooks, and full funnel Meta ad campaigns.",
    inside: [
      "864 editorial and lifestyle stills spanning silk, velvet, evening glam, and studio portraits",
      "Cohesive skin tones, authentic jewelry styling, and rich fabric textures",
      "Compositions that crop well for Shopify headers, 4:5 feed ads, and 9:16 Stories and Reels covers",
      "Commercial license for paid ads and ecommerce",
    ],
    cta: "Shop the Full Bundle",
    href: GUMROAD_HERO,
    external: true,
    featured: true,
  },
  {
    title: "The Prompt Vault",
    price: "$4.99",
    priceNote: "USD per volume",
    bestFor: "In house creative teams and designers generating their own brand visuals.",
    inside: [
      "2,000 tested AI image prompts across two volumes",
      "Written for authentic Indian drapes, lighting, and South Asian features",
      "Works with Midjourney and Flux",
      "Printable PDF",
    ],
    cta: "Unlock the Prompts",
    href: "/prompts",
    external: false,
    featured: false,
  },
];

const LICENSE_CAN = [
  { title: "Run paid ads", body: "use in Meta (Instagram and Facebook), Google, and Pinterest campaigns with unlimited impressions." },
  { title: "Build your storefront", body: "Shopify product pages, collection banners, hero sliders, and lookbooks." },
  { title: "Edit and customize", body: "add typography, logos, color grading, background swaps, or mockups." },
  { title: "Client work", body: "agencies and freelancers may use a pack for one client brand per license." },
];

const LICENSE_CANNOT = [
  { title: "Resell as stock", body: "do not redistribute or resell the raw files on stock sites, Gumroad, or free download hubs." },
  { title: "Print on demand merch", body: "do not sell the standalone images printed on posters, shirts, or tote bags." },
  { title: "Trademarks", body: "do not register the images as a trademark or logo." },
  { title: "Training datasets", body: "do not use the files to train competing AI models or LoRAs." },
  { title: "Fake endorsements", body: "do not imply a real brand or person endorsed you or was hired." },
];

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
  { src: "/gallery/gallery-102.jpg", alt: "Woman in a marigold silk saree holding a diya at a festive rooftop" },
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

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [shopBar, setShopBar] = useState(false);

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
      setShopBar(window.scrollY > 160);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const blurPx = useMemo(() => Math.round(progress * 16), [progress]);
  const veil = useMemo(() => Math.min(0.82, progress * 1.05), [progress]);
  const gateVisible = progress > 0.18;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#ffffff] text-[#1d1d1f]">
      <SiteHeader />
      <main id="top" className="relative">
        <section className="relative mx-auto max-w-6xl px-4 pb-8 pt-10 md:px-8 md:pb-14 md:pt-20">
          <h1 className="max-w-3xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#1d1d1f] sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="md:hidden">
              Indian saree and ethnic lifestyle images for ads and brand campaigns.
            </span>
            <span className="hidden md:inline">
              Indian saree and ethnic lifestyle images for ads, lookbooks, and brand calendars.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#86868b] md:text-base">
            For Shopify product pages, collection grids, Meta ads, and lookbooks.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4">
            <a
              href={GUMROAD_HERO}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1d1d1f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              Shop Lifestyle stills
            </a>
            <a
              href="#gallery"
              className="text-sm text-[#86868b] underline decoration-[#d2d2d7] underline-offset-4 transition hover:text-[#1d1d1f]"
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
                className="gallery-frame relative mb-4 break-inside-avoid overflow-hidden rounded-2xl border border-[#e8e8ed] bg-white shadow-[0_8px_28px_rgba(0,0,0,0.06)] md:rounded-2xl md:shadow-[0_12px_36px_rgba(0,0,0,0.08)]"
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
                  EthnicMuseWorld
                </span>
              </figure>
            ))}
          </div>

          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 top-[35%] bg-gradient-to-b from-transparent via-[#ffffff]/55 to-[#ffffff]"
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
            <div className="rounded-2xl border border-[#d2d2d7] bg-[#ffffff]/95 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.12)] backdrop-blur-xl">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#86868b]">
                Unlock more
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1d1d1f]">
                The rest of the library opens on Gumroad.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#86868b]">
                Commercial license included. Lifestyle and Ethnic Stock Bundle for Shopify ads, lookbooks, and brand content.
              </p>
              <div className="mt-6 flex flex-col items-start gap-3">
                <a
                  href={GUMROAD_HERO}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1d1d1f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-black"
                >
                  Shop Lifestyle stills
                </a>
                <a
                  href={GUMROAD_ENTRY}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[#86868b] underline decoration-[#d2d2d7] underline-offset-4 transition hover:text-[#1d1d1f]"
                >
                  Start with faces pack
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="packs" className="border-t border-[#d2d2d7] bg-[#f5f5f7]">
          <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#86868b]">
              Curated asset bundles
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-[#1d1d1f] md:text-5xl">
              Studio grade ethnic campaigns. Zero shoot day overhead.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#86868b] md:text-base">
              Skip the studio rentals, model coordination, and weeks of post production. Download cohesive, high resolution saree and ethnic lifestyle collections ready to drop straight into your Shopify themes, Meta ad sets, and festive lookbooks.
            </p>

            <div className="mt-10 grid grid-cols-1 items-stretch gap-5 md:grid-cols-3 md:gap-6">
              {PACK_CARDS.map((card) => (
                <article
                  key={card.title}
                  className={`relative flex flex-col rounded-3xl p-7 md:p-8 ${
                    card.featured
                      ? "border border-[#1d1d1f] bg-[#1d1d1f] text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)] md:-translate-y-2"
                      : "border border-[#e8e8ed] bg-white text-[#1d1d1f] shadow-[0_8px_28px_rgba(0,0,0,0.05)]"
                  }`}
                >
                  {card.featured ? (
                    <span className="absolute right-6 top-6 rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1d1d1f]">
                      Most popular
                    </span>
                  ) : null}
                  <h3 className="max-w-[80%] text-xl font-semibold tracking-tight md:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-3xl font-semibold tracking-tight">
                    {card.price}
                    <span className={`ml-2 text-sm font-normal ${card.featured ? "text-white/70" : "text-[#86868b]"}`}>
                      {card.priceNote}
                    </span>
                  </p>
                  <p className={`mt-4 text-sm leading-relaxed ${card.featured ? "text-white/75" : "text-[#86868b]"}`}>
                    <span className={`font-semibold ${card.featured ? "text-white" : "text-[#1d1d1f]"}`}>Best for: </span>
                    {card.bestFor}
                  </p>
                  <p className={`mt-5 text-xs font-medium uppercase tracking-[0.18em] ${card.featured ? "text-white/60" : "text-[#86868b]"}`}>
                    What is inside
                  </p>
                  <ul className="mt-3 flex-1 space-y-2.5">
                    {card.inside.map((item) => (
                      <li key={item} className={`flex gap-2.5 text-sm leading-relaxed ${card.featured ? "text-white/85" : "text-[#1d1d1f]"}`}>
                        <span aria-hidden="true" className={card.featured ? "text-white" : "text-[#1d1d1f]"}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={card.href}
                    {...(card.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className={`mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                      card.featured
                        ? "bg-white text-[#1d1d1f] hover:bg-[#f5f5f7]"
                        : "bg-[#1d1d1f] text-white hover:bg-black"
                    }`}
                  >
                    {card.cta}
                  </a>
                </article>
              ))}
            </div>

            <p className="mt-10 text-center text-sm text-[#86868b]">
              Want a smaller test first? Try the{" "}
              <a href={GUMROAD_ENTRY} target="_blank" rel="noreferrer" className="font-medium text-[#1d1d1f] underline decoration-[#d2d2d7] underline-offset-4 transition hover:opacity-80">
                faces pack
              </a>
              , or{" "}
              <a href={GUMROAD_HOME} target="_blank" rel="noreferrer" className="font-medium text-[#1d1d1f] underline decoration-[#d2d2d7] underline-offset-4 transition hover:opacity-80">
                browse every pack in the full shop
              </a>
              . Also see{" "}
              <a href="/portraits" className="font-medium text-[#1d1d1f] underline decoration-[#d2d2d7] underline-offset-4 transition hover:opacity-80">
                Portraits
              </a>{" "}
              and the{" "}
              <a href="/saree-stock-photos-for-shopify" className="font-medium text-[#1d1d1f] underline decoration-[#d2d2d7] underline-offset-4 transition hover:opacity-80">
                saree stock guide for Shopify
              </a>
              .
            </p>
          </div>
        </section>

        <section
          id="license"
          className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20"
        >
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#86868b]">
            Clear, worry free rights
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1d1d1f] md:text-5xl">
            One simple license built for modern commerce.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#86868b] md:text-base">
            Every EthnicMuseWorld pack comes with a perpetual commercial license. No recurring royalties, no impression caps on your ads, and no confusing legal jargon.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {[
              { heading: "What you can do", items: LICENSE_CAN, mark: "✓", markClass: "bg-[#1d1d1f] text-white" },
              { heading: "What you cannot do", items: LICENSE_CANNOT, mark: "✕", markClass: "bg-[#f5f5f7] text-[#1d1d1f] border border-[#d2d2d7]" },
            ].map((col) => (
              <div key={col.heading} className="rounded-3xl border border-[#e8e8ed] bg-white p-7 shadow-[0_8px_28px_rgba(0,0,0,0.05)] md:p-8">
                <h3 className="text-lg font-semibold tracking-tight text-[#1d1d1f]">{col.heading}</h3>
                <ul className="mt-5 space-y-4">
                  {col.items.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <span aria-hidden="true" className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${col.markClass}`}>
                        {col.mark}
                      </span>
                      <p className="text-sm leading-relaxed text-[#86868b]">
                        <span className="font-semibold text-[#1d1d1f]">{item.title}: </span>
                        {item.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm leading-relaxed text-[#86868b]">
            <span className="font-semibold text-[#1d1d1f]">Watermark free on delivery.</span>{" "}
            The EthnicMuseWorld watermark you see in the live gallery is not on your downloaded files. Instant delivery through Gumroad right after checkout.
          </p>
          <p className="mt-4 text-center text-xs leading-relaxed text-[#86868b]">
            Images are AI generated and human curated ethnic fashion stock. They are not photographs of hired models, and you cannot claim the people are real models you photographed.
          </p>
        </section>
      </main>

      <SiteFooter className="pb-28 md:pb-24" />

      <div
        className={`fixed inset-x-0 bottom-0 z-50 mobile-sticky-cta transition-all duration-300 ${
          shopBar
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-full opacity-0"
        } ${
          gateVisible
            ? "md:pointer-events-none md:translate-y-full md:opacity-0"
            : ""
        }`}
      >
        <div className="border-t border-[#d2d2d7] bg-[#ffffff]/95 px-4 pt-3 shadow-[0_-12px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl">
          <a
            href={GUMROAD_HERO}
            target="_blank"
            rel="noreferrer"
            className="mx-auto flex min-h-12 w-full max-w-xl items-center justify-center gap-3 rounded-2xl bg-[#1d1d1f] px-5 py-3 text-white transition hover:bg-black"
          >
            <span className="text-sm font-semibold">Shop Lifestyle stills</span>
          </a>
        </div>
      </div>
    </div>
  );
}
