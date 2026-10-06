export default function Section({ id, table, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-3xl px-6 py-14">
      <div className="spine pl-6">
        <span className="spine-node" />
        <p className="font-mono text-[12px] text-accent">{table}</p>
        <h2 className="mt-1 font-display text-2xl font-semibold text-paper">
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
