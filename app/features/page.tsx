import Image from "next/image";
import {
  Bot,
  Brain,
  Crown,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const products = [
  {
    title: "AI Starter",
    price: "$99",
    duration: "30 Days",
    projectedReturn: "$185",
    roi: "+86.8%",
    icon: Bot,
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI Pro",
    price: "$299",
    duration: "60 Days",
    projectedReturn: "$625",
    roi: "+109.0%",
    icon: Brain,
    image:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI Business",
    price: "$599",
    duration: "90 Days",
    projectedReturn: "$1,450",
    roi: "+142.0%",
    icon: Rocket,
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI Premium",
    price: "$999",
    duration: "120 Days",
    projectedReturn: "$2,850",
    roi: "+185.2%",
    icon: Crown,
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI Enterprise",
    price: "$2,499",
    duration: "180 Days",
    projectedReturn: "$8,200",
    roi: "+228.1%",
    icon: ShieldCheck,
    image:
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI Elite",
    price: "$4,999",
    duration: "365 Days",
    projectedReturn: "$19,500",
    roi: "+290.0%",
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=800&q=80",
  },
];

export function Features() {
  return (
    <section className="relative overflow-hidden border-b bg-background py-8 text-foreground transition-colors duration-300 sm:py-20 lg:py-24">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="absolute top-1/2 left-1/4 h-75 w-[40vw] -translate-y-1/2 rounded-full bg-sky-500/5 blur-[140px] dark:bg-sky-500/10" />
        <div className="absolute top-1/2 right-1/4 h-75 w-[40vw] -translate-y-1/2 rounded-full bg-amber-500/5 blur-[140px] dark:bg-amber-500/10" />
      </div>

      <div className="container relative z-10 mx-auto px-2.5 font-sans sm:px-4">
        {/* Section Header */}
        <div className="mx-auto mb-6 max-w-2xl text-center sm:mb-16">


          <h2 className="text-xl font-extrabold tracking-tight text-foreground drop-shadow-sm sm:text-4xl lg:text-5xl">
            Investment Plans
          </h2>

          <p className="mt-1 text-[11px] leading-snug text-zinc-600 dark:text-zinc-300 sm:mt-4 sm:text-base lg:text-lg">
            Deploy automated AI capital nodes and scale your projected yield returns across multiple duration horizons.
          </p>
        </div>

        {/* Product Cards Grid: 2 columns on mobile (grid-cols-2) */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-6 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;

            return (
              <div
                key={product.title}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-border/80 bg-background/60 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-background/80 hover:shadow-xl hover:shadow-cyan-500/10 sm:rounded-2xl dark:border-white/10 dark:bg-zinc-900/40 dark:hover:border-cyan-400/30 dark:hover:bg-zinc-900/80"
              >
                {/* Image Banner Container - Compact h-20 on mobile */}
                <div className="relative h-20 w-full overflow-hidden bg-zinc-900/20 sm:h-48">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent dark:from-zinc-900 dark:via-zinc-900/30" />

                  {/* Icon Badge Overlaid on Image */}
                  <div className="absolute top-1.5 left-1.5 inline-flex items-center rounded-md border border-white/20 bg-background/80 p-1 shadow-md backdrop-blur-md sm:top-4 sm:left-4 sm:rounded-xl sm:p-2.5 dark:border-white/10 dark:bg-zinc-900/80">
                    <Icon className="h-3 w-3 text-cyan-400 sm:h-5 sm:w-5" />
                  </div>

                  {/* ROI Badge */}
                  <div className="absolute top-1.5 right-1.5 inline-flex items-center gap-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 text-[8px] font-bold text-emerald-500 backdrop-blur-md sm:top-4 sm:right-4 sm:gap-1 sm:px-3 sm:py-1 sm:text-xs dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-400">
                    <TrendingUp className="h-2 w-2 sm:h-3 sm:w-3" />
                    <span>{product.roi}</span>
                  </div>
                </div>

                {/* Card Content - Compact p-2.5 on mobile */}
                <div className="flex flex-1 flex-col p-2.5 sm:p-6">
                  <h3 className="mb-2 text-xs font-bold tracking-tight text-zinc-900 sm:mb-4 sm:text-xl dark:text-zinc-100">
                    {product.title}
                  </h3>

                  <div className="space-y-1 text-[10px] sm:space-y-3 sm:text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Stake</span>
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

                    <div className="flex items-center justify-between border-t border-border/60 pt-1 sm:pt-3 dark:border-white/10">
                      <span className="font-medium text-foreground">
                        Return
                      </span>
                      <span className="text-xs font-extrabold text-emerald-500 sm:text-xl dark:text-emerald-400">
                        {product.projectedReturn}
                      </span>
                    </div>
                  </div>

                  <button className="mt-2.5 w-full rounded-full bg-cyan-400 py-1.5 text-[10px] font-semibold text-black shadow-md shadow-cyan-500/10 transition-all duration-200 hover:scale-[1.02] hover:bg-cyan-300 sm:mt-6 sm:py-3 sm:text-sm">
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

export default Features;