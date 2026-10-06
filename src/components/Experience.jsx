import { experience } from "../data/content";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" table="experience" title="Where I've worked">
      <div className="space-y-6">
        {experience.map((e) => (
          <div
            key={e.company}
            className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline"
          >
            <div>
              <p className="text-[15px] font-medium text-paper">
                {e.role} · {e.company}
              </p>
              <p className="mt-1 max-w-md text-[13.5px] text-muted">
                {e.summary}
              </p>
            </div>
            <p className="whitespace-nowrap font-mono text-[12px] text-muted">
              {e.period}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
