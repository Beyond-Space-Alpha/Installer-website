import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/docs", label: "Documentation" },
  { to: "/about", label: "About" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <nav className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="h-7 w-7 rounded-md bg-primary/20 border border-primary/30 flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-primary" />
          </div>
          <span className="font-mono text-sm font-semibold tracking-wide text-foreground">
            ImpulseLabs
          </span>
        </Link>

        <ul className="flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`px-4 py-2 text-sm rounded-md transition-colors ${
                  location.pathname === link.to
                    ? "text-foreground bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
