import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
const geistSans = Geist({variable:"--font-geist-sans",subsets:["latin"]});
export const metadata: Metadata = { metadataBase:new URL("https://ethnicmuseworld.vercel.app"), title:{default:"EthnicMuseWorld | Photo packs & prompt PDFs",template:"%s | EthnicMuseWorld"}, applicationName:"EthnicMuseWorld" };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${geistSans.variable} antialiased`}>{children}<SpeedInsights/></body></html>;}
