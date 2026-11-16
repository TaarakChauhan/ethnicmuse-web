import type { MetadataRoute } from "next";
import { POSTS } from "@/content/blog";
import { SITE_URL } from "@/lib/metadata";
export default function sitemap(): MetadataRoute.Sitemap { return ["/","/portraits","/prompts","/faq","/blog","/saree-stock-photos-for-shopify",...POSTS.map(p=>"/blog/"+p.slug)].map(path=>({url:SITE_URL+path})); }
