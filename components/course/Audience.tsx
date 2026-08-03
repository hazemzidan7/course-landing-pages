export function Audience({ audience }: { audience?: string[] }) {
  if (!audience || audience.length === 0) return null;

  return (
    <section className="section audience">
      <h2>Who Is This Course For?</h2>
      <ul className="checklist">
        {audience.map((point) => (
          <li key={point} className="checklist__item">
            <svg className="checklist__icon" viewBox="0 0 20 20" aria-hidden="true">
              <path
                d="M4 10.5l3.5 3.5L16 5.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
}
