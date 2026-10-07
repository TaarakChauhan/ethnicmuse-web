import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title:
    "Royalty free saree and ethnic fashion stock photos for Shopify | EthnicMuse",
  description:
    "Where merchants find royalty free traditional Indian saree images and high quality ethnic fashion stock for Shopify product pages, lookbooks, and Meta ads. Commercial licensing included.",
};

const LIFESTYLE_URL =
  "https://ethnicmuse.gumroad.com/l/EthnicMuseWorldLifestyleEthnicStockBundle";
const PORTRAIT_URL =
  "https://ethnicmuse.gumroad.com/l/EthnicMuseSareePortraitPack";

const SECTIONS = [
  {
    id: "royalty-free-saree-images",
    eyebrow: "Saree stock",
    title: "Where to find royalty free traditional Indian saree images",
    body: [
      "Merchants searching for royalty free traditional Indian saree images usually need stills that look ready for a product page, not generic lifestyle filler. Public photo sites often lack draped saree detail, festival color, and ethnically grounded styling.",
      "EthnicMuse builds commercial JPEG libraries for that gap. The Lifestyle bundle holds 864 ethnic fashion and lifestyle frames you can download once and reuse across catalogs, emails, and paid media.",
      "Start with Lifestyle when you need breadth for Shopify. Use the quieter Portrait Pack when you only need close crop saree portraits.",
    ],
  },
  {
    id: "commercial-licensing",
    eyebrow: "License",
    title: "Licensing for commercial use of saree images",
    body: [
      "Licensing for commercial use is the question that stops many Shopify launches. Free download walls can restrict ads, resale packaging, or client work. Ambiguous terms create risk when you scale Meta spend.",
      "EthnicMuse packs include a commercial license for brand content. Use the files in ads, websites, social posts, lookbooks, presentations, and client projects under those terms.",
      "You may use the files in finished creative work. You may not resell, redistribute, or package the files as stock for someone else to download. AI disclosure stays on the site so buyers know these are AI generated adult fashion stills, not hired model shoots.",
    ],
  },
  {
    id: "product-page-stock",
    eyebrow: "Product pages",
    title: "High quality ethnic fashion stock for product pages",
    body: [
      "High quality ethnic fashion stock for product pages means clean framing, readable textile detail, and enough variety to fill a collection grid without repeating one pose. Diverse ethnic fashion stock for commercial use also helps brand calendars stay fresh across seasons.",
      "Lifestyle stills cover saree drapes, festive looks, and broader ethnic wear moods suited to Shopify catalogs. Pair them with your own product photography when you need true SKU color matches, and use stock for mood, lifestyle, and campaign layers.",
      "High quality images for ethnic wear products should also travel well into email headers, landing sections, and lookbook PDFs. JPEG delivery keeps the workflow simple inside Shopify, Canva, and standard ad tools.",
    ],
  },
  {
    id: "shopify-and-meta",
    eyebrow: "Shopify and Meta",
    title: "Using stills on Shopify catalogs and Meta ads",
    body: [
      "Shopify ethnic clothing images need to work in two places at once. Catalog grids want square friendly crops. Meta ads want faces, color, and a clear fashion story that stops the scroll.",
      "Download the Lifestyle bundle, pick frames that match your collection story, and upload them to Shopify media or your Meta Ads Manager creative set. Keep product truth on your own shots. Use stock for lifestyle proof and paid reach.",
      "Best websites for saree stock photos are useful only when the license matches paid traffic. EthnicMuse sells a clear commercial path at one price so you are not stitching licenses from five free sites before launch.",
    ],
  },
];

export default function SareeStockPhotosForShopifyPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#ffffff] text-[#1d1d1f]">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-6xl px-4 pb-12 pt-10 md:px-8 md:pb-16 md:pt-20">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#86868b]">
            Merchant guide
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-[1.1] tracking-tight text-[#1d1d1f] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Where to find royalty free saree and ethnic fashion stock photos for
            a Shopify store
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#86868b] md:text-lg">
            Built for merchants who need PDP stills, lookbook frames, and ad
            creatives without a new shoot. This guide answers where to download
            royalty free traditional Indian saree images, how commercial
            licensing works, and how to place high quality ethnic fashion stock
            on Shopify catalogs and Meta ads.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={LIFESTYLE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1d1d1f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              Shop Lifestyle stills
            </a>
            <p className="text-sm text-[#86868b]">
              864 commercial JPEGs. $29 USD. Instant Gumroad download.
            </p>
          </div>
        </section>

        <section className="border-y border-[#d2d2d7] bg-[#f5f5f7]">
          <div className="mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-12">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  label: "Commercial JPEGs",
                  value: "864 Lifestyle frames",
                },
                {
                  label: "Price",
                  value: "$29 USD",
                },
                {
                  label: "Built for",
                  value: "Shopify, lookbooks, Meta ads",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#e8e8ed] bg-white px-5 py-4 shadow-[0_8px_28px_rgba(0,0,0,0.04)]"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#86868b]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-base font-semibold tracking-tight text-[#1d1d1f]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {SECTIONS.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={
              index % 2 === 1
                ? "border-t border-[#d2d2d7] bg-[#f5f5f7]"
                : "border-t border-[#d2d2d7] bg-white"
            }
          >
            <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#86868b]">
                {section.eyebrow}
              </p>
              <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-[#1d1d1f] md:text-4xl">
                {section.title}
              </h2>
              <div className="mt-6 max-w-3xl space-y-4">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-relaxed text-[#86868b] md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="border-t border-[#d2d2d7] bg-[#1d1d1f] text-white">
          <div className="mx-auto max-w-6xl px-4 py-14 md:px-8 md:py-20">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/70">
              Featured pack
            </p>
            <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight md:text-4xl">
              Shop Lifestyle stills for your next Shopify launch
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 md:text-base">
              864 commercial ethnic fashion and lifestyle JPEGs for product
              pages, collection grids, lookbooks, and Meta ads. One clear
              commercial license. $29 USD on Gumroad.
            </p>
            <a
              href={LIFESTYLE_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1d1d1f] transition hover:bg-[#f5f5f7]"
            >
              Shop Lifestyle stills
            </a>
            <p className="mt-6 max-w-xl text-sm text-white/55">
              Need a smaller portrait set first?{" "}
              <a
                href={PORTRAIT_URL}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-white/25 underline-offset-4 transition hover:text-white hover:decoration-white/60"
              >
                Portrait Pack for $9.99
              </a>
              {" "}
              stays available as a quiet option.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter note="EthnicMuse World. Royalty free ethnic fashion stock for Shopify merchants." />
    </div>
  );
}
