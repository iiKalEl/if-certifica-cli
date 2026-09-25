export const ADS_ID = "AW-18388428574";
export const ADS_CONVERSION = "AW-18388428574/cO3VCLW09YQdEJ7OpMBE";
export const NOTICE_VERSION = "ads-whatsapp-consent-v2-2026-09";
export const CONSENT_KEY = "ifcertifica-ads-consent";
export const NOTICE_TEXT = "Usamos o Google Ads para medir visitas e cliques no WhatsApp e melhorar anúncios. Você pode recusar ou mudar sua escolha a qualquer momento.";
export const CONSENT_REGIONS = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH"];

export type ConsentChoice = "accepted" | "rejected" | "acknowledged";
export type ConsentRecord = {
  visitorId: string;
  history: Array<{ choice: ConsentChoice; at: string; noticeVersion: string }>;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const consentCountries = new Set(CONSENT_REGIONS);

let regionPromise: Promise<boolean> | undefined;
let sessionChoice: ConsentChoice | undefined;

export function requiresConsent(): Promise<boolean> {
  if (!regionPromise) {
    regionPromise = (async () => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 2000);
        try {
          const response = await fetch("/cdn-cgi/trace", { signal: controller.signal, cache: "no-store" });
          if (!response.ok) return true;
          const country = (await response.text()).match(/^loc=([^\r\n]+)/m)?.[1]?.trim().toUpperCase();
          return !country || country === "XX" || country === "T1" || consentCountries.has(country);
        } finally {
          clearTimeout(timeout);
        }
      } catch {
        return true;
      }
    })();
  }
  return regionPromise;
}

export function getConsentRecord(): ConsentRecord | null {
  try {
    const parsed: unknown = JSON.parse(localStorage.getItem(CONSENT_KEY) ?? "null");
    if (parsed && typeof parsed === "object" && "visitorId" in parsed && "history" in parsed &&
        typeof parsed.visitorId === "string" && Array.isArray(parsed.history)) {
      return parsed as ConsentRecord;
    }
  } catch { /* Storage may be unavailable or empty. */ }
  return null;
}

export function currentChoice(): ConsentChoice | undefined {
  const history = getConsentRecord()?.history;
  const last = history?.[history.length - 1];
  return last?.choice === "accepted" || last?.choice === "rejected" || last?.choice === "acknowledged" ? last.choice : sessionChoice;
}

export function saveChoice(choice: ConsentChoice) {
  sessionChoice = choice;
  const previous = getConsentRecord();
  const record: ConsentRecord = {
    visitorId: previous?.visitorId ?? crypto.randomUUID(),
    history: [...(previous?.history ?? []), { choice, at: new Date().toISOString(), noticeVersion: NOTICE_VERSION }],
  };
  try { localStorage.setItem(CONSENT_KEY, JSON.stringify(record)); } catch { /* Still honor choice in this tab. */ }
  if (choice !== "acknowledged") updateGoogleConsent(choice);
  window.dispatchEvent(new CustomEvent("ifcertifica-consent-changed", { detail: choice }));
}

export function updateGoogleConsent(choice: ConsentChoice) {
  if (choice === "acknowledged") return;
  const state = choice === "accepted" ? "granted" : "denied";
  window.gtag?.("consent", "update", {
    ad_storage: state, ad_user_data: state, ad_personalization: state, analytics_storage: state,
  });
}