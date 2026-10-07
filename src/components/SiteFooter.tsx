type SiteFooterProps = {
  note?: string;
  className?: string;
};

export default function SiteFooter({
  note = "EthnicMuse World. Commercial ethnic fashion stock.",
  className = "",
}: SiteFooterProps) {
  return (
    <footer
      className={`border-t border-[#d2d2d7] py-8 text-center text-sm text-[#86868b] ${className}`}
    >
      <p>{note}</p>
      <nav className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <a href="/prompts" className="transition hover:text-[#1d1d1f]">
          Prompts
        </a>
        <a href="/portraits" className="transition hover:text-[#1d1d1f]">
          Portraits
        </a>
        <a
          href="/saree-stock-photos-for-shopify"
          className="transition hover:text-[#1d1d1f]"
        >
          Saree stock guide
        </a>
      </nav>
    </footer>
  );
}
