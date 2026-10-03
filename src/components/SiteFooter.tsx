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
      <nav className="mt-3 flex items-center justify-center gap-6">
        <a href="/prompts" className="transition hover:text-[#1d1d1f]">
          Prompts
        </a>
        <a href="/portraits" className="transition hover:text-[#1d1d1f]">
          Portraits
        </a>
      </nav>
    </footer>
  );
}
