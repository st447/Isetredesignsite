import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";

const navItems = [
  { id: "about", en: "About", fr: "À propos" },
  { id: "services", en: "Services", fr: "Services" },
  { id: "solutions", en: "Solutions", fr: "Solutions" },
  { id: "products", en: "Products", fr: "Produits" },
  { id: "projects", en: "Projects", fr: "Projets" },
  { id: "faq", en: "FAQ", fr: "FAQ" },
  { id: "team", en: "Team", fr: "Équipe" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const SiteHeader = () => {
  const { lang, setLang, t } = useLanguage();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-card/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">

        {/* Brand */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-3 group">
          <img src={logo} alt="ISET Logo" className="h-10 w-auto object-contain" />
          <span className={`font-semibold text-lg tracking-tight transition-colors duration-300 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            ISET Integration
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                scrolled ? "text-muted-foreground" : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {t(item.en, item.fr)}
            </button>
          ))}
          {/* Contact Link */}
          <button
            onClick={() => navigate("/contact")}
            className={`text-sm font-medium transition-colors duration-300 hover:text-accent ${
              scrolled ? "text-accent" : "text-accent"
            }`}
          >
            {t("Contact", "Contact")}
          </button>
        </nav>

        {/* Lang + Mobile toggle */}
        <div className="flex items-center gap-3">
          <div className="flex rounded-full overflow-hidden border border-primary/20">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 text-xs font-semibold transition-all duration-300 ${
                lang === "en"
                  ? "bg-primary text-primary-foreground"
                  : scrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("fr")}
              className={`px-3 py-1.5 text-xs font-semibold transition-all duration-300 ${
                lang === "fr"
                  ? "bg-primary text-primary-foreground"
                  : scrolled ? "text-muted-foreground hover:text-foreground" : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              FR
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-xl border-b border-border shadow-lg animate-slide-up">
          <nav className="flex flex-col py-4 px-6 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { scrollToSection(item.id); setMenuOpen(false); }}
                className="py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors border-b border-border/50 last:border-0 text-left"
              >
                {t(item.en, item.fr)}
              </button>
            ))}
            {/* Contact Link Mobile */}
            <button
              onClick={() => { navigate("/contact"); setMenuOpen(false); }}
              className="py-3 text-sm font-medium text-accent hover:text-primary transition-colors text-left"
            >
              {t("Contact", "Contact")}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;