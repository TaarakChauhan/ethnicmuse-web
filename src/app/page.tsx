import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Photo from "@/components/Photo";
import BuyLink from "@/components/BuyLink";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Ethnic fashion photo packs & AI prompt PDFs", "Shop curated saree and ethnic lifestyle photo packs, or create your own images with prompt PDFs. Commercial image licenses and instant Gumroad delivery.", "/");
const LICENSE_CAN = [
  { title: "Run paid ads", body: "use in Meta (Instagram and Facebook), Google, and Pinterest campaigns with unlimited impressions" },
  { title: "Build your storefront", body: "Shopify collection banners, hero sliders, and lookbooks" },
  { title: "Edit and customize", body: "add typography, logos, color grading, background swaps, or mockups" },
  { title: "Client work", body: "agencies and freelancers may use a pack for one client brand per license" },
];

const LICENSE_CANNOT = [
  { title: "Resell as stock", body: "do not redistribute or resell the raw files on stock sites, Gumroad, or free download hubs" },
  { title: "Print on demand merch", body: "do not sell the standalone images printed on posters, shirts, or tote bags" },
  { title: "Trademarks", body: "do not register the images as a trademark or logo" },
  { title: "Training datasets", body: "do not use the files to train competing AI models or LoRAs" },
  { title: "Fake endorsements", body: "do not imply a real brand or person endorsed you or was hired" },
];


