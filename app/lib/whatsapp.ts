import { contactChannels } from "./contact-channels";

export function getWhatsAppUrl(message: string) {
  const number = contactChannels.phoneInternational.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
