import type { Metadata } from "next";
import type React from "react";
import Image from "next/image";
import CopyPromptButton from "@/components/CopyPromptButton";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Prompt PDFs | EthnicMuse Saree Stock AI Prompts",
  description:
    "Two PDF volumes with 1,000 coherent saree stock AI image prompts each, or both for $7.99, with real prompt to output samples and instant Gumroad download",
};

const GUMROAD_HOME = "https://ethnicmuse.gumroad.com";

// Gumroad bundle: Volume 1 + Volume 2 together.
const BUNDLE_URL = "https://ethnicmuse.gumroad.com/l/ykjyvh";

const BUNDLE = {
  url: BUNDLE_URL,
  button: "Get Both Volumes (2,000 Prompts) · $7.99, Save 20%",
};

type Volume = {
  key: "v1" | "v2";
  title: string;
  price: string;
  url: string;
  badge: string;
  blurb: string;
  bullets: string[];
  moods: string[];
  cta: string;
  button: string;
  coverLabel: string;
  coverRange: string;
  coverImages: string[];
};

const VOLUME_1: Volume = {
  key: "v1",
  title: "Saree Stock Photography",
  price: "$4.99 USD",
  url: "https://ethnicmuse.gumroad.com/l/baemqv",
  badge: "Volume 1 · Prompts 1 to 1000",
  blurb:
    "1,000 paste ready prompts for photorealistic saree stock\nEach card is one full paragraph with a locked adult Indian woman look, blouse and saree wardrobe, mood, location, light, and camera that agree\nAspect ratios on each card\n508 page printable PDF",
  bullets: [
    "1,000 numbered prompts",
    "10 mood categories, 100 prompts each",
    "Coherent scene kits (no broken mixes)",
    "Paste into Midjourney, Flux, Gemini, ChatGPT, and similar tools",
    "Instant download on Gumroad",
  ],
  moods: [
    "Bridal",
    "Heritage",
    "Editorial",
    "Lifestyle",
    "Catalog",
    "Beauty",
    "Glamour",
    "Festival",
    "Urban",
    "Monsoon",
  ],
  cta: "Buy Volume 1 on Gumroad",
  button: "Get Volume 1 · $4.99",
  coverLabel: "Volume 1",
  coverRange: "Prompts 1 to 1000",
  coverImages: [
    "/prompts/samples/cover-v1-0002-heritage.webp",
    "/prompts/samples/cover-02.webp",
    "/prompts/samples/cover-102.webp",
    "/prompts/samples/cover-10.webp",
  ],
};

const VOLUME_2: Volume = {
  key: "v2",
  title: "Saree Stock Photography (Prompts 1000 to 1999)",
  price: "$4.99 USD",
  url: "https://ethnicmuse.gumroad.com/l/zkpqe",
  badge: "Volume 2 · Prompts 1000 to 1999",
  blurb:
    "Another 1,000 prompts that continue the library\nFresh fabrics, locations, and wording versus Volume 1, plus three moods Volume 1 does not have: Atelier, Coast, and Night\nSame coherent paragraph format\nSame subject lock",
  bullets: [
    "1,000 numbered prompts (1000 to 1999)",
    "10 mood categories, 100 prompts each",
    "New moods: Atelier, Coast, Night",
    "508 page printable PDF",
    "Instant download on Gumroad",
  ],
  moods: [
    "Catalog",
    "Atelier",
    "Heritage",
    "Glamour",
    "Bridal",
    "Festival",
    "Coast",
    "Monsoon",
    "Beauty",
    "Night",
  ],
  cta: "Buy Volume 2 on Gumroad",
  button: "Get Volume 2 · $4.99",
  coverLabel: "Volume 2",
  coverRange: "Prompts 1000 to 1999",
  coverImages: [
    "/prompts/samples/cover-v2-1064-atelier.webp",
    "/prompts/samples/cover-95.webp",
    "/prompts/samples/cover-04.webp",
    "/prompts/samples/cover-26.webp",
  ],
};

const V1_ONLY = VOLUME_1.moods.filter((m) => !VOLUME_2.moods.includes(m));
const V2_ONLY = VOLUME_2.moods.filter((m) => !VOLUME_1.moods.includes(m));

const MODEL_BADGE = "Generated with Gemini";

