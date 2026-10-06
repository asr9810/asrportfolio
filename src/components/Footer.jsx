import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-3xl flex-col items-start justify-between gap-2 px-6 py-8 text-[12px] text-muted sm:flex-row sm:items-center">
        <p>
          {profile.name} · {profile.location}
        </p>
        <p className="font-mono">built with react + tailwind</p>
      </div>
    </footer>
  );
}
