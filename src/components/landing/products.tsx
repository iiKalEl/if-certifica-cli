import { useState } from "react";
import { Check, FileDown, Star, Usb } from "lucide-react";
import { wa } from "@/lib/whatsapp";

type Tab = "pf" | "pj";

const a1 = {
  pf: { label: "Pessoa Física", price: "130,00", cta: "QUERO MEU A1 PF", key: "A1 PF" },
  pj: { label: "Pessoa Jurídica", price: "180,00", cta: "QUERO MEU A1 PJ", key: "A1 PJ" },
};

const a3 = {
  pf: { label: "Pessoa Física", one: "250,00", two: "270,00", cta: "QUERO A3 PF", key: "A3 PF" },
  pj: { label: "Pessoa Jurídica", one: "290,00", two: "310,00", cta: "QUERO A3 PJ", key: "A3 PJ" },
};

const a1Bullets = (tab: Tab) => [
  "Validade de 1 ano",
  "Arquivo digital",
  tab === "pf" ? "Prático para instalação" : "Prático para empresas",
  "Ideal para uso em computador",
];

export function Products() {
  const [tab, setTab] = useState<Tab>("pf");
  const [validity, setValidity] = useState<"1" | "2">("2");

  const p1 = a1[tab];
  const p3 = a3[tab];
  const price3 = validity === "1" ? p3.one : p3.two;

  return (
    <section id="certificados" className="section-pad bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Encontre o certificado ideal para você
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Escolha entre A1 e A3 para Pessoa Física ou Jurídica.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-2xl bg-surface p-1">
            {(["pf", "pj"] as Tab[]).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`rounded-xl px-5 py-2.5 text-sm font-bold transition-colors ${
                  tab === t
                    ? "bg-navy text-white shadow-sm"
                    : "text-muted-foreground hover:text-navy"
                }`}
              >
                {t === "pf" ? "Pessoa Física" : "Pessoa Jurídica"}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* A1 */}
          <article className="card-soft flex flex-col p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                <FileDown className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-xl font-extrabold text-navy">Certificado Digital A1</h3>
                <p className="text-sm text-muted-foreground">{p1.label}</p>
              </div>
            </div>

            <div className="mt-6 flex items-end gap-1">
              <span className="text-sm font-semibold text-muted-foreground">R$</span>
              <span className="text-4xl font-extrabold tracking-tight text-navy">{p1.price}</span>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {a1Bullets(tab).map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <a
              href={wa(
                `Olá! Tenho interesse no Certificado Digital ${p1.key} no valor de R$ ${p1.price}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-whats mt-8 w-full"
            >
              {p1.cta}
            </a>
          </article>

          {/* A3 */}
          <article className="card-soft relative flex flex-col border-primary/30 p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                <Usb className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <h3 className="text-xl font-extrabold text-navy">Certificado Digital A3</h3>
                <p className="text-sm text-muted-foreground">{p3.label}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {(["1", "2"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setValidity(v)}
                  className={`rounded-xl border p-4 text-left transition-colors ${
                    validity === v
                      ? "border-primary bg-accent"
                      : "border-border hover:border-primary/40"
                  }`}
                >
                  <span className="block text-xs font-semibold text-muted-foreground">
                    {v === "1" ? "1 ano" : "2 anos"}
                  </span>
                  <span className="mt-1 block text-2xl font-extrabold text-navy">
                    R$ {v === "1" ? p3.one : p3.two}
                  </span>
                  {v === "2" && (
                    <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-navy px-2 py-1 text-[10px] font-bold tracking-wide text-white">
                      <Star className="h-3 w-3" /> MELHOR CUSTO-BENEFÍCIO
                    </span>
                  )}
                </button>
              ))}
            </div>

            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {["Token/cartão incluso", "Dispositivo físico incluso", "Opções de 1 ou 2 anos"].map(
                (b) => (
                  <li key={b} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{b}</span>
                  </li>
                ),
              )}
            </ul>

            <a
              href={wa(
                `Olá! Tenho interesse no Certificado Digital ${p3.key} com validade de ${
                  validity === "1" ? "1 ano" : "2 anos"
                } no valor de R$ ${price3}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-whats mt-8 w-full"
            >
              {p3.cta}
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}