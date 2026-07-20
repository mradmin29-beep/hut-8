import Image from "next/image";
import {
  Bot,
  Brain,
  Crown,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const products = [
  {
    title: "AI Starter",
    price: "$99",
    duration: "30 Days",
    projectedReturn: "$120",
    icon: Bot,
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI Pro",
    price: "$299",
    duration: "60 Days",
    projectedReturn: "$380",
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI Business",
    price: "$599",
    duration: "90 Days",
    projectedReturn: "$810",
    icon: Rocket,
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI Premium",
    price: "$999",
    duration: "120 Days",
    projectedReturn: "$1,450",
    icon: Crown,
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI Enterprise",
    price: "$2,499",
    duration: "180 Days",
    projectedReturn: "$3,900",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI Elite",
    price: "$4,999",
    duration: "365 Days",
    projectedReturn: "$8,250",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=800&q=80",
  },
];

export function Features() {
  return (
    <section className="relative overflow-hidden border-b bg-background py-24 text-foreground transition-colors duration-300">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute top-1/2 left-1/4 h-75 w-[40vw] -translate-y-1/2 rounded-full bg-sky-500/5 blur-[140px] dark:bg-sky-500/10" />
        <div className="absolute top-1/2 right-1/4 h-75 w-[40vw] -translate-y-1/2 rounded-full bg-amber-500/5 blur-[140px] dark:bg-amber-500/10" />
      </div>

      <div className="container relative z-10 mx-auto px-4 font-sans">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/95 px-3 py-1 text-xs font-medium shadow-md backdrop-blur-md dark:border-white/20 dark:bg-zinc-900/95">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            Featured Tiers
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-foreground drop-shadow-sm sm:text-4xl lg:text-5xl">
            Investment Plans
          </h2>

          <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-lg">
            Choose the right tier to deploy AI infrastructure and scale your projected yields.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <div
                key={product.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-background/60 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-background/80 hover:shadow-xl hover:shadow-cyan-500/10 dark:border-white/10 dark:bg-zinc-900/40 dark:hover:border-cyan-400/30 dark:hover:bg-zinc-900/80"
              >
                {/* Image Banner Container */}
                <div className="relative h-48 w-full overflow-hidden bg-zinc-900/20">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent dark:from-zinc-900 dark:via-zinc-900/30" />

                  {/* Icon Badge Overlaid on Image */}
                  <div className="absolute top-4 left-4 inline-flex items-center rounded-xl border border-white/20 bg-background/80 p-2.5 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/80">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-4 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    {product.title}
                  </h3>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Investment</span>
                      <span className="font-semibold text-cyan-500 dark:text-cyan-400">
                        {product.price}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-semibold text-foreground">
                        {product.duration}
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-t border-border/60 pt-3 dark:border-white/10">
                      <span className="font-medium text-foreground">
                        Projected Return
                      </span>
                      <span className="text-lg font-bold text-emerald-500 dark:text-emerald-400">
                        {product.projectedReturn}
                      </span>
                    </div>
                  </div>

                  <button className="mt-6 w-full rounded-full bg-cyan-400 py-3 text-sm font-semibold text-black shadow-md shadow-cyan-500/10 transition-all duration-200 hover:scale-[1.02] hover:bg-cyan-300">
                    Invest Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}