import Link from "next/link";
import MobileNav from "./MobileNav";
const links = [{href:"/#packs",label:"Photo packs"},{href:"/prompts",label:"Prompt PDFs"},{href:"/#gallery",label:"Gallery"},{href:"/faq",label:"FAQs"}];
export default function SiteHeader() {
 return <header className="em-header"><a className="em-skip" href="#main-content">Skip to content</a><div className="em-shell em-header-inner">
 <Link href="/" className="em-wordmark" aria-label="EthnicMuseWorld home">EthnicMuse<span>World</span><i aria-hidden="true">✳</i></Link>
 <nav className="em-desktop-nav" aria-label="Main navigation">{links.map(l=><Link key={l.href} href={l.href}>{l.label}</Link>)}</nav>
 <Link className="em-header-cta" href="/#packs">Shop photos <span aria-hidden="true">↗</span></Link>
 <MobileNav links={links}/>
 </div></header>;
}
