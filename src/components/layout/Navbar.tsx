"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Home,
  LogIn,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  {
    href: "/",
    label: "Home",
    icon: Home,
  },
  {
    href: "/features",
    label: "Features",
    icon: Sparkles,
  },
{
  href: "/chat",
  label: "Chat",
  icon: MessageSquare,
},
  {
    href: "/docs",
    label: "Docs",
    icon: BookOpen,
  },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md transition-colors duration-300">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo with matching SVG mark */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-90"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 100 120"
              className="drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
            >
              <path
                d="M 50,20 A 20,20 0 1,1 50,60 A 25,25 0 1,0 50,110 A 25,25 0 1,0 50,60 A 20,20 0 1,1 50,20 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-cyan-400"
              />
            </svg>
            <span>HUT-8</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 ${
                  pathname === link.href
                    ? "font-semibold text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Link
              href="/login"
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:block"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="hidden rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-black shadow-md shadow-cyan-500/10 transition-all duration-200 hover:scale-105 hover:bg-cyan-300 md:block"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-4 left-4 right-4 z-50 rounded-2xl border border-border/80 bg-background/90 shadow-2xl backdrop-blur-lg md:hidden">
        <div className="grid grid-cols-5 py-1">
          {links.map((link) => {
            const Icon = link.icon;
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center justify-center gap-1 py-2 text-[10px] font-medium transition-colors ${
                  active
                    ? "text-cyan-500 dark:text-cyan-400"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{link.label}</span>
              </Link>
            );
          })}

          <Link
            href="/login"
            className={`flex flex-col items-center justify-center gap-1 py-2 text-[10px] font-medium transition-colors ${
              pathname === "/login"
                ? "text-cyan-500 dark:text-cyan-400"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <LogIn className="h-5 w-5" />
            <span>Login</span>
          </Link>
        </div>
      </nav>
    </>
  );
}