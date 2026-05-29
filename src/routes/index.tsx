import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BookOpen, Sparkles } from "lucide-react";
import { books, collections } from "@/lib/books";
import { BookCard } from "@/components/BookCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carlos Botelho — Livraria do Autor" },
      { name: "description", content: "Coleções de modulação terapêutica, peptídeos e literatura por Carlos Augusto de Oliveira Botelho." },
    ],
  }),
  component: Index,
});

function Index() {
  const launches = books.filter((b) => b.isNew).slice(0, 5);
  const bestsellers = books.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-warm-glow opacity-90" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-primary-glow" />
        <div className="relative mx-auto max-w-7xl px-5 pb-28 pt-20 sm:px-8 sm:pb-40 sm:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="chip mx-auto"><Sparkles className="mr-1 h-3 w-3 text-primary" /> Novos lançamentos disponíveis</span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-7xl">
              O conhecimento
              <br />
              que <span className="text-italic-serif text-primary">impulsiona</span>
              <br />
              sua <span className="text-italic-serif">carreira</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground sm:text-base">
              Descubra livros que transformam a prática clínica, a pesquisa científica e o desenvolvimento profissional — em português e inglês.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link to="/catalogo" className="pill-btn">Explorar catálogo <ArrowUpRight className="h-4 w-4" /></Link>
              <Link to="/lancamentos" className="pill-btn-ghost">Ver lançamentos</Link>
            </div>

            {/* Floating chips */}
            <div className="pointer-events-none relative mt-12 hidden sm:block">
              <span className="absolute -left-4 top-0 badge-tag rotate-[-8deg]">Autor</span>
              <span className="absolute right-0 top-10 badge-cream rotate-[6deg]">Best Seller</span>
              <span className="absolute -bottom-4 left-1/3 badge-tag rotate-[4deg]">15+ Livros</span>
            </div>
          </div>

          {/* Book strip */}
          <div className="relative mt-20 flex items-end justify-center gap-3 sm:mt-28 sm:gap-5">
            {launches.slice(0, 5).map((b, i) => (
              <div
                key={b.id}
                style={{ transform: `rotate(${(i - 2) * 4}deg) translateY(${Math.abs(i - 2) * 8}px)` }}
                className="aspect-[2/3] w-20 overflow-hidden rounded-lg border border-border shadow-2xl sm:w-32 md:w-40"
              >
                <img src={b.cover} alt={b.title} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLEÇÕES */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="chip"><BookOpen className="mr-1.5 h-3 w-3 text-primary" /> Coleções</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">
              Explore por <span className="text-italic-serif text-cream">coleção</span>
            </h2>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              Séries cuidadosamente organizadas — do fundamento clínico à literatura sensível.
            </p>
          </div>
          <Link to="/catalogo" className="hidden pill-btn sm:inline-flex">Ver catálogo</Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((c, i) => (
            <Link
              key={c.id}
              to="/catalogo"
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition-all hover:border-primary/50 hover:bg-card"
            >
              <span className="absolute right-5 top-5 text-xs text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <BookOpen className="h-5 w-5" />
              </div>
              <div className="mt-10">
                <h3 className="font-display text-2xl">
                  {c.name.split(" ")[0]} <span className="text-italic-serif text-cream">{c.name.split(" ").slice(1).join(" ")}</span>
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.count} {c.count === 1 ? "livro" : "livros"}</p>
              </div>
              <ArrowUpRight className="absolute bottom-6 right-6 h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </section>

      {/* LANÇAMENTOS */}
      <section className="border-t border-border/60 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="chip">Lançamentos</span>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">
                Novidades <span className="text-italic-serif text-primary">fresquinhas</span>
              </h2>
            </div>
            <Link to="/lancamentos" className="pill-btn-ghost hidden sm:inline-flex">Ver todos</Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {launches.slice(0, 4).map((b, i) => <BookCard key={b.id} book={b} index={i} />)}
          </div>
        </div>
      </section>

      {/* MAIS VENDIDOS */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <span className="chip">Mais Vendidos</span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">
              Favoritos dos <span className="text-italic-serif text-cream">leitores</span>
            </h2>
          </div>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bestsellers.map((b, i) => <BookCard key={b.id} book={b} index={i} />)}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="border-t border-border/60 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <span className="chip">Depoimentos</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            O que dizem os <span className="text-italic-serif text-primary">leitores</span>
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { q: "A coleção transformou minha prática clínica. Referência obrigatória para quem trabalha com medicina personalizada.", n: "Dra. Ana Souza", r: "Médica Integrativa" },
              { q: "Conteúdo científico denso e acessível ao mesmo tempo. Os protocolos são extremamente bem fundamentados.", n: "Prof. Ricardo Lima", r: "Pesquisador em Biotecnologia" },
              { q: "Os livros me deram uma visão completamente nova sobre peptídeos terapêuticos. Leitura indispensável.", n: "Maria Eduarda Ferreira", r: "Estudante de Medicina" },
            ].map((t) => (
              <figure key={t.n} className="rounded-2xl border border-border bg-card/60 p-6">
                <blockquote className="font-display text-xl leading-snug text-cream">
                  <span className="text-italic-serif text-primary">"</span>
                  {t.q}
                  <span className="text-italic-serif text-primary">"</span>
                </blockquote>
                <figcaption className="mt-6 border-t border-border/60 pt-4">
                  <p className="text-sm font-medium">{t.n}</p>
                  <p className="text-xs text-muted-foreground">{t.r}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
