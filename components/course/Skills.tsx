import type { Dictionary } from '@/lib/i18n/types';

export function Skills({ skills, dict }: { skills?: string[]; dict: Dictionary }) {
  if (!skills || skills.length === 0) return null;

  return (
    <section className="section skills">
      <h2>{dict.sections.skills}</h2>
      <ul className="chip-list">
        {skills.map((skill) => (
          <li key={skill} className="chip">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
