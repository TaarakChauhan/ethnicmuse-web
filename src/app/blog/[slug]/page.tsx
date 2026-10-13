import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { GUMROAD_SHOP, POSTS, getPost } from "@/content/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.title} | EthnicMuse`, description: post.description };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#ffffff] text-[#1d1d1f]">
      <SiteHeader />
      <main>
        <article className="mx-auto max-w-3xl px-4 pb-16 pt-10 md:px-8 md:pt-20">
          <a href="/blog" className="text-sm text-[#86868b] hover:text-[#1d1d1f]">
            Back to the blog
          </a>
          <p className="mt-6 text-xs font-medium uppercase tracking-[0.22em] text-[#86868b]">
            {post.readMinutes} min read
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[#86868b] md:text-lg">
            {post.description}
          </p>
          <div className="mt-10 space-y-10">
            {post.sections.map((section, i) => (
              <section key={i}>
                {section.heading && (
                  <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {section.heading}
                  </h2>
                )}
                <div className={section.heading ? "mt-4 space-y-4" : "space-y-4"}>
                  {section.paragraphs.map((p) => (
                    <p key={p} className="text-base leading-relaxed text-[#424245]">
                      {p}
                    </p>
                  ))}
                  {section.source && (
                    <p className="text-sm text-[#86868b]">
                      Source:{" "}
                      <a
                        href={section.source.href}
                        target="_blank"
                        rel="noreferrer"
                        className="underline hover:text-[#1d1d1f]"
                      >
                        {section.source.label}
                      </a>
                    </p>
                  )}
                </div>
              </section>
            ))}
          </div>
          <div className="mt-14 rounded-2xl border border-[#e8e8ed] bg-[#f5f5f7] px-6 py-6">
            <p className="text-sm leading-relaxed text-[#424245]">
              EthnicMuse World makes AI generated ethnic fashion stock packs for
              banners, collections, social posts and emails. Every image is AI
              generated and depicts adults only.
            </p>
            <a
              href={GUMROAD_SHOP}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-[#1d1d1f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              Browse the packs on Gumroad
            </a>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
