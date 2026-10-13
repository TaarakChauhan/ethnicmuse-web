import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { POSTS } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog | EthnicMuseWorld",
  description:
    "Practical, honest guides for small saree and ethnic wear stores: product photos, Diwali prep, image licensing, saree drapes and better product pages.",
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#ffffff] text-[#1d1d1f]">
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-6xl px-4 pb-10 pt-10 md:px-8 md:pb-14 md:pt-20">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#86868b]">
            Blog
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
            Notes for ethnic wear store owners
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#86868b] md:text-lg">
            Practical guides for small saree and ethnic wear shops on photos,
            festive seasons, honest use of AI images and product pages that
            help shoppers say yes.
          </p>
        </section>
        <section className="border-t border-[#d2d2d7] bg-[#f5f5f7]">
          <div className="mx-auto grid max-w-6xl gap-5 px-4 py-12 md:grid-cols-2 md:px-8 md:py-16">
            {POSTS.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-2xl border border-[#e8e8ed] bg-white px-6 py-6 shadow-[0_8px_28px_rgba(0,0,0,0.04)] transition hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)]"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#86868b]">
                  {post.readMinutes} min read
                </p>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-[#1d1d1f]">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#86868b]">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-sm font-semibold text-[#1d1d1f]">
                  Read the post
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
