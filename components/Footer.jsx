import Image from "next/image";
import Link from "next/link";

const icons = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/kalakanchi_?igsh=dWJqYzlzOWNldmw1",
    path: "M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.42.61.24 1.04.53 1.5.98.45.45.74.89.98 1.5.18.46.37 1.26.42 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.42 2.43-.24.61-.53 1.04-.98 1.5-.45.45-.89.74-1.5.98-.46.18-1.26.37-2.43.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.42-.61-.24-1.04-.53-1.5-.98a4.07 4.07 0 0 1-.98-1.5c-.18-.46-.37-1.26-.42-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.42-2.43.24-.61.53-1.04.98-1.5.45-.45.89-.74 1.5-.98.46-.18 1.26-.37 2.43-.42C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52.01-4.77.07-1.02.05-1.58.22-1.95.36-.49.19-.84.42-1.21.79-.37.37-.6.72-.79 1.21-.14.37-.31.93-.36 1.95C2.86 8.48 2.85 8.85 2.85 12s.01 3.52.07 4.77c.05 1.02.22 1.58.36 1.95.19.49.42.84.79 1.21.37.37.72.6 1.21.79.37.14.93.31 1.95.36 1.25.06 1.62.07 4.77.07s3.52-.01 4.77-.07c1.02-.05 1.58-.22 1.95-.36.49-.19.84-.42 1.21-.79.37-.37.6-.72.79-1.21.14-.37.31-.93.36-1.95.06-1.25.07-1.62.07-4.77s-.01-3.52-.07-4.77c-.05-1.02-.22-1.58-.36-1.95a2.3 2.3 0 0 0-.79-1.21c-.37-.37-.72-.6-1.21-.79-.37-.14-.93-.31-1.95-.36C15.52 4.01 15.15 4 12 4Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm6.24-2.22a1.14 1.14 0 1 1 0 2.28 1.14 1.14 0 0 1 0-2.28Z",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    path: "M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4v1.8H8v2.8h2.3v7h3.2Z",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    path: "M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.6 2.6 0 0 0-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8a2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15.1V8.9L15.2 12 10 15.1Z",
  },
];

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-[rgba(221,182,107,0.12)] bg-[#0d0908]">
      <div className="page-shell grid gap-10 py-12 md:grid-cols-[1.1fr_0.8fr_0.9fr_0.8fr]">
        <div>
          <div className="logo-plaque relative h-[92px] w-[270px] max-w-full px-3">
            <Image
              src="/assets/images/logo/logo.png"
              alt="KalaKanchi logo"
              fill
              className="object-contain p-2"
              sizes="270px"
            />
          </div>
          <p className="soft-text mt-5 max-w-md text-sm leading-7">
            Premium Kanchipuram silk sarees for bridal wardrobes, festive dressing, private clients, and boutique
            buyers who value elegance and craftsmanship.
          </p>
        </div>

        <div>
          <h3 className="eyebrow">Navigate</h3>
          <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
            <Link href="/" className="block hover:text-[var(--gold)]">Home</Link>
            <Link href="/about" className="block hover:text-[var(--gold)]">About</Link>
            <Link href="/contact" className="block hover:text-[var(--gold)]">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="eyebrow">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
            <p>hello@kalakanchi.com</p>
            <p>+91 98765 43210</p>
            <p>Kanchipuram, Tamil Nadu</p>
            <p>Mon - Sat, 10 AM - 7 PM</p>
          </div>
        </div>

        <div>
          <h3 className="eyebrow">Follow</h3>
          <div className="mt-4 flex items-center gap-3">
            {icons.map((icon) => (
              <a
                key={icon.name}
                href={icon.href}
                target="_blank"
                rel="noreferrer"
                aria-label={icon.name}
                className="grid h-10 w-10 place-items-center rounded-full border border-[rgba(221,182,107,0.2)] bg-[rgba(255,255,255,0.03)] hover:bg-[rgba(221,182,107,0.12)]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[var(--gold)]" role="img" aria-hidden="true">
                  <path d={icon.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(221,182,107,0.08)] py-4 text-center text-xs text-[var(--muted-soft)]">
        © {new Date().getFullYear()} KalaKanchi. All rights reserved.
      </div>
    </footer>
  );
}
