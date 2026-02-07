import Layout from "@/components/Layout";

const docSections = [
  {
    id: "getting-started",
    title: "Getting Started",
    content: [
      "ImpulseLabs runs as a standalone desktop application. Download the appropriate binary for your platform, extract, and launch.",
      "On first run, the application initializes a default workspace. You can create a new engine design project from the dashboard or import an existing configuration file (.impulse).",
      "System requirements are minimal: any modern 64-bit operating system with at least 4 GB of RAM. No external dependencies or runtime installations are required.",
    ],
  },
  {
    id: "theory",
    title: "Theory and Assumptions",
    content: [
      "All thermodynamic calculations assume calorically perfect gas behavior for the combustion products. This is a standard simplification for preliminary design and produces results within 2–5% of more complex equilibrium chemistry codes for typical bipropellant systems.",
      "Flow through the nozzle is modeled as quasi-one-dimensional, steady, and isentropic (except where explicitly noted). Boundary layer losses, divergence losses, and combustion efficiency are accounted for through empirical correction factors that the user can configure.",
      "The tool clearly marks where each assumption is introduced and provides references to the underlying literature (Sutton & Biblarz, Humble, Henry & Larson, etc.).",
    ],
  },
  {
    id: "performance",
    title: "Performance Models",
    content: [
      "Chamber performance is computed from specified propellant combination, mixture ratio, and chamber pressure. The code evaluates characteristic velocity (c*), thrust coefficient (Cf), and specific impulse (Isp) using standard thermochemical relations.",
      "Users can override computed values with experimental data where available. All intermediate quantities — temperature ratios, pressure ratios, Mach numbers — are displayed alongside the governing equations.",
      "A parametric sweep mode allows variation of mixture ratio and chamber pressure across user-defined ranges, producing performance maps for trade study analysis.",
    ],
  },
  {
    id: "nozzle",
    title: "Nozzle Design",
    content: [
      "The nozzle contour generator implements the Rao thrust-optimized parabolic (TOP) method. The user specifies expansion ratio, fractional nozzle length (as a percentage of a 15° half-angle conical nozzle), and upstream/downstream wall angles.",
      "The resulting contour is computed as a cubic Bézier curve fitted to the Rao optimum. Control points are displayed and can be manually adjusted for design exploration.",
      "Conical nozzle geometry is also available as a baseline comparison. Divergence correction factors are computed automatically for both contour types.",
    ],
  },
  {
    id: "geometry",
    title: "Geometry and Mesh Export",
    content: [
      "Complete engine geometry — from injector face through the chamber, convergent section, throat, and nozzle exit — is generated as a 2D axisymmetric profile.",
      "Export formats include CSV point clouds, DXF line profiles, and structured grid definitions compatible with common CFD preprocessing tools (Pointwise, GMSH, etc.).",
      "Grid clustering parameters can be specified for throat and wall regions to support boundary-layer-resolved CFD simulations. Default clustering ratios follow published best practices for compressible nozzle flow simulations.",
    ],
  },
];

const Documentation = () => {
  return (
    <Layout>
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
            Reference
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Documentation
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Technical reference for ImpulseLabs — covering theory, models, and
            usage.
          </p>
        </div>

        {/* Table of contents */}
        <nav className="mt-12 rounded-xl border border-border bg-card p-6">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">
            Contents
          </p>
          <ul className="space-y-2">
            {docSections.map((section, i) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="flex items-baseline gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="font-mono text-xs text-text-dim">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sections */}
        <div className="mt-16 space-y-20">
          {docSections.map((section, i) => (
            <section key={section.id} id={section.id}>
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-mono text-sm text-primary/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="text-2xl font-bold text-foreground">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-4 pl-10">
                {section.content.map((paragraph, j) => (
                  <p
                    key={j}
                    className="text-base leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Documentation;
