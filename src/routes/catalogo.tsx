import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { books, collections } from "@/lib/books";
import { BookCard } from "@/components/BookCard";

export const Route = createFileRoute("/catalogo")({
  head: () => ({
    meta: [
      { title: "Catálogo — Carlos Botelho" },
      { name: "description", content: "Catálogo completo de livros por coleção e categoria." },
    ],
  }),
  component: Page,
});

const categories = ["Todos", "Saúde", "Health", "Literatura", "Literature"];

function Page() {
  const [col, setCol] = useState<string>("todas");
  const [cat, setCat] = useState<string>("Todos");

  const filtered = useMemo(() => {
    return books.filter((b) => {
      const okCol = col === "todas" || b.collection === col;
      const okCat = cat === "Todos" || b.category === cat;
      return okCol && okCat;
    });
  }, [col, cat]);

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <span className="chip">Catálogo Completo</span>
      <h1 className="mt-4 font-display text-5xl sm:text-7xl">
        Explore <span className="text-italic-serif text-primary">todos</span>
        <br />
        os <span className="text-italic-serif">livros</span>
      </h1>

      <div className="mt-10 space-y-6">
        <div>
          <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Coleções</p>
          <div className="flex flex-wrap gap-2">
            <FilterChip label="Todas" active={col === "todas"} onClick={() => setCol("todas")} />
            {collections.map((c) => (
              <FilterChip key={c.id} label={c.name} active={col === c.id} onClick={() => setCol(c.id)} />
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Categorias</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <FilterChip key={c} label={c} active={cat === c} onClick={() => setCat(c)} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((b, i) => <BookCard key={b.id} book={b} index={i} />)}
      </div>
      {filtered.length === 0 && (
        <p className="mt-16 text-center text-muted-foreground">Nenhum livro nesse filtro.</p>
      )}
    </section>
  );
}

function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-card/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );
}