// Exact prompt paragraphs copied from the PDFs. Images generated from these prompts.
const SAMPLES = [
  {
    number: "Prompt 2",
    volume: "Volume 1",
    mood: "Heritage",
    aspect: "16:9",
    image: "/prompts/samples/v1-0002-heritage.webp",
    alt: "Woman in a blush pink Chanderi saree walking through a marble colonnade in Jaipur",
    prompt:
      "A photorealistic 4K photograph of a beautiful adult Indian woman in her late twenties with fair glowing skin and a traditional jooda with fresh roses, wearing a blush-pink Chanderi cotton-silk saree, in a seedha pallu style with the decorative border facing forward, and a mirror-work Rajasthani blouse with three-quarter sleeves, temple jewelry with a heavy necklace and jhumkas. She is walking through a marble colonnade, looking back. Location: a pink sandstone palace facade in Jaipur. Lighting: bright desert sunlight with crisp warm shadows. Camera: 35mm travel lens for architecture and subject, photorealistic, commercial retouching, print-ready quality. Style: cultural fashion editorial with palace architecture, travel stock, 4K.",
  },
  {
    number: "Prompt 10",
    volume: "Volume 1",
    mood: "Festival",
    aspect: "3:2",
    image: "/prompts/samples/v1-0010-festival.webp",
    alt: "Woman in a raspberry saree arranging diyas on a Diwali terrace",
    prompt:
      "A photorealistic 4K photograph of a beautiful adult Indian woman in her late twenties with fair glowing skin and a traditional jooda with fresh roses, wearing a raspberry chiffon saree, in a Kerala-style kasavu drape with the gold border prominent, and a sequin blouse with modest lined coverage and short sleeves, layered coin necklace and oxidized earrings. She is arranging a row of diyas on a terrace ledge, glancing up. Location: a Diwali terrace lined with oil lamps and soft fireworks bokeh far behind. Lighting: warm oil-lamp light with a gentle face fill. Camera: 50mm lens, natural lifestyle perspective, photorealistic, commercial retouching, print-ready quality. Style: festive celebration commercial stock, joyful color, 4K.",
  },
  {
    number: "Prompt 1064",
    volume: "Volume 2",
    mood: "Atelier",
    aspect: "3:4",
    image: "/prompts/samples/v2-1064-atelier.webp",
    alt: "Woman in an ink indigo handloom silk saree in a Surat embroidery workshop",
    prompt:
      "A photorealistic 4K photograph of a beautiful adult Indian woman in her late twenties with fair glowing skin and a braided crown with loose ends and fresh jasmine, wearing an ink-indigo handloom silk saree, draped in a classic Nivi style with the pallu over the left shoulder, and a square-neck blouse with light zardozi work, traditional gold jhumkas and stacked bangles. She is standing in shop-window light with a saree draped over one arm. Location: a Surat embroidery workshop with frames along the wall. Lighting: bright practical workshop light with soft face fill. Camera: 50mm lens, natural craft perspective, photorealistic, commercial retouching, print-ready quality. Style: silk-shop editorial with authentic weave detail, print-ready, 4K.",
  },
];

const FOR_WHOM = [
  "Shopify ethnic wear sellers who need campaign frames without a full shoot",
  "Lookbook makers who want bridal, heritage, lifestyle, and editorial saree scenes on demand",
  "AI image creators who are tired of prompts that break wardrobe, light, or pose mid generation",
  "Agencies and freelancers building Indian ethnic fashion ads, site banners, and content calendars",
];

const WHY_BUY = [
  "You get coherent scene kits, not random prompt soup",
  "Subject look stays stable across the set so campaigns feel like one library",
  "Mood tags help you jump to bridal, catalog, festival, atelier, coast, and more",
  "PDF format means you browse, copy, and go\nNo app lock in",
];

const TRUST = [
  {
    title: "Commercial use of the PDF",
    icon: "check",
    body: "You buy the prompt library for your own creative workflows\nPaste prompts into your image tools\nFollow each model provider’s terms for the images you generate",
  },
  {
    title: "AI disclosure",
    icon: "info",
    body: "These are text prompts for AI image tools\nThey are not photographs of hired models\nOutputs you create are AI generated unless you say otherwise in your own marketing",
  },
  {
    title: "Not the image packs",
    icon: "layers",
    body: "EthnicMuseWorld also sells ready stock image bundles with a commercial license for those files\nThis page is for prompt PDFs only",
  },
  {
    title: "Refunds",
    icon: "refresh",
    body: "If a download fails, message the seller through Gumroad\nGumroad may still refund under its own rules",
  },
  {
    title: "Adult subject lock",
    icon: "shield",
    body: "Every prompt specifies an adult Indian woman subject\nBuilt for commercial fashion and stock use cases",
  },
];

