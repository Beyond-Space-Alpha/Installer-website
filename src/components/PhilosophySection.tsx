const philosophyItems = [
  {
    heading: "Transparency over black-box solvers",
    body: "Every calculation is exposed. Every assumption is stated. You see the equations, the derivations, and the limitations — not just the output.",
  },
  {
    heading: "Learning while designing",
    body: "ImpulseLabs is built for students who want to understand propulsion, not just run numbers. The tool teaches as it computes, linking theory to every design decision.",
  },
];

const PhilosophySection = () => {
  return (
    <section className="border-t border-border bg-surface-gradient">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
            Philosophy
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why ImpulseLabs exists
          </h2>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          {philosophyItems.map((item) => (
            <div key={item.heading} className="max-w-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {item.heading}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
