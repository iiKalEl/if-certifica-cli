import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WhatsappIcon } from "@/components/landing/whatsapp-icon";
import { WA_GENERIC } from "@/lib/whatsapp";
import logoAsset from "@/assets/logo-if-certifica.png.asset.json";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Certificados", href: "#certificados" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Dúvidas", href: "#duvidas" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#inicio" className="flex min-w-0 items-center gap-2">
          <img
            src={logoAsset.url}
            alt="IF Certifica"
            width={320}
            height={78}
            className="h-16 w-auto shrink-0"
          />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={WA_GENERIC}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base btn-whats hidden !px-4 !py-2.5 text-sm sm:inline-flex"
          >
            <WhatsappIcon className="h-4 w-4" />
            Falar no WhatsApp
          </a>
          <a
            href={WA_GENERIC}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            className="btn-base btn-whats !p-2.5 sm:hidden"
          >
            <WhatsappIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border text-navy md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-3 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-2 py-3 text-sm font-semibold text-navy"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}