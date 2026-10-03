import type { Metadata } from "next";
import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Prompt PDFs | EthnicMuse Saree Stock AI Prompts",
  description:
    "Two PDF packs with 1,000 coherent saree stock AI image prompts each. Paste ready for Midjourney, Flux, and similar models. Instant Gumroad download.",
};

const GUMROAD_HOME = "https://ethnicmuse.gumroad.com";
const VOLUME_1 = {
  title: "Saree Stock Photography",
  price: "$9 USD",
  url: "https://ethnicmuse.gumroad.com/l/baemqv",
  badge: "Volume 1 · Prompts 1 to 1000",
  cover: "/prompts/saree-prompts-1000-cover.png",
  coverAlt: "Saree Stock Photography Volume 1 prompt PDF cover",
  blurb:
    "1,000 paste ready prompts for photorealistic saree stock. Each card is one full paragraph with a locked adult Indian woman look, blouse and saree wardrobe, mood, location, light, and camera that agree. 10 moods. Aspect ratios on each card. 508 page printable PDF.",
  bullets: [
    "1,000 numbered prompts",
    "10 mood categories",
    "Coherent scene kits (no broken mixes)",
    "Works with Midjourney, Flux, and similar tools",
    "Instant download on Gumroad",
  ],
  cta: "Buy Volume 1 on Gumroad →",
  button: "Get Volume 1 · $9",
};

const VOLUME_2 = {
  title: "Saree Stock Photography (Prompts 1000 to 1999)",
  price: "$9 USD",
  url: "https://ethnicmuse.gumroad.com/l/zkpqe",
  badge: "Volume 2 · Prompts 1000 to 1999",
  cover: "/prompts/saree-prompts-1000-1999-cover.png",
  coverAlt: "Saree Stock Photography Volume 2 prompt PDF cover",
  blurb:
    "Another 1,000 prompts that continue the library. Fresh scenes versus Volume 1, including atelier, coast, and night moods. Same coherent paragraph format. Same subject lock. Built for people who already sold through Volume 1 or want a second thousand without rewriting prompts from scratch.",
  bullets: [
    "1,000 numbered prompts (1000 to 1999)",
    "New scenes and moods vs Volume 1",
    "Same paste ready paragraph format",
    "508 page printable PDF",
    "Instant download on Gumroad",
  ],
  cta: "Buy Volume 2 on Gumroad →",
  button: "Get Volume 2 · $9",
};

const FOR_WHOM = [
  "Shopify ethnic wear sellers who need campaign frames without a full shoot.",
  "Lookbook makers who want bridal, heritage, lifestyle, and editorial saree scenes on demand.",
  "AI image creators who are tired of prompts that break wardrobe, light, or pose mid generation.",
  "Agencies and freelancers building Indian ethnic fashion ads, site banners, and content calendars.",
];

const WHY_BUY = [
  "You get coherent scene kits, not random prompt soup.",
  "Subject look stays stable across the set so campaigns feel like one library.",
  "Mood tags help you jump to bridal, catalog, lifestyle, festival, and more.",
  "PDF format means you browse, copy, and go. No app lock in.",
];

const TRUST = [
  {
    title: "Commercial use of the PDF",
    body: "You buy the prompt library for your own creative workflows. Paste prompts into your image tools. Follow each model provider’s terms for the images you generate.",
  },
  {
    title: "AI disclosure",
    body: "These are text prompts for AI image tools. They are not photographs of hired models. Outputs you create are AI generated unless you say otherwise in your own marketing.",
  },
  {
    title: "Not the image packs",
    body: "EthnicMuse also sells ready stock image bundles with a commercial license for those files. This page is for prompt PDFs only.",
  },
  {
    title: "Refunds",
    body: "If a download fails, message the seller through Gumroad. Gumroad may still refund under its own rules.",
  },
  {
    title: "Adult subject lock",
    body: "Every prompt specifies an adult Indian woman subject. Built for commercial fashion and stock use cases.",
  },
];

