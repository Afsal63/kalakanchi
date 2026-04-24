import Image from "next/image";

const contactDetails = [
  { label: "Email", value: "kalakanchikanchipuram@gmail.com " },
  { label: "Phone", value: "+91 8330874051" },
  { label: "Studio", value: "Kottayam, Kerala, India" },
  { label: "Hours", value: "Mon - Sun" },
];

export const metadata = {
  title: "Contact",
  description: "Contact KalaKanchi for premium Kanchipuram saree enquiries and export orders.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="page-shell section-space">
      <div className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr]">
        <div className="luxury-card fade-up overflow-hidden">
          <div className="relative min-h-[280px] sm:min-h-[340px]">
            <Image
              src="/assets/images/pexels-atulchoudharya9-6167463.jpg"
              alt="KalaKanchi luxury contact hero"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#150f0c] via-[#150f0c]/50 to-transparent" />
          </div>

          <div className="p-7 md:p-9">
            <p className="eyebrow">Private Enquiry</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-[var(--text)] md:text-5xl">
              Begin your private saree consultation.
            </h1>
            <p className="soft-text mt-5 max-w-lg leading-8">
              Share your requirement. We will tailor the selection.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactDetails.map((item) => (
                <div key={item.label} className="fade-up-delay-1 rounded-[22px] border border-[rgba(221,182,107,0.12)] bg-[rgba(255,255,255,0.03)] p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--gold)]">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <form className="luxury-panel fade-up-delay-1 shine p-7 md:p-9" aria-label="Contact form">
          <p className="eyebrow">Appointment Form</p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--text)]">Tell us what you need.</h2>

          <label htmlFor="name" className="mt-8 block text-sm font-medium text-[var(--text)]">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            className="mt-2 w-full rounded-2xl border border-[rgba(221,182,107,0.18)] bg-[#f6ead8] px-4 py-3 text-sm outline-none focus:border-[var(--gold-deep)]"
          />

          <label htmlFor="email" className="mt-5 block text-sm font-medium text-[var(--text)]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="mt-2 w-full rounded-2xl border border-[rgba(221,182,107,0.18)] bg-[#f6ead8] px-4 py-3 text-sm outline-none focus:border-[var(--gold-deep)]"
          />

          <label htmlFor="occasion" className="mt-5 block text-sm font-medium text-[var(--text)]">
            Requirement
          </label>
          <input
            id="occasion"
            name="occasion"
            type="text"
            placeholder="Bridal, gifting, boutique sourcing..."
            className="mt-2 w-full rounded-2xl border border-[rgba(221,182,107,0.18)] bg-[#f6ead8] px-4 py-3 text-sm outline-none focus:border-[var(--gold-deep)]"
          />

          <label htmlFor="message" className="mt-5 block text-sm font-medium text-[var(--text)]">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Preferred colors, budget, quantity, event details"
            className="mt-2 w-full rounded-[24px] border border-[rgba(221,182,107,0.18)] bg-[#f6ead8] px-4 py-3 text-sm outline-none focus:border-[var(--gold-deep)]"
          />

          <button type="submit" className="cta-primary mt-7">
            Send Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
