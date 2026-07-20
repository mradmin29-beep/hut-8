import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Brain,
  FileText,
  Globe,
  Sparkles,
} from "lucide-react";

const chats = [
  {
    title: "HUT-8 Assistant",
    description: "Your everyday AI assistant for writing, coding, and research.",
    icon: Bot,
    color: "from-cyan-500 to-sky-500",
  },
  {
    title: "Code Expert",
    description: "Generate, explain, debug, and optimize code in seconds.",
    icon: Brain,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Document AI",
    description: "Upload PDFs, Word documents, and chat with your files.",
    icon: FileText,
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Web AI",
    description: "Search the web and receive accurate AI-powered answers.",
    icon: Globe,
    color: "from-orange-500 to-amber-500",
  },
];

export default function ChatPage() {
  return (
    <main className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
          <Sparkles className="h-4 w-4 text-cyan-500" />
          AI Chat Workspace
        </div>

        <h1 className="text-5xl font-bold sm:text-6xl">
          Chat with the
          <span className="block bg-linear-to-r from-cyan-500 via-sky-500 to-blue-500 bg-clip-text text-transparent">
            World&apos;s Best AI Models
          </span>
        </h1>

        <p className="mt-6 text-lg text-muted-foreground">
          Write faster, solve problems, generate code, analyze documents,
          and search the web from one intelligent workspace.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
          >
            Start Chatting
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/login"
            className="rounded-xl border px-6 py-3 font-medium transition hover:bg-muted"
          >
            Sign In
          </Link>
        </div>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2">
        {chats.map((chat) => {
          const Icon = chat.icon;

          return (
            <div
              key={chat.title}
              className="group rounded-2xl border bg-card p-8 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-r ${chat.color}`}
              >
                <Icon className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold">
                {chat.title}
              </h2>

              <p className="mt-4 text-muted-foreground">
                {chat.description}
              </p>

              <Link
                href="/signup"
                className="mt-8 inline-flex items-center gap-2 font-medium text-primary"
              >
                Open Chat
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
          );
        })}
      </div>

      <section className="mt-24 rounded-3xl border bg-muted/40 p-12 text-center">
        <h2 className="text-4xl font-bold">
          Ready to experience AI?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Access multiple AI models, organize conversations, upload files,
          and boost your productivity with HUT-8.
        </p>

        <Link
          href="/signup"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
        >
          Get Started Free
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  );
}