const TRUST_ICONS: Record<string, React.ReactNode> = {
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v6" />
      <path d="M12 7.5h.01" />
    </>
  ),
  layers: (
    <>
      <path d="M12 4l8 4.5l-8 4.5l-8-4.5z" />
      <path d="M4 13l8 4.5l8-4.5" />
    </>
  ),
  refresh: (
    <>
      <path d="M19 8a8 8 0 1 0 1 6" />
      <path d="M19 3v5h-5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10c-4-2-7-5.5-7-10V6z" />
      <path d="M9 12l2 2l4-4" />
    </>
  ),
};

const btnPrimary =
  "inline-flex min-h-11 items-center justify-center rounded-full bg-[#1d1d1f] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_8px_22px_rgba(0,0,0,0.18)] transition hover:bg-black";
const btnSecondary =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-[#d2d2d7] bg-white px-6 py-3 text-center text-sm font-medium text-[#1d1d1f] transition hover:bg-[#f5f5f7]";

function BuyButtons() {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-center">
      <a href={BUNDLE.url} target="_blank" rel="noreferrer" className={`${btnPrimary} lg:order-3`}>
        {BUNDLE.button}
      </a>
      <a href={VOLUME_1.url} target="_blank" rel="noreferrer" className={`${btnSecondary} lg:order-1`}>
        {VOLUME_1.button}
      </a>
      <a href={VOLUME_2.url} target="_blank" rel="noreferrer" className={`${btnSecondary} lg:order-2`}>
        {VOLUME_2.button}
      </a>
    </div>
  );
}

