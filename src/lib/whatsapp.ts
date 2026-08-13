export const WHATSAPP_NUMBER = "5561996295122";
export const WHATSAPP_DISPLAY = "(61) 99629-5122";

export function wa(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_GENERIC = wa("IF Certifica");
export const WA_HELP = wa("IF Certifica");