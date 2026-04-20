"use client";

import { usePathname } from "next/navigation";

const phoneNumber = "919876543210";

export default function FloatingWhatsApp() {
  const pathname = usePathname();
  const message = encodeURIComponent(
    `Hi KalaKanchi, I am interested in your saree collection. I am visiting: ${pathname || "/"}`
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" role="img" aria-hidden="true">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.57 0 .3 5.28.3 11.78c0 2.07.54 4.08 1.57 5.86L0 24l6.56-1.72a11.76 11.76 0 0 0 5.5 1.4h.01c6.5 0 11.77-5.28 11.77-11.78 0-3.15-1.23-6.11-3.32-8.42ZM12.08 21.7h-.01a9.82 9.82 0 0 1-5-1.37l-.36-.21-3.9 1.02 1.04-3.8-.24-.39a9.8 9.8 0 0 1-1.5-5.18c0-5.42 4.42-9.84 9.86-9.84 2.63 0 5.11 1.02 6.97 2.88a9.78 9.78 0 0 1 2.89 6.97c0 5.42-4.43 9.84-9.85 9.84Zm5.39-7.34c-.29-.14-1.71-.84-1.97-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.9 1.14-.17.19-.33.22-.62.07-.29-.14-1.2-.44-2.28-1.4-.85-.75-1.42-1.68-1.58-1.97-.17-.29-.02-.45.12-.6.13-.12.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.56-.88-2.13-.23-.56-.46-.48-.64-.49l-.54-.01c-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43.02 1.43 1.03 2.8 1.17 2.99.14.19 2.02 3.08 4.9 4.32.69.3 1.23.47 1.65.61.69.22 1.31.19 1.8.11.55-.08 1.71-.7 1.95-1.38.24-.68.24-1.27.17-1.39-.07-.12-.26-.19-.55-.33Z" />
      </svg>
    </a>
  );
}
