import { profile } from "../data/content";
import Section from "./Section";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Section id="contact" table="contact" title="Get in touch">
      <p className="max-w-md text-[15px] leading-relaxed text-muted">
        Open to full-time and freelance backend/full-stack work. Fill this in
        and it'll land straight in my inbox — I'll reply within a day or two.
      </p>

      <div className="mt-6">
        <ContactForm />
      </div>

      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6">
        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-[13px] text-accent hover:underline"
        >
          {profile.email}
        </a>
        <a
          href={`tel:${profile.phone.replace(/\s/g, "")}`}
          className="font-mono text-[13px] text-muted hover:text-paper"
        >
          {profile.phone}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[13px] text-muted hover:text-paper"
        >
          github
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[13px] text-muted hover:text-paper"
        >
          linkedin
        </a>
      </div>
    </Section>
  );
}
