export function Skills({ skills }: { skills?: string[] }) {
  if (!skills || skills.length === 0) return null;

  return (
    <section className="section skills">
      <h2>What You&apos;ll Be Able To Do</h2>
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
