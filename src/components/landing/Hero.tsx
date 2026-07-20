import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b bg-background text-foreground transition-colors duration-300">
      {/* 1. Background Glows and Animated Wave Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
        {/* Ambient Glow Spots - Using Canonical Classes (h-95 and h-75) */}
        <div className="animate-[bounce_18s_ease-in-out_infinite] absolute left-1/2 top-1/2 h-95 w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/5 blur-[160px] dark:bg-sky-500/10" />
        <div className="animate-[pulse_12s_ease-in-out_infinite] absolute left-1/2 top-1/2 h-75 w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/5 blur-[140px] dark:bg-amber-500/10" />

        {/* Low Opacity SVG Lines */}
        <svg
          className="animate-[pulse_10s_ease-in-out_infinite] h-full w-full opacity-10 dark:opacity-25"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="glow-lines" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2087c5" />
              <stop offset="30%" stopColor="#41b4e2" />
              <stop offset="50%" stopColor="#a3d9ff" />
              <stop offset="70%" stopColor="#f3daac" />
              <stop offset="100%" stopColor="#bd905a" />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g
            stroke="url(#glow-lines)"
            strokeWidth="1.2"
            fill="none"
            filter="url(#glow)"
          >
            {[...Array(14)].map((_, i) => (
              <path
                key={i}
                d={`M-100,${180 + i * 32} C350,${100 + i * 35} 650,${
                  350 + i * 20
                } 1050,${150 + i * 35} C1350,${300 + i * 20} 1600,${
                  180 + i * 32
                }`}
              />
            ))}
          </g>
        </svg>
      </div>

      {/* 2. Full Backdrop Blur Layer */}
      <div className="absolute inset-0 z-0 bg-background/40 backdrop-blur-md pointer-events-none" />

      {/* 3. Main Hero Content Container */}
      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-64px)] flex-col items-center justify-center px-4 py-16 text-center font-sans">
        
        {/* Logo Graphic */}
        <div className="mb-6 flex justify-center animate-[pulse_8s_ease-in-out_infinite]">
          <svg
            width="80"
            height="80"
            viewBox="0 0 100 120"
            className="drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]"
          >
            <path
              d="M 50,20 A 20,20 0 1,1 50,60 A 25,25 0 1,0 50,110 A 25,25 0 1,0 50,60 A 20,20 0 1,1 50,20 Z"
              fill="none"
              stroke="url(#glow-lines)"
              strokeWidth="3.5"
            />
          </svg>
        </div>


        {/* Heading with Updated Canonical Class (bg-linear-to-r) */}
        <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-foreground drop-shadow-lg sm:text-6xl lg:text-7xl">
          <span className="block text-zinc-900 dark:text-zinc-50">
            HUT-8 Workspace
          </span>
          <span className="mt-2 block bg-linear-to-r from-sky-400 via-sky-300 to-amber-200 bg-clip-text text-transparent">
            Build, Chat, and Automate with AI
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-700 drop-shadow-sm dark:text-zinc-300 sm:text-lg">
          AI chat, agents, documents, and automation workflows—all unified into
          one workspace.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/signup"
            className="group relative inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-black shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:scale-105 hover:bg-cyan-300"
          >
            Get Started
            <span className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white/10 px-7 py-3 text-sm font-medium text-foreground backdrop-blur-md transition-all duration-200 hover:border-zinc-400 hover:bg-white/20 dark:border-white/15 dark:hover:border-white/30 dark:hover:bg-zinc-800/50"
          >
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
}