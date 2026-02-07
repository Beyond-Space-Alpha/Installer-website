import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
            About
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Mission
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            ImpulseLabs exists to make preliminary rocket engine design
            accessible, understandable, and reproducible.
          </p>
        </div>

        <div className="mt-20 grid gap-16 md:grid-cols-2 max-w-4xl">
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Education first
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Most propulsion design tools are either proprietary, opaque, or
              both. Students run them without understanding what happens between
              input and output. ImpulseLabs inverts that model — every equation
              is shown, every assumption is stated, and every result can be
              traced back to fundamentals.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Reproducibility
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Engineering decisions should be auditable. ImpulseLabs generates
              documentation alongside design outputs, creating a complete record
              of the methods, parameters, and results that produced a given
              engine configuration. This supports academic review, team
              collaboration, and design iteration.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Open source
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              The entire codebase is open. Contributions are welcome — whether
              that means adding new propellant models, improving the nozzle
              optimization algorithm, or fixing documentation. The project is
              maintained by Beyond Space and licensed under MIT.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Built for real work
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              While ImpulseLabs is an educational tool, its outputs are
              engineering-grade. Nozzle contours can be directly imported into
              CAD environments. Performance estimates align with established
              references. The goal is a tool that students trust enough to base
              real hardware decisions on.
            </p>
          </div>
        </div>

        <div className="mt-24 max-w-3xl border-t border-border pt-12">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-primary mb-3">
            Beyond Space
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            ImpulseLabs is developed and maintained by Beyond Space — a group
            focused on building open tools for aerospace engineering education.
            We believe the next generation of propulsion engineers deserves
            better software.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
