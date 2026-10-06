import { profile } from "../data/content";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-ink/85 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-sm font-semibold tracking-tight text-paper"
        >
          {profile.name}
        </a>
        <ul className="flex items-center gap-5 font-mono text-[13px] text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
