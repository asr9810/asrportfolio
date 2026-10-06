import { skills } from "../data/content";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" table="skills" title="What I work with">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-sm border border-line bg-surface/50 p-4"
          >
            <p className="font-mono text-[12px] text-accent">
              {group.category}
            </p>
            {group.icons?.length > 0 && (
              <img
                src={`https://skillicons.dev/icons?i=${group.icons.join(",")}&theme=dark`}
                alt={group.items.join(", ")}
                className="mt-3 h-9"
                loading="lazy"
              />
            )}
            <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
              {group.items.map((item) => (
                <li key={item} className="text-[12.5px] text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
