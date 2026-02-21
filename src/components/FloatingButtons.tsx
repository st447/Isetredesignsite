import { useState, useEffect } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handler = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* FABs */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href="https://wa.me/23568376110"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full flex items-center justify-center text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          style={{ background: "#25d366" }}
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
        <a
          href="tel:+23568376110"
          className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          aria-label="Call Us"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 left-6 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg transition-all duration-300 z-50 ${
          showScroll ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
};

export default FloatingButtons;
