const WHATSAPP_NUMBER = "919677031312";

export function generateWhatsAppLink(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function getProductInquiryMessage(productName: string): string {
  return `Hi Next Generation! I'm interested in your ${productName}. Could you please let me know if they're currently available?`;
}

export function getGeneralInquiryMessage(): string {
  return "Hi Next Generation! I'd like to know more about your collections.";
}
