import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer id="contato" className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl">
            Carlos Botelho<span className="text-italic-serif text-gradient-warm">.</span>
          </p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Conhecimento que <span className="text-italic-serif text-gradient">transforma</span> a prática clínica e a sensibilidade humana.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Navegar</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">Início</Link></li>
            <li><Link to="/lancamentos" className="hover:text-primary">Lançamentos</Link></li>
            <li><Link to="/catalogo" className="hover:text-primary">Catálogo</Link></li>
            <li><Link to="/sobre" className="hover:text-primary">Sobre</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Contato</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>contato@unigoyazes.edu.br</li>
            <li>UniGoyazes — Brasil</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:px-8">
          <span>© {new Date().getFullYear()} Carlos Augusto de Oliveira Botelho</span>
          <span>Disponível na Amazon · Best Seller</span>
        </div>
      </div>
    </footer>
  );
}
