import Link from "next/link";
export default function SiteFooter({note, className=""}:{note?:string;className?:string}) {
 return <footer className={`em-footer ${className}`}><div className="em-shell"><div className="em-footer-grid">
 <div><Link href="/" className="em-wordmark">EthnicMuse<span>World</span></Link><p>{note || "A little culture. A lot of possibility."}</p><p className="em-small">AI-generated, human-curated images and prompt PDFs for your next creative project.</p></div>
 <nav aria-label="Shop"><p className="em-eyebrow">Explore the shop</p><Link href="/#packs">Photo packs</Link><Link href="/portraits">Saree Portrait Starter</Link><Link href="/prompts">Prompt PDFs</Link></nav>
 <nav aria-label="Help"><p className="em-eyebrow">Good to know</p><Link href="/faq">FAQs & download help</Link><Link href="/#license">Commercial license</Link><Link href="/blog">Journal</Link><a href="mailto:ethnicmusestudio@gmail.com">Contact us</a></nav>
 </div><div className="em-footer-bottom"><span>© {new Date().getFullYear()} EthnicMuseWorld</span><span>Digital products · USD pricing · Checkout on Gumroad</span></div></div></footer>;
}
