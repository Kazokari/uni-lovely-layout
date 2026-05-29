import { createFileRoute } from "@tanstack/react-router";
import { books } from "@/lib/books";
import { BookCard } from "@/components/BookCard";

export const Route = createFileRoute("/lancamentos")({
  head: () => ({
    meta: [
      { title: "Lançamentos — Carlos Botelho" },
      { name: "description", content: "Novos títulos e edições recentes da livraria de Carlos Botelho." },
    ],
  }),
  component: Page,
});

function Page() {
  const items = books.filter((b) => b.isNew);
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <span className="chip">Lançamentos</span>
      <h1 className="mt-4 font-display text-5xl sm:text-7xl">
        Novidades <span className="text-italic-serif text-primary">fresquinhas</span>
        <br />
        para <span className="text-italic-serif">você</span>
      </h1>
      <p className="mt-4 max-w-xl text-muted-foreground">
        Edições recém-publicadas em português e inglês, prontas para envio pela Amazon.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((b, i) => <BookCard key={b.id} book={b} index={i} />)}
      </div>
    </section>
  );
}
