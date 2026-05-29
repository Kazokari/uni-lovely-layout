import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre o Autor — Carlos Botelho" },
      { name: "description", content: "Carlos Augusto de Oliveira Botelho — autor, pesquisador e profissional multidisciplinar." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <span className="chip">Sobre o Autor</span>
      <h1 className="mt-4 font-display text-5xl sm:text-7xl">
        Carlos Augusto de
        <br />
        <span className="text-italic-serif text-primary">Oliveira Botelho</span>
      </h1>

      <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-start">
        <div className="overflow-hidden rounded-3xl border border-border bg-card">
          <img
            src="https://hjpnuwvbjxeocoiuuged.supabase.co/storage/v1/object/public/author-photos/official-1776686445257.jpeg"
            alt="Carlos Augusto de Oliveira Botelho"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <div>
          <p className="font-display text-2xl leading-relaxed text-cream">
            Autor, pesquisador e profissional multidisciplinar com vasta experiência nas áreas de
            <span className="text-italic-serif text-primary"> Saúde, Direito e Literatura</span>.
          </p>
          <p className="mt-6 text-muted-foreground">
            Ao longo de sua carreira, dedicou-se à produção de conhecimento acessível e relevante,
            publicando mais de 15 livros em português e inglês. Seus livros são reconhecidos pela
            clareza, profundidade científica e compromisso com a transformação através do conhecimento.
          </p>
          <p className="mt-4 text-muted-foreground">
            Especialista em modulação terapêutica e peptídeos, suas obras são referência para
            profissionais de saúde e pesquisadores.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { n: "15+", l: "livros publicados" },
              { n: "2", l: "idiomas" },
              { n: "Best", l: "Seller Amazon" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-card/60 p-5">
                <p className="font-display text-4xl text-primary">{s.n}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
