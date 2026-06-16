import { createFileRoute, Link } from "@tanstack/react-router";
import { BookMarked, FileCheck2, PenLine, ScrollText, Users, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/editora")({
  head: () => ({
    meta: [
      { title: "Editora — Carlos Botelho" },
      {
        name: "description",
        content:
          "A Editora Carlos Botelho publica obras científicas, acadêmicas e literárias — com curadoria editorial, registro de ISBN e produção completa.",
      },
      { property: "og:title", content: "Editora — Carlos Botelho" },
      {
        property: "og:description",
        content:
          "Conheça a Editora: submissão de originais, conselho editorial e serviços de publicação.",
      },
    ],
  }),
  component: EditoraPage,
});

const services = [
  {
    icon: PenLine,
    title: "Revisão & Preparação",
    desc: "Revisão ortográfica, gramatical e técnica realizada por especialistas das áreas envolvidas.",
  },
  {
    icon: BookMarked,
    title: "Diagramação & Capa",
    desc: "Projeto gráfico, diagramação miolo e design de capa com identidade editorial profissional.",
  },
  {
    icon: FileCheck2,
    title: "ISBN & Ficha Catalográfica",
    desc: "Registro oficial da obra, atribuição de ISBN e elaboração da ficha catalográfica.",
  },
  {
    icon: ScrollText,
    title: "Impressão & Distribuição",
    desc: "Produção sob demanda e distribuição em formato físico e digital pelos nossos canais.",
  },
];

const steps = [
  { n: "01", t: "Submissão", d: "Envio do original junto a uma carta de apresentação e currículo do autor." },
  { n: "02", t: "Avaliação", d: "Análise pelo Conselho Editorial — relevância, originalidade e rigor científico." },
  { n: "03", t: "Parecer", d: "Devolutiva ao autor em até 60 dias, com aprovação, ajustes ou recusa fundamentada." },
  { n: "04", t: "Produção", d: "Edição, diagramação, registro e publicação da obra aprovada." },
];

function EditoraPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-warm-glow opacity-80" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
          <span className="chip">
            <BookMarked className="mr-1.5 h-3 w-3 text-primary" /> Editora Carlos Botelho
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] sm:text-7xl">
            Publicamos o <span className="text-italic-serif text-gradient-warm">conhecimento</span> que move a ciência
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted-foreground">
            Mais do que uma livraria, somos também uma editora dedicada a produzir obras
            acadêmicas, científicas e literárias — com curadoria rigorosa, padrão editorial
            elevado e total apoio ao autor, do manuscrito ao leitor.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#submissao" className="pill-btn">
              Enviar original <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link to="/catalogo" className="pill-btn-ghost">
              Ver obras publicadas
            </Link>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="max-w-2xl">
          <span className="chip">Serviços editoriais</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            Tudo o que sua obra precisa <span className="text-italic-serif text-gradient">em um só lugar</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card/60 p-6 transition-all hover:border-primary/50 hover:bg-card"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONSELHO EDITORIAL */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 md:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="chip">
              <Users className="mr-1.5 h-3 w-3 text-primary" /> Conselho Editorial
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">
              Curadoria <span className="text-italic-serif text-gradient">científica</span>
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Cada obra é avaliada por um corpo de pesquisadores e docentes com titulação e
              reconhecida atuação em suas áreas — garantindo a integridade científica e a
              qualidade acadêmica das publicações.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Ciências da Saúde",
              "Pesquisa Clínica",
              "Bioquímica e Peptídeos",
              "Literatura e Humanidades",
            ].map((area) => (
              <li
                key={area}
                className="rounded-2xl border border-border bg-background p-5"
              >
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Área</p>
                <p className="mt-1 font-display text-lg">{area}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SUBMISSÃO */}
      <section id="submissao" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="max-w-2xl">
          <span className="chip">Submissão de originais</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            Como <span className="text-italic-serif text-gradient-warm">publicar</span> conosco
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Recebemos manuscritos inéditos nas áreas de atuação da editora. Conheça as etapas
            do processo editorial:
          </p>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="rounded-2xl border border-border bg-card/60 p-6">
              <span className="font-display text-3xl text-gradient">{s.n}</span>
              <h3 className="mt-4 font-display text-xl">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-card/60 p-6">
          <p className="flex-1 text-sm text-muted-foreground">
            Pronto para submeter sua obra? Envie seu original e a equipe editorial entrará em
            contato.
          </p>
          <a href="mailto:editora@carlosbotelho.com.br" className="pill-btn">
            Enviar manuscrito <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
