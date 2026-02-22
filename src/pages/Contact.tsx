import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowLeft, Send } from "lucide-react";

const Contact = () => {
  const { t, lang, setLang } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const infoCards = [
    { icon: <MapPin className="w-6 h-6" />, titleEn: "Address", titleFr: "Adresse", content: "N'Djamena, Chad" },
    { icon: <Phone className="w-6 h-6" />, titleEn: "Phone", titleFr: "Téléphone", content: "+235 68 37 61 10", href: "tel:+23568376110" },
    { icon: <Mail className="w-6 h-6" />, titleEn: "Email", titleFr: "Email", content: "isetintegrationsa@gmail.com", href: "mailto:isetintegrationsa@gmail.com" },
    { icon: <Clock className="w-6 h-6" />, titleEn: "Business Hours", titleFr: "Horaires", content: t("Mon – Sat: 8:00 AM – 6:00 PM", "Lun – Sam : 8h00 – 18h00") },
  ];

  const services = [
    { value: "solar",  en: "Solar Energy",     fr: "Énergie Solaire" },
    { value: "cctv",   en: "CCTV Systems",     fr: "Systèmes CCTV" },
    { value: "access", en: "Access Control",   fr: "Contrôle d'Accès" },
    { value: "fire",   en: "Fire Detection",   fr: "Détection Incendie" },
    { value: "alarm",  en: "Alarm Systems",    fr: "Systèmes d'Alarme" },
    { value: "gps",    en: "GPS Tracking",     fr: "Suivi GPS" },
    { value: "audit",  en: "Security Audit",   fr: "Audit Sécurité" },
    { value: "other",  en: "Other",            fr: "Autre" },
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-card/80 backdrop-blur-xl border-b border-border shadow-sm">
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-foreground font-semibold text-lg hover:text-primary transition-colors">
            ISET Integration
          </a>
          <div className="flex rounded-full overflow-hidden border border-primary/20">
            <button onClick={() => setLang("en")} className={`px-3 py-1.5 text-xs font-semibold transition-all ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>EN</button>
            <button onClick={() => setLang("fr")} className={`px-3 py-1.5 text-xs font-semibold transition-all ${lang === "fr" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>FR</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-20 flex items-center justify-center overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative z-10 text-center px-6">
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            {t("Get in Touch", "Contactez-Nous")}
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto">
            {t(
              "We're here to help. Reach out to us for any inquiries or project discussions.",
              "Nous sommes là pour vous aider. Contactez-nous pour toute demande ou discussion de projet."
            )}
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-20">

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {infoCards.map((card, i) => (
            <div key={i} className="glass-card p-6 flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                {card.icon}
              </div>
              <h4 className="font-semibold text-sm text-foreground">{t(card.titleEn, card.titleFr)}</h4>
              {card.href ? (
                <a href={card.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{card.content}</a>
              ) : (
                <p className="text-sm text-muted-foreground">{card.content}</p>
              )}
            </div>
          ))}
        </div>

        {/* Form + Side */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 glass-card p-8 flex flex-col gap-5">
            <h3 className="text-2xl font-semibold mb-2">{t("Send Us a Message", "Envoyez-Nous un Message")}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-muted-foreground">{t("Full Name *", "Nom Complet *")}</label>
                <input
                  type="text" required value={formData.name}
                  onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-muted-foreground">Email *</label>
                <input
                  type="email" required value={formData.email}
                  onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-muted-foreground">{t("Phone Number", "Numéro de Téléphone")}</label>
                <input
                  type="tel" value={formData.phone}
                  onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-muted-foreground">{t("Service *", "Service *")}</label>
                <select
                  required value={formData.service}
                  onChange={e => setFormData(p => ({ ...p, service: e.target.value }))}
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                >
                  <option value="">{t("Select a service", "Sélectionner un service")}</option>
                  {services.map(s => (
                    <option key={s.value} value={s.value}>{t(s.en, s.fr)}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-muted-foreground">{t("Your Message *", "Votre Message *")}</label>
              <textarea
                rows={5} required value={formData.message}
                onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="cta-button self-start mt-2 disabled:opacity-60"
            >
              {status === "sending" ? t("Sending…", "Envoi…") : t("Send Message", "Envoyer le Message")}
              <Send className="w-4 h-4" />
            </button>

            {status === "sent" && (
              <p className="text-sm font-medium" style={{ color: "#00a854" }}>
                ✅ {t("Message sent! We will contact you soon.", "Message envoyé ! Nous vous contacterons bientôt.")}
              </p>
            )}
          </form>

          {/* Side */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="text-2xl font-semibold mb-2">{t("Connect With Us", "Rejoignez-Nous")}</h3>

            <a href="https://wa.me/23568376110" target="_blank" rel="noreferrer"
              className="glass-card p-5 flex items-center gap-4 hover:border-green-500/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500/20 transition-colors">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-sm">WhatsApp</p>
                <p className="text-xs text-muted-foreground">{t("Chat with us directly", "Discutez avec nous directement")}</p>
              </div>
            </a>

            <a href="tel:+23568376110"
              className="glass-card p-5 flex items-center gap-4 hover:border-primary/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-sm">{t("Call Us", "Appelez-Nous")}</p>
                <p className="text-xs text-muted-foreground">+235 68 37 61 10</p>
              </div>
            </a>

            <a href="mailto:isetintegrationsa@gmail.com"
              className="glass-card p-5 flex items-center gap-4 hover:border-accent/50 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-sm">Email</p>
                <p className="text-xs text-muted-foreground">isetintegrationsa@gmail.com</p>
              </div>
            </a>

            <a href="/"
              className="glass-card p-5 flex items-center gap-4 hover:border-primary/50 transition-colors group mt-2">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-sm">{t("Back to Home", "Retour à l'Accueil")}</p>
              </div>
            </a>
          </div>
        </div>
      </main>

      {/* Floating buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a href="https://wa.me/23568376110" target="_blank" rel="noreferrer"
          className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-colors">
          <MessageCircle className="w-5 h-5" />
        </a>
        <a href="tel:+23568376110"
          className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg hover:opacity-90 transition-opacity">
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center">
        <p className="text-sm text-muted-foreground">
          {t("© 2026 ISET INTEGRATION SA – N'Djamena, Chad", "© 2026 ISET INTEGRATION SA – N'Djamena, Tchad")}
        </p>
      </footer>
    </div>
  );
};

export default Contact;