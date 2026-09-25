import { createFileRoute } from "@tanstack/react-router";
import { Database, Eye, ShieldCheck, UserRoundCheck } from "lucide-react";

import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { WhatsappIcon } from "@/components/landing/whatsapp-icon";
import { WA_HELP, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export const Route = createFileRoute("/privacidade")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Política de Privacidade | IF Certifica" },
      {
        name: "description",
        content: "Saiba como a IF Certifica coleta, utiliza e protege seus dados pessoais conforme a LGPD.",
      },
      { property: "og:title", content: "Política de Privacidade | IF Certifica" },
      {
        property: "og:description",
        content: "Informações sobre o tratamento e a proteção de dados pessoais pela IF Certifica.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ifcertifica.com.br/privacidade" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://ifcertifica.com.br/privacidade" }],
  }),
});

const sections = [
  {
    icon: UserRoundCheck,
    title: "Responsável pelo tratamento dos dados",
    content: (
      <p>
        O responsável pelos dados pessoais é <strong className="text-navy">Igor Fernandes (IF Certifica)</strong>.
        Para assuntos relacionados à privacidade, entre em contato pelo e-mail{" "}
        <a className="font-semibold text-primary hover:underline" href="mailto:igorffernandes.certificados@gmail.com">
          igorffernandes.certificados@gmail.com
        </a>{" "}
        ou pelo WhatsApp {WHATSAPP_DISPLAY}.
      </p>
    ),
  },
  {
    icon: Database,
    title: "Dados coletados e finalidade",
    content: (
      <div className="space-y-3">
        <p>
          Podemos coletar nome, telefone, mensagens enviadas pelo WhatsApp e os documentos de identificação necessários para a emissão do certificado digital.
        </p>
        <p>
          Esses dados são utilizados para atendimento, validação de identidade e emissão do certificado digital junto à AC Consulti, conforme o padrão ICP-Brasil.
        </p>
      </div>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Compartilhamento e proteção",
    content: (
      <div className="space-y-3">
        <p>Os documentos são compartilhados somente com a Autoridade Certificadora, quando necessário para realizar a emissão.</p>
        <p><strong className="text-navy">A IF Certifica não vende dados pessoais a terceiros.</strong></p>
      </div>
    ),
  },
  {
    icon: Eye,
    title: "Cookies e ferramentas de medição",
    content: (
      <div className="space-y-3">
        <p>Com sua permissão, o site usa a tag do Google Ads para medir visitas e cliques nos links do WhatsApp que vieram de anúncios e ajudar a avaliar e otimizar os anúncios. O Google pode receber informações sobre a visita, o dispositivo, cookies e o clique no link; não enviamos o conteúdo da mensagem do WhatsApp nem dados de identificação do cliente no evento de conversão.</p>
        <p>Em regiões onde é exigido consentimento, a tag só é carregada após a aceitação. Você pode recusar ou retirar sua permissão a qualquer momento em “Preferências de cookies”, disponível em todas as páginas. Fora dessas regiões, a medição é ativada por padrão, respeitando recusas e preferências de privacidade aplicáveis.</p>
        <p>Guardamos no seu navegador um registro da escolha, da data e da versão do aviso apresentado. Ao mudar de escolha, mantemos o histórico da aceitação e da retirada. A recusa ou retirada impede novos eventos de medição deste site; cliques e impressões dos anúncios continuam sendo contabilizados pelo Google.</p>
      </div>
    ),
  },
];

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className="bg-navy py-14 text-white sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <p className="text-sm font-bold text-whats">LGPD E PROTEÇÃO DE DADOS</p>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Política de Privacidade</h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-white/75">Entenda como seus dados pessoais são utilizados e protegidos durante o atendimento e a emissão do certificado digital.</p>
            <p className="mt-6 text-sm font-semibold text-white/60">Última atualização: setembro de 2026</p>
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto max-w-4xl space-y-5 px-4 sm:px-6">
            {sections.map((section) => (
              <article key={section.title} className="card-soft p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                    <section.icon className="h-5 w-5" />
                  </span>
                  <h2 className="text-xl font-extrabold text-navy">{section.title}</h2>
                </div>
                <div className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{section.content}</div>
              </article>
            ))}

            <article className="border-l-4 border-primary bg-surface p-6 sm:p-8">
              <h2 className="text-xl font-extrabold text-navy">Seus direitos</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Você pode solicitar acesso, correção ou exclusão dos seus dados pessoais pelo e-mail ou WhatsApp informados nesta página.
              </p>
              <a href={WA_HELP} target="_blank" rel="noopener noreferrer" className="btn-base btn-whats mt-6">
                <WhatsappIcon className="h-5 w-5" />
                Falar com a IF Certifica
              </a>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}