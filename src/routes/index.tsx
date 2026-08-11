import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Zap,
  Handshake,
  Laptop,
  MessageCircle,
  ArrowRight,
  FileDown,
  Usb,
} from "lucide-react";

import heroImage from "@/assets/hero-certificado.jpg";
import { SiteHeader } from "@/components/landing/site-header";
import { WhatsappIcon } from "@/components/landing/whatsapp-icon";
import { Products } from "@/components/landing/products";
import { Faq } from "@/components/landing/faq";
import { WA_GENERIC, WA_HELP, WHATSAPP_DISPLAY, wa } from "@/lib/whatsapp";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "IF Certifica | Certificado Digital A1 e A3" },
      {
        name: "description",
        content:
          "Certificado digital A1 e A3 para Pessoa Física e Jurídica. Atendimento especializado, segurança e praticidade. Fale com a IF Certifica.",
      },
      { property: "og:title", content: "IF Certifica | Certificado Digital A1 e A3" },
      {
        property: "og:description",
        content:
          "Certificado digital A1 e A3 para PF e PJ, com atendimento especializado pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />

      {/* HERO */}
      <section id="inicio" className="relative bg-navy text-white">
        <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(60%_60%_at_80%_10%,color-mix(in_oklab,var(--brand)_35%,transparent),transparent)]" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-bold tracking-[0.18em] text-white/80">
              CERTIFICADO DIGITAL
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Seu certificado digital sem complicação.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              A1 e A3 para Pessoa Física e Jurídica, com atendimento especializado do início ao
              fim.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/5561996295122"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-whats"
              >
                <MessageCircle className="h-5 w-5" />
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

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75">
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-whats" /> Seguro
              </li>
              <li className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-whats" /> Ágil
              </li>
              <li className="flex items-center gap-2">
                <Handshake className="h-4 w-4 text-whats" /> Atendimento especializado
              </li>
            </ul>
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

      <Products />

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

      {/* EM DÚVIDA */}
      <section className="section-pad bg-background">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Não sabe qual certificado escolher?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            A1, A3, PF, PJ... Pode parecer complicado. Nossa equipe pode orientar você e indicar a
            opção mais adequada para sua necessidade.
          </p>
          <a
            href={WA_HELP}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-whats mt-8"
          >
            <MessageCircle className="h-5 w-5" />
            ME AJUDE A ESCOLHER
          </a>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="section-pad bg-surface">
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
      <section id="como-funciona" className="section-pad bg-background">
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

      {/* A1 x A3 */}
      <section className="section-pad bg-surface">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            A1 ou A3: qual escolher?
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                icon: FileDown,
                title: "A1",
                items: [
                  "Arquivo digital",
                  "Armazenado digitalmente",
                  "Prático para uso em computador",
                  "Validade de 1 ano",
                  "Ideal para quem busca praticidade",
                ],
              },
              {
                icon: Usb,
                title: "A3",
                items: [
                  "Token ou cartão",
                  "Dispositivo físico incluso",
                  "Mais opções de validade",
                  "Disponível por 1 ou 2 anos",
                  "Ideal para quem prefere utilizar dispositivo físico",
                ],
              },
            ].map((c) => (
              <article key={c.title} className="card-soft p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-2xl font-extrabold text-navy">{c.title}</h3>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {c.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center gap-4 text-center">
            <p className="text-sm text-muted-foreground">
              Ainda está em dúvida? Fale com nossa equipe.
            </p>
            <a
              href={WA_HELP}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-outline-brand"
            >
              FALAR COM ESPECIALISTA
            </a>
          </div>
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
            href={WA_GENERIC}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-whats mt-8"
          >
            <MessageCircle className="h-5 w-5" />
            FALAR COM UM ESPECIALISTA NO WHATSAPP
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background py-12 pb-28 md:pb-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-navy text-sm font-extrabold text-white">
                IF
              </span>
              <span className="text-base font-extrabold text-navy">IF Certifica</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">AR TechSign | AC Consulti</p>
          </div>

          <nav className="space-y-2 text-sm">
            <p className="font-bold text-navy">Navegação</p>
            <a href="#certificados" className="block text-muted-foreground hover:text-primary">
              Certificados
            </a>
            <a href="#como-funciona" className="block text-muted-foreground hover:text-primary">
              Como funciona
            </a>
            <a href="#duvidas" className="block text-muted-foreground hover:text-primary">
              FAQ
            </a>
            <a href="#" className="block text-muted-foreground hover:text-primary">
              Política de Privacidade
            </a>
            <a href="#" className="block text-muted-foreground hover:text-primary">
              Termos de Uso
            </a>
          </nav>

          <div className="space-y-2 text-sm">
            <p className="font-bold text-navy">Contato</p>
            <a
              href={WA_GENERIC}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary"
            >
              <WhatsappIcon className="h-5 w-5 text-whats" />
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl px-4 text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} IF Certifica. Todos os direitos reservados.
        </p>
      </footer>

      {/* WhatsApp fixo mobile */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
        <a
          href={wa("Olá! Gostaria de falar sobre certificado digital.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-base btn-whats w-full"
        >
          <MessageCircle className="h-5 w-5" />
          Falar no WhatsApp
        </a>
      </div>
    </div>
  );
}
