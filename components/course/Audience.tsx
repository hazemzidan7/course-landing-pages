export function Audience({ audience }: { audience?: string[] }) {
  if (!audience || audience.length === 0) return null;

  return (
    <section className="section audience">
      <h2>Who Is This Course For?</h2>
      <ul>
        {audience.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
