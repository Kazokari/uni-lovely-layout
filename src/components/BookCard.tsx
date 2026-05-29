import { ArrowUpRight } from "lucide-react";
import type { Book } from "@/lib/books";

export function BookCard({ book, index }: { book: Book; index?: number }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 p-5 transition-colors hover:border-primary/40">
      {typeof index === "number" && (
        <span className="absolute right-5 top-5 text-xs text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
      )}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-muted">
        <img
          src={book.cover}
          alt={book.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className={`absolute left-3 top-3 ${book.isNew ? "badge-tag" : "badge-cream"}`}>
          {book.volume}
        </span>
      </div>
      <div className="mt-5 flex flex-1 flex-col">
        <span className="chip self-start">{book.category}</span>
        <h3 className="mt-3 font-display text-xl leading-tight">
          {book.title.split(":")[0]}
          {book.title.includes(":") && (
            <span className="text-italic-serif text-gradient">:{book.title.split(":").slice(1).join(":")}</span>
          )}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{book.desc}</p>
        <div className="mt-5 flex items-end justify-between border-t border-border/60 pt-4">
          <span className="font-display text-2xl text-cream">{book.price}</span>
          <a
            href={book.amazon}
            target="_blank"
            rel="noreferrer"
            className="pill-btn !py-2 !text-xs"
          >
            Comprar <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}
