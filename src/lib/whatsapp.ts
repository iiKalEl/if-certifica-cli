export const WHATSAPP_NUMBER = "5561996295122";
export const WHATSAPP_DISPLAY = "(61) 99629-5122";

export function wa(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WA_GENERIC = wa("Olá! Vim pelo site e quero meu certificado digital.");
export const WA_HELP = wa("Olá! Vim pelo site e quero ajuda para escolher meu certificado.");
export const WA_VIDEO = wa("Olá! Quero agendar minha emissão por videoconferência.");