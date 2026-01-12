import { MessageCircle } from "lucide-react";

const PHONE_NUMBER = "9750106378";

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in your A/C, Fridge, or Washing Machine services. Please let me know how I can get assistance."
    );
    const whatsappUrl = `https://wa.me/91${PHONE_NUMBER}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed top-20 right-6 z-50 bg-whatsapp text-whatsapp-foreground p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" fill="currentColor" />
    </button>
  );
};

export default WhatsAppButton;
