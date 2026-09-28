import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "EthnicMuse Saree Portrait Pack | 272 Commercial Stock Portraits",
  description:
    "EthnicMuse Saree Portrait Pack. 272 commercial JPEG saree stock portraits of adult Indian women for campaigns, lookbooks, websites, and social content.",
};

const GUMROAD_URL =
  "https://ethnicmuse.gumroad.com/l/EthnicMuseSareePortraitPack";

const PREVIEWS = [
  { src: "/portraits/preview-01.jpg", alt: "Saree portrait in warm studio light" },
  { src: "/portraits/preview-02.jpg", alt: "Indian woman in an elegant saree" },
  { src: "/portraits/preview-03.jpg", alt: "Festive saree fashion portrait" },
  { src: "/portraits/preview-04.jpg", alt: "Modern ethnic fashion portrait" },
  { src: "/portraits/preview-05.jpg", alt: "Silk saree portrait with jewelry" },
  { src: "/portraits/preview-06.jpg", alt: "Soft light saree beauty portrait" },
];

const FOR_WHOM = [
  "Ethnic wear shops building product pages and campaign content.",
  "Lookbook makers who need polished saree portraits without a new shoot.",
  "Agencies and freelancers creating Indian fashion ads and content calendars.",
  "Creators who want a ready library for websites, social posts, and mood boards.",
];

const WHY_BUY = [
  "272 JPEG portraits give you a broad visual library at one simple price.",
  "Saree focused portraits make it easier to keep your campaign visually aligned.",
  "Commercial licensing is included for brand content and client work.",
  "Download the files from Gumroad and use them in the tools you already know.",
];

const TRUST = [
  {
    title: "AI disclosure",
    body: "These are AI generated stock portraits of adult Indian women. They are not photographs of hired models or real people photographed by EthnicMuse.",
  },
  {
    title: "Commercial license",
    body: "Use the portraits in ads, websites, social content, lookbooks, presentations, and client projects under the included commercial license.",
  },
  {
    title: "Not a stock resale pack",
    body: "You may use the files in finished creative work. You may not resell, redistribute, or package the files as stock for someone else to download.",
  },
  {
    title: "What you receive",
    body: "One digital pack with 272 commercial JPEG saree stock portraits. Gumroad provides the download after checkout.",
  },
];

export default function PortraitsPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#ffffff] text-[#1d1d1f]">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-6xl px-4 pb-12 pt-10 md:px-8 md:pb-20 md:pt-20">
          <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#86868b]">
                New portrait collection
              </p>
              <h1 className="mt-4 max-w-2xl text-3xl font-semibold leading-[1.1] tracking-tight text-[#1d1d1f] sm:text-4xl md:text-5xl lg:text-6xl">
                Saree portraits for your next beautiful campaign.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#86868b] md:text-lg">
                EthnicMuse Saree Portrait Pack gives you 272 commercial JPEG
                portraits of adult Indian women in saree looks. A focused,
                ready to use library for brands, creators, and client work.
              </p>
              <div className="mt-7 flex flex-wrap gap-2 text-sm text-[#1d1d1f]">
                <span className="rounded-full bg-[#f5f5f7] px-4 py-2">272 portraits</span>
                <span className="rounded-full bg-[#f5f5f7] px-4 py-2">JPEG files</span>
                <span className="rounded-full bg-[#f5f5f7] px-4 py-2">Commercial license</span>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={GUMROAD_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1d1d1f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
                >
                  Get the pack for $9.99
                </a>
                <a
                  href="#previews"
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#d2d2d7] bg-white px-6 py-3 text-sm font-medium text-[#1d1d1f] transition hover:bg-[#f5f5f7]"
                >
                  See previews
                </a>
              </div>
              <p className="mt-4 text-sm text-[#86868b]">
                Instant digital download through Gumroad.
              </p>
            </div>

            <div
              className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-[#e8e8ed] bg-[#f5f5f7] shadow-[0_16px_50px_rgba(0,0,0,0.1)]"
            >
              <Image
                src="/portraits/cover.jpg"
                alt="EthnicMuse Saree Portrait Pack cover"
                fill
                className="object-cover select-none"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1d1d1f]/25 via-transparent to-transparent" />
              <span className="pointer-events-none absolute bottom-4 right-4 rounded-full border border-white/30 bg-[#1d1d1f]/45 px-3 py-1.5 text-xs font-medium tracking-[0.14em] text-white backdrop-blur-sm">
                ETHNICMUSE
              </span>
            </div>
          </div>
        </section>

        <section id="previews" className="border-y border-[#d2d2d7] bg-[#f5f5f7]">
          <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
            <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#86868b]">
                  A closer look
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#1d1d1f] md:text-4xl">
                  Six previews from the collection.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-[#86868b]">
                The full pack includes 272 portraits. These previews show the
                range of saree styling and visual moods inside.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
              {PREVIEWS.map((preview, index) => (
                <figure
                  key={preview.src}
                  className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-[#e8e8ed] bg-white shadow-[0_8px_28px_rgba(0,0,0,0.06)]"
                    >
                  <Image
                    src={preview.src}
                    alt={preview.alt}
                    fill
                    className="object-cover select-none"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    priority={index < 3}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1d1d1f]/20 to-transparent" />
                  <span className="pointer-events-none absolute bottom-3 right-3 rounded-full border border-white/30 bg-[#1d1d1f]/40 px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] text-white backdrop-blur-sm">
                    ETHNICMUSE
                  </span>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] md:text-4xl">
                Who it is for
              </h2>
              <ul className="mt-6 space-y-4">
                {FOR_WHOM.map((line) => (
                  <li key={line} className="flex gap-3 text-sm leading-relaxed text-[#86868b] md:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1d1d1f]" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f] md:text-4xl">
                Why buy
              </h2>
              <ul className="mt-6 space-y-4">
                {WHY_BUY.map((line) => (
                  <li key={line} className="flex gap-3 text-sm leading-relaxed text-[#86868b] md:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1d1d1f]" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-[#d2d2d7] bg-[#f5f5f7]">
          <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#86868b]">
              Clear terms
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#1d1d1f] md:text-4xl">
              Trust notes before you buy.
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
          <div className="rounded-3xl border border-[#d2d2d7] bg-white p-8 shadow-[0_12px_40px_rgba(0,0,0,0.06)] md:p-12">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#86868b]">
              Ready when you are
            </p>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-[#1d1d1f] md:text-4xl">
              Bring more saree beauty to your next piece of content.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#86868b] md:text-base">
              Get 272 commercial JPEG portraits for $9.99. Download the pack
              on Gumroad and start creating.
            </p>
            <a
              href={GUMROAD_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex min-h-11 items-center justify-center rounded-full bg-[#1d1d1f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              Buy the Saree Portrait Pack
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d2d2d7] py-8 text-center text-sm text-[#86868b]">
        EthnicMuse World. Commercial ethnic fashion stock.
      </footer>
    </div>
  );
}
