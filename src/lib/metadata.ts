import type { Metadata } from "next";
export const SITE_URL = "https://ethnicmuseworld.vercel.app";
export function pageMetadata(title: string, description: string, path: string): Metadata {
 return { title, description, alternates:{canonical:path}, openGraph:{title,description,url:path,siteName:"EthnicMuseWorld",type:"website",images:[{url:"/opengraph-image",width:1200,height:630,alt:"EthnicMuseWorld photo packs and prompt PDFs"}]},twitter:{card:"summary_large_image",title,description,images:["/opengraph-image"]} };
}
