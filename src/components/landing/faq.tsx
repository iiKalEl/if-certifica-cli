import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O que é um certificado digital?",
    a: "É a sua identidade em meio digital. Ele permite assinar documentos e acessar sistemas eletrônicos comprovando quem você é.",
  },
  {
    q: "Qual a diferença entre A1 e A3?",
    a: "O A1 é um arquivo digital instalado no computador. O A3 é armazenado em um dispositivo físico (token ou cartão), que já vem incluso.",
  },
  {
    q: "Qual certificado devo escolher?",
    a: "Depende de como você pretende usar. Fale com a nossa equipe pelo WhatsApp que orientamos você na escolha.",
  },
  {
    q: "Qual a validade do certificado?",
    a: "O A1 tem validade de 1 ano. O A3 está disponível nas opções de 1 ou 2 anos.",
  },
  {
    q: "O token/cartão do A3 está incluso?",
    a: "Sim. Nos certificados A3 o dispositivo físico (token ou cartão) já está incluso no valor informado.",
  },
  {
    q: "Posso renovar meu certificado?",
    a: "Sim. Atendemos tanto novas emissões quanto renovações. Fale conosco pelo WhatsApp para orientação.",
  },
  {
    q: "Quais documentos são necessários?",
    a: "A documentação varia conforme o tipo de certificado (PF ou PJ). Nossa equipe informa a lista exata durante o atendimento.",
  },
  {
    q: "Como funciona a validação?",
    a: "Após a escolha do certificado, você recebe orientação sobre a etapa de validação e sobre a documentação necessária.",
  },
  {
    q: "Posso tirar dúvidas pelo WhatsApp?",
    a: "Sim. O WhatsApp é o nosso principal canal de atendimento, sem necessidade de preencher formulários.",
  },
  {
    q: "O certificado serve para Pessoa Física e Jurídica?",
    a: "Sim. Trabalhamos com certificados A1 e A3 tanto para Pessoa Física quanto para Pessoa Jurídica.",
  },
];

export function Faq() {
  return (
    <section id="duvidas" className="section-pad bg-surface">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Perguntas frequentes
        </h2>
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="card-soft border-b px-5 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left text-base font-bold text-navy hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}