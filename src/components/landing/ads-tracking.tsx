import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ADS_CONVERSION, CONSENT_KEY, NOTICE_TEXT, currentChoice, requiresConsent, saveChoice, updateGoogleConsent, type ConsentChoice } from "@/lib/ads-consent";

export function AdsTracking() {
  const [regionNeedsConsent, setRegionNeedsConsent] = useState(true);
  const [regionReady, setRegionReady] = useState(false);
  const [choice, setChoice] = useState<ConsentChoice>();
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    let active = true;
    const sync = () => {
      setChoice(currentChoice());
      void requiresConsent().then((needsConsent) => {
        if (!active) return;
        const latest = currentChoice();
        setRegionNeedsConsent(needsConsent);
        setRegionReady(true);
        if ((navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl || latest === "rejected") {
          updateGoogleConsent("rejected");
        } else if (latest === "accepted") {
          updateGoogleConsent("accepted");
        }
      });
    };
    const onStorage = (event: StorageEvent) => { if (event.key === CONSENT_KEY) sync(); };
    window.addEventListener("storage", onStorage);
    window.addEventListener("ifcertifica-consent-changed", sync);
    sync();
    return () => {
      active = false;
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("ifcertifica-consent-changed", sync);
    };
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const element = event.target;
      if (!(element instanceof Element)) return;
      const link = element.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      try {
        if (new URL(link.href).hostname !== "wa.me") return;
      } catch { return; }
      window.gtag?.("event", "conversion", {
        send_to: ADS_CONVERSION,
        value: 50.0,
        currency: "BRL",
      });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  const decide = (next: ConsentChoice) => {
    // Acknowledging the default outside consent regions does not override an earlier refusal.
    const saved = next === "acknowledged" && choice === "rejected" ? "rejected" : next;
    saveChoice(saved);
    setChoice(saved);
    setSettingsOpen(false);
  };

  return (
    <>
      <Button
        type="button"
        variant="link"
        size="sm"
        className="fixed bottom-16 right-3 z-40 bg-background text-muted-foreground shadow-sm md:bottom-3"
        onClick={() => setSettingsOpen(true)}
      >
        Preferências de cookies
      </Button>
      {regionReady && (!choice || settingsOpen) && (
        <div role="dialog" aria-label="Preferências de privacidade" className="fixed inset-x-0 bottom-16 z-[60] border-t border-border bg-background p-4 shadow-lg md:bottom-0">
          <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl text-sm text-foreground">
              <p className="font-bold">Privacidade e anúncios</p>
              <p className="mt-1 text-muted-foreground">
                 {regionNeedsConsent ? "Com sua permissão, " : "Neste site, "}{NOTICE_TEXT} <a className="underline" href="/privacidade">Política de Privacidade</a>.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              <Button type="button" variant="outline" onClick={() => decide("rejected")}>Recusar</Button>
              <Button type="button" onClick={() => decide(regionNeedsConsent ? "accepted" : "acknowledged")}>{regionNeedsConsent ? "Aceitar" : "Ok"}</Button>
              {settingsOpen && choice === "rejected" && !regionNeedsConsent && <Button type="button" variant="outline" onClick={() => decide("accepted")}>Permitir medição</Button>}
              {settingsOpen && <Button type="button" variant="ghost" onClick={() => setSettingsOpen(false)}>Fechar</Button>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}