import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "944450167";
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a comunidade Árvore de Jesus.");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center animate-bounce"
      aria-label="Falar connosco no WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