function Cover({ product }: { product: Volume }) {
  const v2 = product.key === "v2";
  const frame = v2
    ? "bg-[#1b1f4b] text-[#e9c46a] border-[#c9a227]"
    : "bg-[#f6efe2] text-[#6b1d24] border-[#7a1f2b]";
  const sub = v2 ? "text-[#e9c46a]/80" : "text-[#6b1d24]/75";
  return (
    <div className={`relative flex aspect-[4/3] w-full flex-col p-4 sm:aspect-square sm:p-7 ${frame}`}>
      <div className={`flex h-full flex-col rounded-xl border-2 p-4 sm:p-5 ${frame}`}>
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em]">
            {product.coverLabel}
          </p>
          <p className={`text-[11px] uppercase tracking-[0.18em] ${sub}`}>
            {product.coverRange}
          </p>
        </div>
        <p className="mt-2 font-serif text-2xl leading-tight sm:text-3xl">
          Saree Stock Photography
        </p>
        <p className={`mt-1 text-xs sm:text-sm ${sub}`}>
          1,000 AI image prompts · 10 moods
        </p>
        <div className="mt-4 grid flex-1 grid-cols-2 grid-rows-2 gap-2">
          {product.coverImages.map((src) => (
            <div key={src} className="relative overflow-hidden rounded-md">
              <Image
                src={src}
                alt=""
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 45vw, 22vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Volume }) {
  const unique = product.key === "v1" ? V1_ONLY : V2_ONLY;
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-[#e8e8ed] bg-white shadow-[0_8px_28px_rgba(0,0,0,0.05)]">
      <Cover product={product} />
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#86868b]">
          {product.badge}
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#1d1d1f]">
          {product.title}
        </h2>
        <p className="mt-2 text-lg font-semibold text-[#1d1d1f]">
          {product.price}
        </p>
        <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-[#86868b] md:text-[15px]">
          {product.blurb}
        </p>
        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1d1d1f]">
            The 10 moods inside
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {product.moods.map((m) => {
              const only = unique.includes(m);
              return (
                <li
                  key={m}
                  className={`rounded-full border px-3 py-1 text-xs font-medium ${
                    only
                      ? product.key === "v2"
                        ? "border-[#1b1f4b] bg-[#1b1f4b] text-[#e9c46a]"
                        : "border-[#7a1f2b] bg-[#7a1f2b] text-[#f6efe2]"
                      : "border-[#d2d2d7] bg-[#f5f5f7] text-[#1d1d1f]"
                  }`}
                >
                  {m}
                </li>
              );
            })}
          </ul>
          <p className="mt-2 text-xs text-[#86868b]">
            Filled pills are only in this volume
          </p>
        </div>
        <ul className="mt-5 space-y-2 text-sm text-[#1d1d1f]">
          {product.bullets.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1d1d1f]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          <a
            href={product.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#1d1d1f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-black"
          >
            {product.cta}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function PromptsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#ffffff] text-[#1d1d1f]">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-6xl px-4 pb-10 pt-8 md:px-8 md:pb-14 md:pt-12">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#86868b]">
            Prompt PDFs
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#1d1d1f] sm:text-4xl md:text-5xl lg:text-6xl">
            Saree stock prompts you can paste and run
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#86868b] md:text-lg">
            Two prompt PDF volumes<br />
            One thousand coherent AI image prompts
            each<br />
            Paste into Midjourney, Flux, Gemini, and similar models so
            wardrobe, light, location, and camera stay in sync
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#86868b] md:text-base">
            Instant Gumroad download<br />
            Open the PDF<br />
            Copy a paragraph<br />
            Generate
          </p>
          <div className="mt-8">
            <BuyButtons />
          </div>
        </section>

        <section id="samples" className="border-t border-[#d2d2d7]">
          <div className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-14">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#86868b]">
              Prompt to output
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#1d1d1f] md:text-4xl">
              Real prompts from the PDFs<br />
              Real results
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#86868b] md:text-base">
              Each image below was generated from the exact paragraph shown,
              copied word for word from the PDF<br />
              Copy one and try it yourself
            </p>
            <div className="-mx-4 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
              {SAMPLES.map((s) => (
                <article
                  key={s.number}
                  className="flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-[#e8e8ed] bg-white shadow-[0_8px_28px_rgba(0,0,0,0.05)] md:w-auto"
                >
                  <div className="relative aspect-[3/2] w-full bg-[#f5f5f7]">
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 85vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#1d1d1f] px-3 py-1 text-[11px] font-semibold text-white">
                        {MODEL_BADGE}
                      </span>
                      <span className="rounded-full border border-[#d2d2d7] bg-[#f5f5f7] px-3 py-1 text-[11px] font-medium text-[#1d1d1f]">
                        Mood: {s.mood}
                      </span>
                    </div>
                    <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-[#86868b]">
                      {s.volume} · {s.number} · Aspect {s.aspect}
                    </p>
                    <p className="mt-2 line-clamp-5 text-sm leading-relaxed text-[#1d1d1f]">
                      {s.prompt}
                    </p>
                    <div className="mt-auto pt-4">
                      <CopyPromptButton text={s.prompt} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="products"
          className="border-t border-[#d2d2d7] bg-[#f5f5f7]"
        >
          <div className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-14">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              <ProductCard product={VOLUME_1} />
              <ProductCard product={VOLUME_2} />
            </div>
            <div className="mt-8 flex flex-col items-center gap-3 text-center">
              <p className="text-sm text-[#86868b] md:text-base">
                Want all 20 moods? Get both volumes in one checkout for $7.99
                instead of $9.98
              </p>
              <a href={BUNDLE.url} target="_blank" rel="noreferrer" className={btnPrimary}>
                {BUNDLE.button}
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-14">
          <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] md:text-4xl">
            Who these PDFs are for
          </h2>
          <ul className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4"> 
            {FOR_WHOM.map((line) => (
              <li
                key={line}
                className="rounded-2xl border border-[#e8e8ed] bg-white p-4 text-sm leading-relaxed text-[#86868b] shadow-[0_8px_28px_rgba(0,0,0,0.04)] md:p-5 md:text-[15px]"
              >
                {line}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-xl font-semibold tracking-tight text-[#1d1d1f] md:text-2xl">
            Why buy
          </h3>
          <ul className="mt-5 space-y-3">
            {WHY_BUY.map((line) => (
              <li
                key={line}
                className="flex gap-3 text-sm leading-relaxed text-[#86868b] md:text-base"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1d1d1f]" />
                <span className="whitespace-pre-line">{line}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-[#d2d2d7] bg-[#f5f5f7]">
          <div className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-12">
            <h2 className="text-xl font-semibold tracking-tight text-[#1d1d1f] md:text-2xl">
              Trust notes
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {TRUST.map((item) => (
                <article
                  key={item.title}
                  className="flex gap-3 rounded-xl border border-[#e8e8ed] bg-white p-4"
                >
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f5f5f7] text-[#1d1d1f]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      {TRUST_ICONS[item.icon]}
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold tracking-tight text-[#1d1d1f]">
                      {item.title}
                    </h3>
                    <p className="mt-1 whitespace-pre-line text-[13px] leading-relaxed text-[#86868b]">
                      {item.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-14">
          <div className="rounded-2xl border border-[#d2d2d7] bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)] md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] md:text-3xl">
              Ready to generate? Buy on Gumroad<br />
              Instant access after checkout
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#86868b] md:text-base">
              Open on Gumroad and download your PDF
            </p>
            <div className="mt-7">
              <BuyButtons />
            </div>
            <p className="mt-6 text-sm text-[#86868b]">
              Prefer ready made images instead?{" "}
              <a
                href={GUMROAD_HOME}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#0071e3] transition hover:opacity-80"
              >
                Browse the EthnicMuseWorld stock library on Gumroad
              </a>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter note={"EthnicMuseWorld\nPrompt PDFs for saree stock photography"} />
    </div>
  );
}
