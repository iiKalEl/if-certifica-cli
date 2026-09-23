import { createFileRoute } from "@tanstack/react-router";
import { BadgeDollarSign, FileCheck2, Headphones, ScrollText } from "lucide-react";

import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { WhatsappIcon } from "@/components/landing/whatsapp-icon";
import { WA_GENERIC, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export const Route = createFileRoute("/termos")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Termos de Uso | IF Certifica" },
      {
        name: "description",
        content: "Conheça os termos aplicáveis aos serviços, preços e emissão de certificados digitais da IF Certifica.",
      },
      { property: "og:title", content: "Termos de Uso | IF Certifica" },
      {
        property: "og:description",
        content: "Condições dos serviços e da emissão de certificados digitais pela IF Certifica.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ifcertifica.com.br/termos" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://ifcertifica.com.br/termos" }],
  }),
});

const terms = [
  {
    icon: ScrollText,
    title: "Sobre o site",
    text: "Este site apresenta os serviços e preços de certificados digitais oferecidos pela IF Certifica.",
  },
  {
    icon: BadgeDollarSign,
    title: "Preços",
    text: "Os preços apresentados podem ser alterados sem aviso prévio. Para a contratação, será considerado o valor confirmado durante o atendimento.",
  },
  {
    icon: FileCheck2,
    title: "Emissão do certificado",
    text: "A emissão depende da validação de identidade e da apresentação dos documentos exigidos pela Autoridade Certificadora AC Consulti, conforme as regras da ICP-Brasil.",
  },
  {
    icon: Headphones,
    title: "Atendimento",
    text: `O atendimento é realizado pelo WhatsApp ${WHATSAPP_DISPLAY} e pelo e-mail igorffernandes.certificados@gmail.com.`,
  },
];

function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="bg-navy py-14 text-white sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <p className="text-sm font-bold text-whats">CONDIÇÕES DE USO</p>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Termos de Uso</h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-white/75">Confira as condições relacionadas às informações, aos preços e ao processo de emissão apresentados pela IF Certifica.</p>
            <p className="mt-6 text-sm font-semibold text-white/60">Última atualização: setembro de 2026</p>
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="grid gap-5 sm:grid-cols-2">
              {terms.map((term) => (
                <article key={term.title} className="card-soft p-6 sm:p-8">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-primary">
                    <term.icon className="h-5 w-5" />
                  </span>
                  <h2 className="mt-5 text-xl font-extrabold text-navy">{term.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{term.text}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 border-l-4 border-primary bg-surface p-6 sm:p-8">
              <h2 className="text-xl font-extrabold text-navy">Fale conosco</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">Em caso de dúvida sobre os serviços ou estas condições, entre em contato com a IF Certifica.</p>
              <a href={WA_GENERIC} target="_blank" rel="noopener noreferrer" className="btn-base btn-whats mt-6">
                <WhatsappIcon className="h-5 w-5" />
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}