import Image from "next/image";

const values = [
  {
    title: "Curated elegance",
    text: "Chosen for richness and drape.",
  },
  {
    title: "Craft heritage",
    text: "Kanchipuram tradition, polished presentation.",
  },
  {
    title: "Private service",
    text: "For brides, clients, and boutiques.",
  },
];

export const metadata = {
  title: "About",
  description: "About KalaKanchi and our premium export-focused Kanchipuram saree brand.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <section className="page-shell section-space">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="luxury-panel fade-up p-7 md:p-10">
          <p className="eyebrow">About KalaKanchi</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[var(--text)] md:text-5xl">
            Timeless silk craftsmanship presented with quiet sophistication.
          </h1>
          <p className="soft-text mt-6 max-w-xl leading-8">
            Bridal, festive, and boutique collections shaped around heritage and polish.
          </p>
        </div>

        <div className="fade-up-delay-1 grid gap-4 sm:grid-cols-2">
          <div className="image-frame drift relative min-h-[360px] sm:row-span-2">
            <Image
              src="/assets/images/sabesh-photography-ltd-njVir8eVq1M-unsplash.jpg"
              alt="KalaKanchi bridal editorial portrait"
              fill
              className="object-cover"
            />
          </div>
          <div className="image-frame relative min-h-[170px] sm:min-h-[200px]">
            <Image
              src="/assets/images/bella-pon-fruitsia-wcgCFUi_Zws-unsplash.jpg"
              alt="KalaKanchi luxury styling image"
              fill
              className="object-cover"
            />
          </div>
          <div className="image-frame relative min-h-[170px] sm:min-h-[200px]">
            <Image
              src="/assets/images/pexels-dropshado-10317113.jpg"
              alt="KalaKanchi silk details"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {values.map((item) => (
          <article key={item.title} className="luxury-card fade-up-delay-2 p-6">
            <p className="eyebrow">Our Values</p>
            <h2 className="mt-4 text-2xl font-semibold text-[var(--text)]">{item.title}</h2>
            <p className="soft-text mt-3 leading-7">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