const previews = [
 ["01","Ivory saree against a soft studio backdrop"],
 ["02","Red silk saree with gold jewelry"],
 ["03","Soft blush saree in window light"],
 ["04","Navy and gold saree in a warm interior"],
 ["05","Gold saree against a dark background"],
 ["06","Black and gold saree portrait"],
];
export default function Home() {
 return <><SiteHeader/><main id="main-content">
 <section className="em-shell em-hero" id="top"><div className="em-hero-copy"><p className="em-eyebrow">The ethnic fashion image shop</p><h1>Beautiful imagery.<br/><em>Ready for your story.</em></h1><p className="em-lead">Saree portraits and lifestyle images for campaigns, collection banners, and content that feels considered.</p><div className="em-actions"><Link href="#packs" className="em-button">Shop photo packs <span aria-hidden="true">↗</span></Link><Link href="/prompts" className="em-text-link">Explore prompt PDFs →</Link></div><p className="em-small">Photo packs from $9.99 · Commercial license included</p><div className="em-hero-note"><span aria-hidden="true">✳</span><span>AI-generated. Human-curated.<br/>Download once. Create your way.</span></div></div>
 <div className="em-hero-art"><Photo src="/gallery/gallery-02.jpg" alt="Red silk saree and gold jewelry from the EthnicMuseWorld gallery" priority className="em-hero-main"/><Photo src="/gallery/gallery-03.jpg" alt="Blush saree in soft window light" className="em-hero-inset"/><span className="em-art-label">A new mood for your next campaign.</span></div></section>
 <div className="em-benefits"><div className="em-shell"><span>Instant digital delivery</span><span>Watermark-free photo downloads</span><span>Checkout on Gumroad</span></div></div>
 <section className="em-shell em-section" id="packs"><div className="em-section-heading"><div><p className="em-eyebrow">01 / Ready-made imagery</p><h2>Find your next <em>visual story.</em></h2></div><p>Choose a focused portrait collection or a larger lifestyle library. Every photo pack includes a commercial license.</p></div>
 <div className="em-product-grid">
 <article className="em-product"><div className="em-product-mosaic">{["04","05","06"].map((n,i)=><Photo key={n} src={`/gallery/gallery-${n}.jpg`} alt={["Navy and gold saree in a warm interior","Gold saree in dramatic studio light","Black saree with gold accents"][i]}/>)}</div><div className="em-product-body"><p className="em-eyebrow">The larger library · 864 images</p><div className="em-price-heading"><h3>Lifestyle & Ethnic<br/>Stock Bundle</h3><p>$14.99<span>USD</span></p></div><p>A broad collection of editorial and lifestyle stills for seasonal campaigns, lookbooks, and brand calendars.</p><ul className="em-checks"><li>864 editorial and lifestyle images</li><li>Commercial use for ads and brand content</li><li>Watermark-free digital files</li></ul><BuyLink product="lifestyle" placement="home_photo_card"/><p className="em-small">Digital image files. No prompts or physical products.</p></div></article>
 <article className="em-product"><Photo src="/portraits/cover.jpg" alt="Preview cover of the Saree Portrait Starter collection" className="em-product-cover"/><div className="em-product-body"><p className="em-eyebrow">The focused collection · 50 portraits</p><div className="em-price-heading"><h3>Saree Portrait<br/>Starter</h3><p>$9.99<span>USD</span></p></div><p>A compact collection of saree portraits for social content, campaign graphics, and your next creative brief.</p><ul className="em-checks"><li>50 high-resolution PNG portraits</li><li>Commercial license included</li><li>Instant download after checkout</li></ul><BuyLink product="portraits" placement="home_photo_card"/><Link href="/portraits" className="em-text-link">See pack details & previews →</Link></div></article>
 </div></section>
 <section className="em-gallery-section" id="gallery"><div className="em-shell em-section"><div className="em-section-heading"><div><p className="em-eyebrow">A look inside our world</p><h2>Rich details. <em>Endless possibilities.</em></h2></div><p>Explore the visual style of our photo library. These are AI-generated previews; purchased photo files are delivered without watermarks.</p></div><div className="em-gallery">{previews.map(([n,alt])=><Photo key={n} src={`/gallery/gallery-${n}.jpg`} alt={alt}/>)}</div><div className="em-gallery-foot"><p>Made for collection banners, social posts, emails, and editorial layouts.</p><Link href="#packs" className="em-text-link">Choose your photo pack →</Link></div></div></section>
 <section className="em-shell em-section"><div className="em-prompt-feature"><Photo src="/prompts/samples/v1-0002-heritage.webp" alt="AI image generated from a heritage saree prompt"/><div><p className="em-eyebrow">02 / Make it your own</p><h2>The words behind<br/><em>your next image.</em></h2><p>Prefer to create your own? Our prompt PDFs give you complete scenes to paste into your AI image tool—from wardrobe and light to location and camera.</p><p className="em-prompt-price">1,000 prompts from $4.99<br/><strong>Both volumes · 2,000 prompts · $7.99</strong></p><Link className="em-button" href="/prompts">Shop prompt PDFs <span aria-hidden="true">↗</span></Link><p className="em-small">Text prompts, not ready-made photos. An AI image tool is required.</p></div></div></section>
 <section className="em-shell em-how"><div><p className="em-eyebrow">From inspiration to creation</p><h2>Yours in <em>three steps.</em></h2></div>{[["01","Choose your format","Buy ready-made photo files or prompt PDFs to generate your own."],["02","Checkout on Gumroad","Each buy button takes you to that exact product listing."],["03","Download & create","Get your digital files after checkout and start your next project."]].map(([n,title,body])=><div key={n}><span className="em-step">{n}</span><h3>{title}</h3><p>{body}</p></div>)}</section>
 <section className="em-shell em-section" id="license"><div className="em-license"><div><p className="em-eyebrow">Know what you’re buying</p><h2>Clear rights.<br/><em>More room to create.</em></h2><p>Photo packs include a perpetual commercial license. Use them in finished brand content; one client brand per license.</p><p className="em-small">These images are AI-generated, not photographs of hired models. Use real product photos to show the exact garments you sell.</p><Link href="/faq" className="em-text-link">Read the full FAQs →</Link></div><div>{[["What you can do",LICENSE_CAN],["What you cannot do",LICENSE_CANNOT]].map(([title,items])=><details key={title as string} className="em-disclosure"><summary>{title as string}</summary><ul>{(items as {title:string;body:string}[]).map(item=><li key={item.title}><strong>{item.title}</strong> — {item.body}</li>)}</ul></details>)}<details className="em-disclosure"><summary>Are prompt PDFs the same as photo packs?</summary><p>No. Photo packs contain image files. Prompt PDFs contain text to use in your own AI tools. Your generated images are subject to your model provider’s terms.</p></details><details className="em-disclosure"><summary>How do downloads and support work?</summary><p>Gumroad provides the download after checkout. If you need help, contact us through Gumroad or email ethnicmusestudio@gmail.com. See our FAQ and the listing for refund details.</p></details></div></div></section>
 </main><SiteFooter/></>;
}
