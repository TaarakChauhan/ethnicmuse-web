import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CopyPromptButton from "@/components/CopyPromptButton";
import BuyLink from "@/components/BuyLink";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("AI prompt PDFs for saree & ethnic fashion imagery", "Buy 1,000 saree stock prompts for $4.99 or both volumes for $7.99. Preview real samples before purchasing your digital PDF on Gumroad.", "/prompts");
type Volume = { key: "v1" | "v2"; title:string;price:string;url:string;badge:string;blurb:string;bullets:string[];moods:string[];cta:string;button:string;coverLabel:string;coverRange:string;coverImages:string[] };
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


export default function PromptsPage() {
 return <><SiteHeader/><main id="main-content"><section className="em-shell em-section em-prompt-hero"><div><p className="em-eyebrow">The prompt PDF shop</p><h1>Your vision.<br/><em>A better starting point.</em></h1><p className="em-lead">Complete saree and ethnic fashion scenes, ready to paste into your AI image tool. Choose one volume or get the full library.</p><div className="em-actions"><BuyLink product="promptBundle" placement="prompts_hero">Get both volumes · $7.99</BuyLink><Link href="#samples" className="em-text-link">Try a sample first →</Link></div><p className="em-small">2 PDFs · 2,000 prompts · Instant Gumroad download</p><p className="em-format-note">You’re buying text prompts, not photo files. An AI image tool is required; results and usage terms depend on your provider.</p></div><div className="em-book-stack">{[VOLUME_1,VOLUME_2].map(v=><div key={v.key} className={`em-book em-book-${v.key}`}><p>ETHNICMUSEWORLD / {v.coverLabel}</p><h2>Saree Stock<br/><em>Photography</em></h2><div className="em-book-image"><Image src={v.coverImages[0]} alt={`Sample imagery for prompt ${v.coverLabel}`} fill sizes="(max-width: 700px) 45vw, 260px" className="object-cover"/></div><p>1,000 AI IMAGE PROMPTS</p></div>)}</div></section>
 <section className="em-shell em-section" id="products"><div className="em-section-heading"><div><p className="em-eyebrow">Build your creative library</p><h2>Two volumes. <em>Your choice.</em></h2></div><p>Each volume contains 1,000 prompts in 10 mood categories. The volumes share some categories and offer different scenes.</p></div><div className="em-product-grid">{[VOLUME_1,VOLUME_2].map(v=><article key={v.key} className="em-product"><div className="em-prompt-card-images">{v.coverImages.slice(0,3).map((src,i)=><div key={src}><Image src={src} alt={`${v.coverLabel} example ${i+1}`} fill sizes="(max-width: 700px) 30vw, 190px" className="object-cover"/></div>)}</div><div className="em-product-body"><p className="em-eyebrow">{v.coverRange}</p><div className="em-price-heading"><h3>{v.coverLabel}</h3><p>$4.99<span>USD</span></p></div><p>{v.key==="v1"?"Start with bridal, heritage, editorial, lifestyle, and more.":"Extend your library with fresh scenes, including atelier, coast, and night."}</p><ul className="em-checks"><li>1,000 complete prompts in a 508-page PDF</li><li>Wardrobe, location, lighting & camera directions</li><li>Copy into your preferred AI image tool</li></ul><div className="em-tags">{v.moods.map(m=><span key={m}>{m}</span>)}</div><BuyLink product={v.key==="v1"?"volume1":"volume2"} placement="prompts_product_card">Buy {v.coverLabel} · $4.99</BuyLink></div></article>)}</div><div className="em-bundle-strip"><div><p className="em-eyebrow">The complete prompt library</p><h3>Get both volumes for $7.99</h3><p>2,000 prompts across 13 distinct mood categories. Save $1.99 compared with buying separately.</p></div><BuyLink product="promptBundle" placement="prompts_bundle">Buy both PDFs · $7.99</BuyLink></div></section>
 <section className="em-gallery-section" id="samples"><div className="em-shell em-section"><div className="em-section-heading"><div><p className="em-eyebrow">Try before you buy</p><h2>From a paragraph<br/><em>to a possibility.</em></h2></div><p>Real sample prompts from the PDFs, with example images generated using Gemini. Your results may vary.</p></div><div className="em-samples">{SAMPLES.map(s=><article key={s.number} className="em-product"><div className="em-sample-image"><Image src={s.image} alt={s.alt} fill sizes="(max-width: 800px) 90vw, 33vw" className="object-cover"/></div><div className="em-product-body"><p className="em-eyebrow">{s.volume} · {s.number}</p><h3>{s.mood}</h3><p className="em-small">Aspect ratio {s.aspect} · Generated with Gemini</p><details className="em-disclosure"><summary>Read the full prompt</summary><p>{s.prompt}</p></details><CopyPromptButton text={s.prompt}/></div></article>)}</div></div></section>
 <section className="em-shell em-section"><div className="em-license"><div><p className="em-eyebrow">Before you create</p><h2>A few things<br/><em>to know.</em></h2><Link href="/#packs" className="em-text-link">Prefer ready-made photos? Shop image packs →</Link></div><div><details className="em-disclosure" open><summary>What exactly will I receive?</summary><p>One PDF per volume. These are text prompts for AI tools, not image packs, software, or a subscription. Gumroad provides your download after checkout.</p></details><details className="em-disclosure"><summary>Which image tools can I use?</summary><p>Copy a prompt into Midjourney, Flux, Gemini, ChatGPT, or a similar image tool. Adapt the aspect ratio settings to your tool. Tool access and generation costs are separate.</p></details><details className="em-disclosure"><summary>Can I use the generated images commercially?</summary><p>Use the prompts in your own creative workflow and follow your model provider’s terms for generated images. The photo-pack commercial license does not apply to these PDFs or your generated outputs.</p></details><details className="em-disclosure"><summary>Need help with a download?</summary><p>Message us through Gumroad or email ethnicmusestudio@gmail.com. See the product listing and FAQ for refund details.</p></details></div></div></section></main><SiteFooter/></>;
}
