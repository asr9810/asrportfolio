import { about } from "../data/content";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" table="about" title="Background">
      <div className="max-w-xl space-y-4">
        {about.paragraphs.map((p, i) => (
          <p key={i} className="text-[15px] leading-relaxed text-muted">
            {p}
          </p>
        ))}
      </div>
    </Section>
  );
}
