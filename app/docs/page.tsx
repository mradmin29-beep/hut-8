import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Bot,
  Code2,
  FileText,
  KeyRound,
  Rocket,
} from "lucide-react";

const docs = [
  {
    title: "Getting Started",
    description: "Learn how to set up and use HUT-8 in minutes.",
    icon: Rocket,
    href: "#",
  },
  {
    title: "AI Chat",
    description: "Discover how to interact with AI models effectively.",
    icon: Bot,
    href: "#",
  },
  {
    title: "API Reference",
    description: "Integrate HUT-8 into your own applications.",
    icon: Code2,
    href: "#",
  },
  {
    title: "Authentication",
    description: "Secure authentication and API keys.",
    icon: KeyRound,
    href: "#",
  },
  {
    title: "Guides",
    description: "Step-by-step tutorials for common workflows.",
    icon: FileText,
    href: "#",
  },
  {
    title: "Knowledge Base",
    description: "Frequently asked questions and troubleshooting.",
    icon: BookOpen,
    href: "#",
  },
];

export default function DocsPage() {
  return (
    <main className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-5xl font-bold">Documentation</h1>

        <p className="mt-6 text-lg text-muted-foreground">
          Everything you need to build with HUT-8.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {docs.map((doc) => {
          const Icon = doc.icon;

          return (
            <Link
              key={doc.title}
              href={doc.href}
              className="group rounded-xl border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>

              <h2 className="text-xl font-semibold">
                {doc.title}
              </h2>

              <p className="mt-3 text-muted-foreground">
                {doc.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-primary">
                Learn more
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>

      <section className="mt-24 rounded-2xl border bg-muted/40 p-10 text-center">
        <h2 className="text-3xl font-bold">
          Need more help?
        </h2>

        <p className="mt-4 text-muted-foreground">
          Can&apos;t find what you&apos;re looking for? Our team is here to help.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
        >
          Contact Support
        </Link>
      </section>
    </main>
  );
}