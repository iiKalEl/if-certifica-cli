export const WHATSAPP_NUMBER = "5561996295122";
export const WHATSAPP_DISPLAY = "(61) 99629-5122";

export function wa(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_GENERIC = wa("Olá! Gostaria de saber mais sobre os certificados digitais.");
export const WA_HELP = wa("Olá! Preciso de ajuda para escolher meu certificado digital.");