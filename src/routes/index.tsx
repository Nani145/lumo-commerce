import { createFileRoute } from "@tanstack/react-router";
import {
  Headphones,
  Shirt,
  Watch,
  Sparkles,
  Camera,
  Gamepad2,
  Home,
  Gift,
  ArrowRight,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";
import { Navbar } from "@/components/glass/Navbar";
import { GlassIcon } from "@/components/glass/GlassIcon";
import { ProductCard } from "@/components/glass/ProductCard";
import headphones from "@/assets/product-headphones.jpg";
import sneaker from "@/assets/product-sneaker.jpg";
import watch from "@/assets/product-watch.jpg";
import bag from "@/assets/product-bag.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumo — Premium objects, future-feel commerce" },
      {
        name: "description",
        content:
          "Lumo is a next-gen storefront for curated audio, wearables and lifestyle pieces. Crystal-clear glass UI, instant checkout, worldwide delivery.",
      },
      { property: "og:title", content: "Lumo — Premium objects, future-feel commerce" },
      {
        property: "og:description",
        content:
          "Crystal-clear glass UI, instant checkout, worldwide delivery. Curated audio, wearables and lifestyle pieces.",
      },
    ],
  }),
  component: Index,
});

const categories = [
  { icon: Headphones, label: "Audio", tint: "oklch(0.75 0.22 330)" },
  { icon: Shirt, label: "Apparel", tint: "oklch(0.75 0.2 30)" },
  { icon: Watch, label: "Wearables", tint: "oklch(0.75 0.2 250)" },
  { icon: Camera, label: "Camera", tint: "oklch(0.78 0.18 160)" },
  { icon: Gamepad2, label: "Gaming", tint: "oklch(0.7 0.24 290)" },
  { icon: Home, label: "Home", tint: "oklch(0.78 0.18 70)" },
  { icon: Gift, label: "Gifts", tint: "oklch(0.72 0.22 10)" },
  { icon: Sparkles, label: "Beauty", tint: "oklch(0.78 0.18 200)" },
];

const products = [
  { image: headphones, name: "Aurora Pro", tag: "Audio", price: "$349", rating: 4.9 },
  { image: sneaker, name: "Nimbus Glide", tag: "Footwear", price: "$220", rating: 4.8 },
  { image: watch, name: "Halo Chrono", tag: "Wearable", price: "$499", rating: 4.9 },
  { image: bag, name: "Soft Carry 03", tag: "Bags", price: "$189", rating: 4.7 },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated aurora orbs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="animate-orb absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-aurora-1/60 blur-3xl" />
        <div className="animate-orb absolute right-[-10rem] top-40 h-[26rem] w-[26rem] rounded-full bg-aurora-3/60 blur-3xl [animation-delay:-4s]" />
        <div className="animate-orb absolute bottom-[-8rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-aurora-2/50 blur-3xl [animation-delay:-8s]" />
      </div>

      <div className="pt-4">
        <Navbar />
      </div>

      <main className="mx-auto w-[min(1200px,94%)]">
        {/* HERO */}
        <section className="relative mt-10 grid gap-8 md:mt-16 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="space-y-7">
            <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-white/85">
              <Sparkles className="h-3.5 w-3.5" /> New season · drop 04
            </span>
            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl">
              Objects that <span className="text-gradient">feel like tomorrow.</span>
            </h1>
            <p className="max-w-md text-base text-white/75 sm:text-lg">
              A curated storefront for premium audio, wearables and everyday carry —
              wrapped in a crystal-clear interface inspired by the iPhone glass era.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
  href="#shop"
  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.03]"
>
  Shop the drop
  <ArrowRight className="h-4 w-4" />
