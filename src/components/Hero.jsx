import { profile } from "../data/content";
import SchemaMark from "./SchemaMark";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-3xl flex-col-reverse items-start gap-10 px-6 pb-20 pt-16 sm:flex-row sm:items-center sm:pt-24"
    >
      <div className="flex-1">
        <p className="font-mono text-[13px] text-accent">
          {profile.role.toLowerCase()}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-paper sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
          {profile.tagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="rounded-sm border border-accent/40 bg-accent/10 px-4 py-2 font-mono text-[13px] text-accent transition-colors hover:bg-accent/20"
          >
            view projects
          </a>
          <a
            href={profile.resumeUrl}
            className="px-4 py-2 font-mono text-[13px] text-muted transition-colors hover:text-paper"
          >
            download resume
          </a>
        </div>
      </div>
      <div className="w-full flex-shrink-0 opacity-90 sm:w-[280px]">
        <SchemaMark />
      </div>
    </section>
  );
}