function ProductCard({
  product,
}: {
  product: typeof VOLUME_1;
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-[#e8e8ed] bg-white shadow-[0_8px_28px_rgba(0,0,0,0.05)]">
      <div className="relative aspect-square w-full bg-[#f5f5f7]">
        <Image
          src={product.cover}
          alt={product.coverAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#86868b]">
          {product.badge}
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#1d1d1f]">
          {product.title}
        </h2>
        <p className="mt-2 text-lg font-semibold text-[#1d1d1f]">
          {product.price}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[#86868b] md:text-[15px]">
          {product.blurb}
        </p>
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
        <section className="mx-auto max-w-6xl px-4 pb-10 pt-10 md:px-8 md:pb-14 md:pt-20">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#86868b]">
            Prompt PDFs
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#1d1d1f] sm:text-4xl md:text-5xl lg:text-6xl">
            Saree stock prompts you can paste and run.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#86868b] md:text-lg">
            Two PDF packs. One thousand coherent AI image prompts each. Built
            for Midjourney, Flux, and similar models so wardrobe, light,
            location, and camera stay in sync.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#86868b] md:text-base">
            Instant Gumroad download. Open the PDF. Copy a paragraph. Generate.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={VOLUME_1.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1d1d1f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              {VOLUME_1.button}
            </a>
            <a
              href={VOLUME_2.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#d2d2d7] bg-white px-6 py-3 text-sm font-medium text-[#1d1d1f] transition hover:bg-[#f5f5f7]"
            >
              {VOLUME_2.button}
            </a>
          </div>
        </section>

        <section
          id="products"
          className="border-t border-[#d2d2d7] bg-[#f5f5f7]"
        >
          <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              <ProductCard product={VOLUME_1} />
              <ProductCard product={VOLUME_2} />
            </div>
            <p className="mt-8 text-center text-sm text-[#86868b] md:text-base">
              Need two thousand prompts? Grab both volumes. $9 each.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] md:text-4xl">
            Who these packs are for
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {FOR_WHOM.map((line) => (
              <li
                key={line}
                className="rounded-2xl border border-[#e8e8ed] bg-white p-5 text-sm leading-relaxed text-[#86868b] shadow-[0_8px_28px_rgba(0,0,0,0.04)] md:p-6 md:text-[15px]"
              >
                {line}
              </li>
            ))}
          </ul>

          <h3 className="mt-12 text-xl font-semibold tracking-tight text-[#1d1d1f] md:text-2xl">
            Why buy
          </h3>
          <ul className="mt-5 space-y-3">
            {WHY_BUY.map((line) => (
              <li
                key={line}
                className="flex gap-3 text-sm leading-relaxed text-[#86868b] md:text-base"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1d1d1f]" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-[#d2d2d7] bg-[#f5f5f7]">
          <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
            <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] md:text-4xl">
              Trust notes
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              {TRUST.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#e8e8ed] bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.04)]"
                >
                  <h3 className="text-base font-semibold tracking-tight text-[#1d1d1f]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#86868b]">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
          <div className="rounded-2xl border border-[#d2d2d7] bg-white p-8 shadow-[0_12px_40px_rgba(0,0,0,0.06)] md:p-12">
            <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] md:text-3xl">
              Ready to generate? Buy on Gumroad. Instant access after checkout.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#86868b] md:text-base">
              Open on Gumroad and download your PDF.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={VOLUME_1.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1d1d1f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
              >
                {VOLUME_1.button}
              </a>
              <a
                href={VOLUME_2.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#d2d2d7] bg-white px-6 py-3 text-sm font-medium text-[#1d1d1f] transition hover:bg-[#f5f5f7]"
              >
                {VOLUME_2.button}
              </a>
            </div>
            <p className="mt-6 text-sm text-[#86868b]">
              Prefer ready made images instead?{" "}
              <a
                href={GUMROAD_HOME}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#0071e3] transition hover:opacity-80"
              >
                Browse the EthnicMuse stock library on Gumroad.
              </a>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter note="EthnicMuse World. Prompt PDFs for saree stock photography." />
    </div>
  );
}
