import { projects } from "../data/content";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" table="projects" title="Things I've built">
      <div className="space-y-6">
        {projects.map((p) => (
          <article
            key={p.id}
            className="rounded-sm border border-line bg-surface/40 p-5 transition-colors hover:border-accent/40"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                {p.logos?.map((logo) => (
                  <img
                    key={logo.src}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-7 w-auto max-w-[110px] rounded-sm bg-white/90 object-contain p-1"
                    loading="lazy"
                  />
                ))}
                <h3 className="font-display text-lg font-semibold text-paper">
                  {p.name}
                </h3>
              </div>
              <p className="font-mono text-[12px] text-muted">{p.role}</p>
            </div>

            <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-muted">
              {p.description}
            </p>

            <ul className="mt-3 space-y-1.5">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-[13.5px] text-paper/90">
                  <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-sm border border-line px-2 py-0.5 font-mono text-[11px] text-muted"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-4">
              {p.links.live && (
                <a
                  href={p.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[12px] text-accent hover:underline"
                >
                  live site
                </a>
              )}
              {p.links.code && (
                <a
                  href={p.links.code}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[12px] text-accent hover:underline"
                >
                  source
                </a>
              )}
              {p.note && (
                <span className="font-mono text-[12px] text-muted">
                  {p.note}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
