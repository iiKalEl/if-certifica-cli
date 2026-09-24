import { Link } from "@tanstack/react-router";

import logoAsset from "@/assets/logo-if-certifica-v2.png.asset.json";
import { WhatsappIcon } from "@/components/landing/whatsapp-icon";
import { WA_GENERIC, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-12 pb-28 md:pb-12">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <Link to="/" aria-label="Ir para a página inicial da IF Certifica">
            <img
              src={logoAsset.url}
              alt="IF Certifica"
              width={640}
              height={158}
              className="h-44 w-auto max-w-full object-contain object-left"
            />
          </Link>
          <div className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
            <p>Certificados digitais ICP-Brasil emitidos pela AC Consulti.</p>
            <p>Atendimento presencial em Brasília-DF e por videoconferência para todo o Brasil.</p>
            <p>
              Responsável: Igor Fernandes ·{" "}
              <a
                href="mailto:igorffernandes.certificados@gmail.com"
                className="inline-block max-w-full whitespace-nowrap text-[13px] hover:text-primary sm:text-sm"
              >
                igorffernandes.certificados@gmail.com
              </a>
            </p>
          </div>
        </div>

        <nav className="space-y-2 text-sm" aria-label="Navegação do rodapé">
          <p className="font-bold text-navy">Navegação</p>
          <a href="/#certificados" className="block text-muted-foreground hover:text-primary">
            Certificados
          </a>
          <a href="/#como-funciona" className="block text-muted-foreground hover:text-primary">
            Como funciona
          </a>
          <a href="/#duvidas" className="block text-muted-foreground hover:text-primary">
            FAQ
          </a>
          <a href="/#diferenca" className="block text-muted-foreground hover:text-primary">
            Diferença A1 x A3
          </a>
          <Link to="/privacidade" className="block text-muted-foreground hover:text-primary">
            Política de Privacidade
          </Link>
          <Link to="/termos" className="block text-muted-foreground hover:text-primary">
            Termos de Uso
          </Link>
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
          <a
            href="mailto:igorffernandes.certificados@gmail.com"
            className="block max-w-full whitespace-nowrap text-[13px] text-muted-foreground hover:text-primary sm:text-sm"
          >
            igorffernandes.certificados@gmail.com
          </a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl px-4 text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} IF Certifica. Todos os direitos reservados.
      </p>
    </footer>
  );
}