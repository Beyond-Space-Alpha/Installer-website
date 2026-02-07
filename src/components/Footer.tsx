const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-5 w-5 rounded-sm bg-primary/20 border border-primary/30 flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            </div>
            <span className="font-mono text-xs font-medium tracking-wide text-muted-foreground">
              ImpulseLabs
            </span>
          </div>
          <p className="font-mono text-xs text-text-dim">
            © Beyond Space. Open-source under MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
