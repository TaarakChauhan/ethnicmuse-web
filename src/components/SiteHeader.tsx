"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const GUMROAD_HERO =
  "https://ethnicmuse.gumroad.com/l/EthnicMuseWorldLifestyleEthnicStockBundle";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const section = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  const NAV: NavItem[] = [
    { label: "Gallery", href: section("gallery") },
    { label: "Packs", href: section("packs") },
    { label: "Prompts", href: "/prompts" },
    { label: "License", href: section("license") },
    { label: "Shop", href: GUMROAD_HERO, external: true },
  ];

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-[#d2d2d7] bg-[#ffffff]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8 md:py-4">
        <a
          href={isHome ? "#top" : "/"}
          className="text-lg font-semibold tracking-tight text-[#1d1d1f] md:text-xl"
        >
          EthnicMuse
        </a>

        <nav className="hidden items-center gap-x-5 text-[14px] text-[#86868b] lg:flex xl:gap-x-8 xl:text-[15px]">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              className={`inline-flex min-h-11 items-center transition hover:text-[#1d1d1f] ${
                pathname === item.href ? "text-[#1d1d1f]" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[#d2d2d7] bg-white text-[#1d1d1f] lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden
          >
            {menuOpen ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#d2d2d7] bg-[#ffffff]/98 px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
                className="inline-flex min-h-11 items-center rounded-xl px-3 text-base text-[#1d1d1f] transition hover:bg-[#f5f5f7]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
