import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "Bridal Heirlooms",
    text: "Statement sarees with richer zari, deeper jewel tones, and ceremonial presence.",
  },
  {
    title: "Private Client Edits",
    text: "Calmer luxury selections for gifting, receptions, and elegant festive dressing.",
  },
  {
    title: "Boutique Sourcing",
    text: "Presentation-ready curation for premium retailers that need distinction, not volume clutter.",
  },
];

const gallery = [
  "/assets/images/urvi-kotasthane-gl-KSnRyhE0-unsplash.jpg",
  "/assets/images/vinay-manda-NQ0dtGvTZEQ-unsplash.jpg",
  "/assets/images/pexels-atulchoudharya9-5439054.jpg",
  "/assets/images/jainica-dhingra-udCX1mvNFos-unsplash.jpg",
];

export default function HomePage() {
  return (
    <>
      <section className="page-shell section-space">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="fade-up flex flex-col justify-center">
            <p className="eyebrow">Exclusive Kanchipuram Luxury</p>
            <h1 className="hero-title mt-5 max-w-3xl font-semibold text-[var(--text)]">
              Curated Kanchipuram silk with a refined luxury feel.
            </h1>
            <p className="soft-text mt-6 max-w-xl text-base leading-8 md:text-lg">
              Bridal, festive, and boutique-ready sarees shaped around elegance and depth.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="cta-primary">
                Request Private Viewing
              </Link>
              <Link href="/about" className="cta-secondary">
                Discover the Brand
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="luxury-card fade-up-delay-1 p-5">
                <p className="text-2xl font-semibold text-[var(--text)]">Handpicked</p>
                <p className="soft-text mt-2 text-sm leading-6">Rich finish and drape.</p>
              </div>
              <div className="luxury-card fade-up-delay-1 p-5">
                <p className="text-2xl font-semibold text-[var(--text)]">Authentic</p>
                <p className="soft-text mt-2 text-sm leading-6">Rooted in tradition.</p>
              </div>
              <div className="luxury-card fade-up-delay-1 p-5">
                <p className="text-2xl font-semibold text-[var(--text)]">Private</p>
                <p className="soft-text mt-2 text-sm leading-6">For appointments and sourcing.</p>
              </div>
            </div>
          </div>

          <div className="fade-up-delay-1 grid gap-4 sm:grid-cols-2">
            <div className="image-frame spotlight drift relative min-h-[340px] sm:min-h-[420px]">
              <Image
                src="/assets/images/sabesh-photography-ltd-j7Ljsqhnwag-unsplash.jpg"
                alt="Luxury bridal saree portrait"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="grid gap-4">
              <div className="image-frame relative min-h-[200px] sm:min-h-[230px]">
                <Image
                  src="/assets/images/pexels-dropshado-10317127.jpg"
                  alt="Detailed silk saree fabric"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="luxury-panel shine p-6">
                <p className="eyebrow">Luxury Direction</p>
                <p className="mt-4 text-2xl leading-9 text-[var(--text)]">
                  Designed to feel like an intimate couture silk salon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell pb-14 md:pb-20">
        <div className="gold-divider" />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="luxury-panel fade-up p-7 md:p-9">
            <p className="eyebrow">Collection Focus</p>
            <h2 className="mt-4 text-3xl font-semibold text-[var(--text)] md:text-4xl">
              Premium collections deserve atmosphere, poise, and visual depth.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {collections.map((item) => (
              <article key={item.title} className="luxury-card fade-up-delay-2 p-6">
                <p className="eyebrow">Signature</p>
                <h3 className="mt-4 text-2xl font-semibold text-[var(--text)]">{item.title}</h3>
                <p className="soft-text mt-3 leading-7">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell pb-14 md:pb-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((src, index) => (
            <div
              key={src}
              className={`image-frame fade-up-delay-2 relative min-h-[280px] ${index === 1 || index === 3 ? "sm:translate-y-6" : ""}`}
            >
              <Image
                src={src}
                alt={`KalaKanchi luxury gallery image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="page-shell pb-16 md:pb-24">
        <div className="luxury-card fade-up overflow-hidden">
          <div className="grid lg:grid-cols-[1fr_0.9fr]">
            <div className="p-7 md:p-12">
              <p className="eyebrow">Enquiries & Appointments</p>
              <h2 className="mt-4 text-3xl font-semibold text-[var(--text)] md:text-5xl">
                Begin a tailored conversation for bridal, festive, or boutique selections.
              </h2>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="cta-primary">
                  Start Enquiry
                </Link>
                <Link href="/about" className="cta-secondary">
                  About KalaKanchi
                </Link>
              </div>
            </div>

            <div className="relative min-h-[280px] md:min-h-[360px]">
              <Image
                src="/assets/images/pexels-atulchoudharya9-5447529.jpg"
                alt="KalaKanchi premium silk collection"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/35" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
