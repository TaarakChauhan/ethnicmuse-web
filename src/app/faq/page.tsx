import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import {
  FAQ_CLOSING,
  FAQ_META,
  FAQ_SECTIONS,
  faqPageJsonLd,
} from "@/content/faq";

export const metadata: Metadata = {
  title: FAQ_META.title,
  description: FAQ_META.description,
};

export default function FaqPage() {
  const jsonLd = faqPageJsonLd();

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#ffffff] text-[#1d1d1f]">
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-6xl px-4 pb-10 pt-10 md:px-8 md:pb-14 md:pt-20">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#86868b]">
            FAQ
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
            {FAQ_META.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#86868b] md:text-lg">
            {FAQ_META.intro}
          </p>
        </section>

        <section className="border-t border-[#d2d2d7] bg-[#f5f5f7]">
          <div className="mx-auto max-w-3xl space-y-14 px-4 py-12 md:px-8 md:py-16">
            {FAQ_SECTIONS.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-6 space-y-6">
                  {section.items.map((item) => (
                    <div
                      key={item.question}
                      className="rounded-2xl border border-[#e8e8ed] bg-white px-6 py-6 shadow-[0_8px_28px_rgba(0,0,0,0.04)]"
                    >
                      <h3 className="text-lg font-semibold tracking-tight text-[#1d1d1f]">
                        {item.question}
                      </h3>
                      <p className="mt-3 whitespace-pre-line text-base leading-relaxed text-[#424245]">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-[#e8e8ed] bg-white px-6 py-6 shadow-[0_8px_28px_rgba(0,0,0,0.04)]">
              <h2 className="text-2xl font-semibold tracking-tight">
                {FAQ_CLOSING.heading}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#424245]">
                Message us through Gumroad or email{" "}
                <a
                  href="mailto:ethnicmusestudio@gmail.com"
                  className="underline hover:text-[#1d1d1f]"
                >
                  ethnicmusestudio@gmail.com
                </a>
                <br />
                Browse every pack at{" "}
                <a
                  href="https://ethnicmuse.gumroad.com"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-[#1d1d1f]"
                >
                  ethnicmuse.gumroad.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
