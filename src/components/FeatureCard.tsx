interface FeatureCardProps {
  title: string;
  description: string;
  tag: string;
}

const FeatureCard = ({ title, description, tag }: FeatureCardProps) => {
  return (
    <div className="group rounded-xl border border-border bg-card p-8 transition-colors hover:border-glow/20 hover:bg-surface-hover">
      <div className="mb-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-primary/70">
          {tag}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
