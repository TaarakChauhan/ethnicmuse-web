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
        <section className="mx-auto max-w-6xl px-4 pb-8 pt-8 md:px-8 md:pb-10 md:pt-12">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#86868b]">
            FAQ
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
            {FAQ_META.h1}
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#86868b] md:text-lg">
            {FAQ_META.intro}
          </p>
        </section>

        <section className="border-t border-[#d2d2d7] bg-[#f5f5f7]">
          <div className="mx-auto max-w-3xl space-y-10 px-4 py-10 md:px-8 md:py-12">
            {FAQ_SECTIONS.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-2">
                  {section.items.map((item) => (
                    <details
                      key={item.question}
                      className="group rounded-2xl border border-[#e8e8ed] bg-white px-5 py-4 shadow-[0_8px_28px_rgba(0,0,0,0.04)]"
                    >
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold tracking-tight text-[#1d1d1f] md:text-lg">
                        <h3>{item.question}</h3>
                        <span aria-hidden="true" className="mt-0.5 text-xl leading-none text-[#86868b] transition group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-3 whitespace-pre-line text-base leading-relaxed text-[#424245]">
                        {item.answer}
                      </p>
                    </details>
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
