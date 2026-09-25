import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Zap,
  Handshake,
  Laptop,
  ArrowRight,
  FileDown,
  Usb,
  Check,
  Video,
  Users,
  User,
  Building2,
  Scale,
  Calculator,
  Monitor,
} from "lucide-react";

import heroImage from "@/assets/hero-certificado.jpg";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { WhatsappIcon } from "@/components/landing/whatsapp-icon";
import { Products } from "@/components/landing/products";
import { Faq } from "@/components/landing/faq";
import { WA_GENERIC, WA_HELP, WA_VIDEO } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  component: Index,
  validateSearch: (search): { tipo?: "pf" | "pj" } => {
    const tipo = search["tipo"];
    return tipo === "pj" || tipo === "pf" ? { tipo } : {};
  },
  head: () => ({
    meta: [
      { title: "IF Certifica | Certificado Digital A1 e A3" },
      {
        name: "description",
        content:
          "Certificado digital A1 e A3 para Pessoa Física e Jurídica. Atendimento especializado, emissão por videoconferência e praticidade. Fale com a IF Certifica.",
      },
      { property: "og:title", content: "IF Certifica | Certificado Digital A1 e A3" },
      {
        property: "og:description",
        content:
          "Certificado digital A1 e A3 para PF e PJ, com atendimento especializado pelo WhatsApp e emissão por videoconferência.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ifcertifica.com.br/" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://ifcertifica.com.br/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "IF Certifica",
          description: "Venda e emissão de certificados digitais A1 e A3 para PF e PJ.",
          telephone: "+5561996295122",
        }),
      },
    ],
  }),
});

const benefits = [
  {
    icon: ShieldCheck,
    title: "Segurança",
    text: "Atendimento e processo voltados para uma emissão segura do certificado digital.",
  },
  {
    icon: Zap,
    title: "Agilidade",
    text: "Facilite o processo de emissão ou renovação do seu certificado.",
  },
  {
    icon: Laptop,
    title: "Praticidade",
    text: "Escolha a solução adequada para sua necessidade.",
  },
  {
    icon: Handshake,
    title: "Atendimento especializado",
    text: "Conte com suporte durante o processo.",
  },
];

const steps = [
  { n: "01", t: "Escolha", d: "Escolha seu certificado A1 ou A3, PF ou PJ." },
  { n: "02", t: "Fale conosco", d: "Entre em contato pelo WhatsApp." },
  {
    n: "03",
    t: "Validação",
    d: "Receba orientação sobre o processo de validação e documentação necessária.",
  },
  { n: "04", t: "Emissão", d: "Conclua o processo e tenha seu certificado digital." },
];

const quickHighlights = [
  { icon: FileDown, text: "Opções A1 e A3" },
  { icon: Users, text: "Pessoa Física e Jurídica" },
  { icon: Video, text: "Emissão por videoconferência" },
  { icon: Handshake, text: "Ajuda na escolha" },
  { icon: WhatsappIcon, text: "Atendimento pelo WhatsApp" },
  { icon: ShieldCheck, text: "Processo seguro" },
];

const scenarios = [
  {
    icon: User,
    title: "Profissional autônomo ou pessoa física",
    text: "Se você usa o certificado com frequência em sistemas digitais, o A1 pode ser mais prático. Se prefere armazenamento físico e não usa todo dia, o A3 também pode ser uma boa opção.",
  },
  {
    icon: Scale,
    title: "Advogado",
    text: "Para assinaturas digitais e acesso a sistemas jurídicos, o A1 tende a ser mais ágil no dia a dia. A escolha final depende de como você utiliza o certificado e das exigências dos sistemas que usa.",
  },
  {
    icon: Building2,
    title: "Empresa (PJ)",
    text: "Empresas que usam certificado em sistemas contábeis, emissão de notas fiscais e outras plataformas geralmente encontram no A1 mais praticidade e agilidade.",
  },
  {
    icon: Calculator,
    title: "Contador ou contabilidade",
    text: "O A1 costuma ser mais conveniente quando o certificado precisa ser utilizado frequentemente em diferentes sistemas e processos digitais.",
  },
  {
    icon: Monitor,
    title: "Diferentes computadores ou sistemas",
    text: "O A1 pode ser mais prático para quem precisa acessar o certificado em vários sistemas. O A3 exige o dispositivo físico, o que pode ser uma vantagem em segurança, mas menos prático em alguns casos.",
  },
];

