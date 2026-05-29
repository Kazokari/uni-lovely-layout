import { Link, useRouterState } from "@tanstack/react-router";
import { Lock } from "lucide-react";

const nav = [
  { to: "/", label: "Início" },
  { to: "/lancamentos", label: "Lançamentos" },
  { to: "/catalogo", label: "Catálogo" },
  { to: "/sobre", label: "Sobre" },
];

export function SiteHeader() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="font-display text-lg tracking-tight">
          Carlos Botelho<span className="text-italic-serif text-gradient-warm">.</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => {
            const active = path === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <button aria-label="Área restrita" className="hidden h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground sm:flex">
            <Lock className="h-4 w-4" />
          </button>
          <a href="#contato" className="pill-btn-ghost">Contato</a>
        </div>
      </div>
    </header>
  );
}
