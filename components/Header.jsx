import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-[rgba(221,182,107,0.1)] bg-[rgba(12,8,7,0.86)] backdrop-blur-xl">
      <div className="page-shell flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="logo-plaque relative h-[72px] w-[220px] self-start px-3 sm:h-[82px] sm:w-[260px]">
          <Image
            src="/assets/images/logo/logo.png"
            alt="KalaKanchi logo"
            fill
            priority
            className="object-contain p-2"
            sizes="(max-width: 640px) 220px, 260px"
          />
        </Link>

        <div className="flex w-full flex-wrap items-center justify-between gap-3 sm:w-auto sm:justify-end">
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-[var(--muted)]" aria-label="Main navigation">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-[var(--gold)]">
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="cta-primary text-xs sm:text-sm">
            Book Viewing
          </Link>
        </div>
      </div>
    </header>
  );
}