function Index() {
  const { tipo } = Route.useSearch();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />

      {/* HERO */}
      <section id="inicio" className="relative bg-navy text-white">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(60%_60%_at_80%_10%,color-mix(in_oklab,var(--brand)_35%,transparent),transparent)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-bold tracking-[0.18em] text-white/80">
                CERTIFICADO DIGITAL
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-whats/15 px-3 py-1.5 text-xs font-bold tracking-[0.12em] text-whats">
                <Video className="h-3.5 w-3.5" /> EMISSÃO POR VIDEOCONFERÊNCIA
              </span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Seu certificado digital sem complicação.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              A1 e A3 para Pessoa Física e Jurídica, com atendimento especializado do início ao
              fim.
            </p>

            <p className="mt-4 flex max-w-xl items-start gap-2 border-l-4 border-whats bg-white/5 px-4 py-3 text-sm font-bold leading-relaxed text-white sm:text-base">
              <Video className="mt-0.5 h-5 w-5 shrink-0 text-whats" />
              Atendimento presencial em Brasília-DF ou por videoconferência para todo o Brasil.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={WA_GENERIC}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-whats"
              >
                <WhatsappIcon className="h-5 w-5" />
                QUERO MEU CERTIFICADO
              </a>
              <a
                href={WA_HELP}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-ghost-light"
              >
                Não sei qual escolher
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {quickHighlights.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white/85"
                >
                  <item.icon className="h-4 w-4 shrink-0 text-whats" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img
                src={heroImage}
                alt="Composição de certificado digital: cartão com chip, escudo de segurança, assinatura digital e token USB"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Products initialTab={tipo === "pj" ? "pj" : "pf"} />

      {/* DESTAQUE DE PREÇO */}
      <section className="section-pad bg-surface">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="card-soft p-6 sm:p-10">
            <h2 className="text-center text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
              Por apenas R$ 20 a mais, você pode ter 2 anos de validade.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { t: "A3 Pessoa Física", one: "250,00", two: "270,00" },
                { t: "A3 Pessoa Jurídica", one: "290,00", two: "310,00" },
              ].map((r) => (
                <div key={r.t} className="rounded-2xl bg-surface p-5">
                  <p className="text-sm font-bold text-navy">{r.t}</p>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">1 ano</p>
                      <p className="text-xl font-bold text-muted-foreground">R$ {r.one}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
                    <div className="text-right">
                      <p className="text-xs font-semibold text-primary">2 anos</p>
                      <p className="text-2xl font-extrabold text-navy">R$ {r.two}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Por que escolher a IF Certifica?
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <article key={b.title} className="card-soft p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                  <b.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-extrabold text-navy">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="section-pad bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Como funciona
          </h2>
          <div className="relative mt-12">
            <div className="absolute left-6 top-0 hidden h-px w-full bg-border lg:block" />
            <div className="grid gap-6 lg:grid-cols-4">
              {steps.map((s) => (
                <div key={s.n} className="relative lg:pt-8">
                  <span className="absolute left-0 top-0 hidden h-3 w-3 -translate-y-1/2 rounded-full bg-primary lg:block" />
                  <p className="text-sm font-extrabold tracking-widest text-primary">{s.n}</p>
                  <h3 className="mt-2 text-lg font-extrabold text-navy">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESTAQUE VIDEOCONFERÊNCIA */}
      <section className="section-pad bg-navy text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklab,var(--brand)_35%,transparent),transparent)]" />
            <div className="relative mx-auto max-w-2xl">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-whats/15 text-whats">
                <Video className="h-7 w-7" />
              </span>
              <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Emita seu certificado digital sem sair de casa.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/75">
                A emissão pode ser feita por videoconferência, de qualquer lugar do Brasil, ou
                presencialmente em Brasília-DF.
              </p>
              <a
                href={WA_VIDEO}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-whats mt-8"
              >
                <WhatsappIcon className="h-5 w-5" />
                Agendar minha emissão
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* A1 x A3 DETALHADO */}
      <section id="diferenca" className="section-pad bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Qual a diferença entre os certificados?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
            Entenda de forma simples como funcionam os certificados A1 e A3 e descubra qual se
            encaixa melhor na sua rotina.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="card-soft flex flex-col p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                  <FileDown className="h-5 w-5" />
                </span>
                <h3 className="text-2xl font-extrabold text-navy">Certificado A1</h3>
              </div>
              <div className="mt-6 flex-1 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  O <strong className="text-navy">Certificado Digital A1</strong> é armazenado como
                  um arquivo no computador, celular ou outro dispositivo compatível.
                </p>
                <p>
                  Ele costuma ter <strong className="text-navy">validade de 1 ano</strong> e é muito
                  prático para quem utiliza o certificado com frequência em sistemas, emissão de
                  notas fiscais, plataformas contábeis e outros serviços digitais.
                </p>
                <p>
                  Por ser um arquivo digital, é importante fazer o{" "}
                  <strong className="text-navy">armazenamento e backup de forma segura</strong>,
                  garantindo que você não perca o acesso aos seus documentos e sistemas.
                </p>
              </div>
              <div className="mt-6 rounded-xl bg-accent/50 p-4">
                <p className="text-sm font-bold text-navy">Ideal para:</p>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  {[
                    "Quem usa o certificado diariamente em sistemas",
                    "Empresas e contadores que acessam várias plataformas",
                    "Quem busca praticidade no dia a dia",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="card-soft flex flex-col p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                  <Usb className="h-5 w-5" />
                </span>
                <h3 className="text-2xl font-extrabold text-navy">Certificado A3</h3>
              </div>
              <div className="mt-6 flex-1 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p>
                  O <strong className="text-navy">Certificado Digital A3</strong> é armazenado em um{" "}
                  <strong className="text-navy">dispositivo físico</strong>, como um token USB ou
                  cartão com chip.
                </p>
                <p>
                  Ele pode ter validade de <strong className="text-navy">1 ou 2 anos</strong>,
                  conforme a modalidade contratada. Para utilizá-lo, é necessário ter o dispositivo
                  em mãos.
                </p>
                <p>
                  Por depender de um dispositivo físico, ele pode oferecer mais segurança em alguns
                  cenários, mas exige cuidado para não perder ou danificar o token ou cartão.
                </p>
              </div>
              <div className="mt-6 rounded-xl bg-accent/50 p-4">
                <p className="text-sm font-bold text-navy">Ideal para:</p>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  {[
                    "Quem prefere armazenamento físico",
                    "Profissionais que não usam o certificado todos os dias",
                    "Quem quer opções de 1 ou 2 anos de validade",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* QUAL ESCOLHER - CENÁRIOS */}
      <section className="section-pad bg-surface">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Qual certificado escolher?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
            Veja alguns cenários práticos para entender qual opção pode fazer mais sentido para você.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {scenarios.map((s) => (
              <article key={s.title} className="card-soft p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-extrabold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA PÓS-EXPLICAÇÕES */}
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Ainda está em dúvida sobre qual certificado escolher?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Entre em contato conosco e agende a emissão do seu certificado. Nossa equipe poderá
            orientar você sobre a opção mais adequada para sua necessidade.
          </p>
          <a
            href={WA_HELP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-whats mt-8"
          >
            <WhatsappIcon className="h-5 w-5" />
            Falar com a IF Certifica
          </a>
        </div>
      </section>

      <Faq />

      {/* CTA FINAL */}
      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Precisa do seu certificado digital?
          </h2>
          <p className="mt-4 text-base text-white/70">
            Fale com a IF Certifica e descubra a opção ideal para você.
          </p>
          <a
            href={WA_HELP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-whats mt-8"
          >
            <WhatsappIcon className="h-5 w-5" />
            FALAR COM UM ESPECIALISTA NO WHATSAPP
          </a>
        </div>
      </section>

      <SiteFooter />

      {/* WhatsApp fixo mobile */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
        <a
          href={WA_GENERIC}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-base btn-whats w-full"
        >
          <WhatsappIcon className="h-5 w-5" />
          Falar no WhatsApp
        </a>
      </div>
    </div>
  );
}
