export const ADS_ID = "AW-18388428574";
export const ADS_CONVERSION = "AW-18388428574/cO3VCLW09YQdEJ7OpMBE";
export const NOTICE_VERSION = "ads-whatsapp-2026-09";
export const CONSENT_KEY = "ifcertifica-ads-consent";

export type ConsentChoice = "accepted" | "rejected";
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

const consentCountries = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO", "GB", "UK", "CH", "BR",
]);

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
  return last?.choice === "accepted" || last?.choice === "rejected" ? last.choice : sessionChoice;
}

export function saveChoice(choice: ConsentChoice) {
  sessionChoice = choice;
  const previous = getConsentRecord();
  const record: ConsentRecord = {
    visitorId: previous?.visitorId ?? crypto.randomUUID(),
    history: [...(previous?.history ?? []), { choice, at: new Date().toISOString(), noticeVersion: NOTICE_VERSION }],
  };
  try { localStorage.setItem(CONSENT_KEY, JSON.stringify(record)); } catch { /* Still honor choice in this tab. */ }
  updateGoogleConsent(choice);
  window.dispatchEvent(new CustomEvent("ifcertifica-consent-changed", { detail: choice }));
}

export function updateGoogleConsent(choice: ConsentChoice) {
  const state = choice === "accepted" ? "granted" : "denied";
  window.gtag?.("consent", "update", {
    ad_storage: state, ad_user_data: state, ad_personalization: state,
  });
}

export function loadGoogleAds() {
  if (document.querySelector(`script[src="https://www.googletagmanager.com/gtag/js?id=${ADS_ID}"]`)) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => { window.dataLayer?.push(args); };
  window.gtag("consent", "default", {
    ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied",
  });
  window.gtag("consent", "update", {
    ad_storage: "granted", ad_user_data: "granted", ad_personalization: "granted",
  });
  window.gtag("js", new Date());
  window.gtag("config", ADS_ID);
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`;
  document.head.appendChild(script);
}