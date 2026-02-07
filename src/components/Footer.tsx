const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-6 w-6 rounded-md bg-primary/10 border border-primary/25 flex items-center justify-center">
              <span className="text-primary text-sm italic font-serif leading-none select-none" style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontStyle: 'italic' }}>
                I
              </span>
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
