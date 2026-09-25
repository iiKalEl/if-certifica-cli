import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ADS_CONVERSION, CONSENT_KEY, currentChoice, loadGoogleAds, requiresConsent, saveChoice, type ConsentChoice } from "@/lib/ads-consent";

export function AdsTracking() {
  const [regionNeedsConsent, setRegionNeedsConsent] = useState(true);
  const [regionReady, setRegionReady] = useState(false);
  const [choice, setChoice] = useState<ConsentChoice>();
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    let active = true;
    const sync = () => {
      const latest = currentChoice();
      setChoice(latest);
      void requiresConsent().then((needsConsent) => {
        if (!active) return;
        setRegionNeedsConsent(needsConsent);
        setRegionReady(true);
        if (latest === "accepted" || (!needsConsent && latest !== "rejected" && navigator.globalPrivacyControl !== true)) {
          loadGoogleAds();
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
      const link = element.closest("a[href]");
      if (!link) return;
      try {
        if (new URL(link.href).hostname !== "wa.me") return;
      } catch { return; }
      // Check the latest choice at send time, including withdrawals from another tab.
      const latest = currentChoice();
      if (!regionReady || !(latest === "accepted" || (!regionNeedsConsent && latest !== "rejected" && navigator.globalPrivacyControl !== true))) return;
      window.gtag?.("event", "conversion", {
        send_to: ADS_CONVERSION,
        value: 50.0,
        currency: "BRL",
      });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [regionReady, regionNeedsConsent]);

  const decide = (next: ConsentChoice) => {
    saveChoice(next);
    setChoice(next);
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
      {regionReady && ((regionNeedsConsent && !choice) || settingsOpen) && (
        <div role="dialog" aria-label="Preferências de privacidade" className="fixed inset-x-0 bottom-16 z-[60] border-t border-border bg-background p-4 shadow-lg md:bottom-0">
          <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl text-sm text-foreground">
              <p className="font-bold">Privacidade e anúncios</p>
              <p className="mt-1 text-muted-foreground">
                Com sua permissão, usamos cookies e dados de visitas e cliques no WhatsApp para medir e melhorar anúncios no Google Ads. Você pode recusar ou mudar sua escolha a qualquer momento. <a className="underline" href="/privacidade">Política de Privacidade</a>.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              <Button type="button" variant="outline" onClick={() => decide("rejected")}>Recusar</Button>
              <Button type="button" onClick={() => decide("accepted")}>Aceitar</Button>
              {settingsOpen && <Button type="button" variant="ghost" onClick={() => setSettingsOpen(false)}>Fechar</Button>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}