</a>
              <a
                href="#story"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Watch film
              </a>
            </div>
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-white/70">
              <Feature icon={Truck} label="Free 2-day shipping" />
              <Feature icon={ShieldCheck} label="2-year warranty" />
              <Feature icon={RotateCcw} label="60-day returns" />
            </div>
          </div>

          {/* Hero product stack */}
          <div className="relative h-[420px] sm:h-[520px]">
            <div className="absolute right-0 top-4 h-[78%] w-[82%] overflow-hidden rounded-[44px] border border-glass-border shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
              <img
                src={headphones}
                alt="Featured headphones"
                width={800}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Floating glass card */}
            <div className="glass-strong animate-float-slow absolute bottom-4 left-0 w-64 rounded-3xl p-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-2xl">
                  <img src={watch} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] uppercase tracking-wider text-white/60">Editor's pick</p>
                  <p className="text-sm font-semibold text-white">Halo Chrono</p>
                </div>
                <span className="text-sm font-semibold text-white">$499</span>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/15">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-aurora-1 to-aurora-3" />
              </div>
              <p className="mt-1.5 text-[11px] text-white/60">74% of drop already claimed</p>
            </div>
            {/* Floating price chip */}
            <div className="glass animate-float-slow absolute right-4 top-0 rounded-2xl px-4 py-3 [animation-delay:-2s]">
              <p className="text-[10px] uppercase tracking-wider text-white/60">From</p>
              <p className="text-xl font-semibold text-white">$349</p>
            </div>
          </div>
        </section>

        {/* CATEGORIES — glass icon dock */}
        <section id="shop" className="mt-20">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Browse the universe
            </h2>
            <a href="#" className="text-sm text-white/70 hover:text-white">All categories →</a>
          </div>
          <div className="glass-strong rounded-[32px] p-5 sm:p-7">
            <div className="grid grid-cols-4 gap-4 sm:grid-cols-8">
              {categories.map((c) => (
                <GlassIcon key={c.label} icon={c.icon} label={c.label} tint={c.tint} />
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="new" className="mt-20">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Drop 04</p>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Just landed
              </h2>
            </div>
            <a href="#" className="text-sm text-white/70 hover:text-white">View all →</a>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </section>

        {/* FEATURE BAND */}
        <section id="collections" className="mt-24">
          <div className="glass-strong relative overflow-hidden rounded-[36px] p-8 sm:p-12">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-5">
                <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-white/85">
                  Limited · 500 pieces
                </span>
                <h3 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                  The Aurora Edition.
                  <br />
                  <span className="text-gradient">Crafted in light.</span>
                </h3>
                <p className="max-w-md text-white/75">
                  Hand-finished aluminium, iridescent glass, and a sound stage tuned by
                  studios in Berlin. Numbered, signed, never restocked.
                </p>
                <a
  href="#"
  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.03]"
>
  Reserve yours
  <ArrowRight className="h-4 w-4" />
</a>
              </div>
              <div className="relative h-72 sm:h-80">
                <img
                  src={sneaker}
                  alt="Aurora edition"
                  className="absolute inset-0 h-full w-full rounded-3xl object-cover"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-aurora-1/30 via-transparent to-aurora-3/30 mix-blend-overlay" />
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="story" className="mt-24 pb-12">
          <div className="glass rounded-[28px] p-8 sm:p-10">
            <div className="grid gap-8 sm:grid-cols-4">
              <div className="sm:col-span-2">
                <div className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-white/80 to-white/20 text-sm font-bold text-foreground">
                    ◎
                  </span>
                  <span className="text-base font-semibold text-white">Lumo</span>
                </div>
                <p className="mt-3 max-w-xs text-sm text-white/70">
                  A future-feel storefront for objects worth keeping. Designed in Lisbon,
                  shipped worldwide.
                </p>
              </div>
              <FooterCol title="Shop" links={["New", "Audio", "Wearables", "Gifts"]} />
              <FooterCol title="Company" links={["Story", "Press", "Careers", "Contact"]} />
            </div>
            <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row">
              <p>© {new Date().getFullYear()} Lumo Objects. All rights reserved.</p>
              <p>Made with light, glass and good taste.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

function Feature({ icon: Icon, label }: { icon: typeof Truck; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="glass-icon grid h-8 w-8 place-items-center rounded-xl">
        <Icon className="h-4 w-4 text-white" />
      </span>
      <span>{label}</span>
    </div>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-white">{title}</p>
      <ul className="space-y-2 text-sm text-white/65">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="hover:text-white">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
