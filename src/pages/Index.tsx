import { Monitor, Apple, Terminal } from "lucide-react";
import Layout from "@/components/Layout";
import FeatureCard from "@/components/FeatureCard";
import PhilosophySection from "@/components/PhilosophySection";
import heroVisual from "@/assets/hero-visual.jpg";

const downloadButtons = [
  { label: "Download for Windows", icon: Monitor },
  { label: "Download for macOS", icon: Apple },
  { label: "Download for Linux", icon: Terminal },
];

const features = [
  {
    title: "1D Isentropic Analysis",
    description:
      "Compute chamber conditions, throat parameters, and exit plane properties using classical isentropic flow relations. Every equation is visible and documented.",
    tag: "performance",
  },
  {
    title: "Rao Bell Nozzle Contour",
    description:
      "Generate optimized thrust-optimized parabolic nozzle contours. Control expansion ratio, wall angles, and curvature parameters with full analytical traceability.",
    tag: "nozzle",
  },
  {
    title: "CAD & CFD-Ready Export",
    description:
      "Export nozzle and chamber geometry as point clouds, DXF profiles, or structured mesh inputs compatible with common CFD preprocessing tools.",
    tag: "geometry",
  },
  {
    title: "Auto-Generated Documentation",
    description:
      "Every design run produces a report with the equations used, assumptions made, and intermediate results — a complete audit trail for academic review.",
    tag: "docs",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroVisual}
            alt="Nozzle contour wireframe visualization"
            className="h-full w-full object-cover opacity-40"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        </div>

        <div className="relative container mx-auto px-6 py-32 md:py-44 lg:py-52">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-6">
              Open-Source Propulsion Design
            </p>
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Transparent Propulsion Design for Students
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              An open-source tool that unifies preliminary liquid rocket engine
              design while teaching the physics behind every calculation.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {downloadButtons.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  className="inline-flex items-center gap-2.5 rounded-lg border border-primary/30 bg-primary/10 px-5 py-3 font-mono text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:border-primary/50 glow-sm backdrop-blur-sm"
                  onClick={() => {}}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                  <span className="ml-1 text-xs text-primary/60">(soon)</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
              Capabilities
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              What it does
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <FeatureCard key={feature.tag} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <PhilosophySection />
    </Layout>
  );
};

export default Index;
