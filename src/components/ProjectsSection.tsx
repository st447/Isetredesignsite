import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

import hero7 from "../assets/hero7.jpg";
import hero8 from "../assets/hero8.jpg";
import hero9 from "../assets/hero9.jpg";

const projects = [
  {
    img: hero7,
    en: "Corporate Office Security",
    fr: "Sécurité Bureau Corporate",
    descEn: "Complete CCTV and access control installation for a 5-story office building in N'Djamena.",
    descFr: "Installation complète de CCTV et contrôle d'accès pour un immeuble de 5 étages à N'Djamena.",
  },
  {
    img: hero8,
    en: "Residential Solar System",
    fr: "Système Solaire Résidentiel",
    descEn: "10kW solar installation with battery backup for a luxury villa.",
    descFr: "Installation solaire de 10 kW avec batterie de secours pour une villa de luxe.",
  },
  {
    img: hero9,
    en: "Warehouse Security",
    fr: "Sécurité Entrepôt",
    descEn: "Fire alarm and GPS tracking system for a logistics warehouse.",
    descFr: "Système d'alarme incendie et suivi GPS pour un entrepôt logistique.",
  },
];

const testimonials = [
  {
    text: "Excellent service! The team was professional and the installation was flawless. Highly recommended!",
    author: "Mohammed A.",
    role: { en: "Business Owner", fr: "Propriétaire d'entreprise" },
  },
  {
    text: "Our solar system has been working perfectly for over a year. Great quality and support!",
    author: "Sarah K.",
    role: { en: "Homeowner", fr: "Propriétaire" },
  },
  {
    text: "The security system gives us peace of mind. The 24/7 monitoring is very reliable.",
    author: "Jean-Paul M.",
    role: { en: "Property Manager", fr: "Gestionnaire immobilier" },
  },
];

const ProjectsSection = () => {
  const { t } = useLanguage();
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="projects" className="bg-card">
      <div ref={ref} className={`section-container fade-up ${visible ? "visible" : ""}`}>
        <div className="section-heading">
          <h2>{t("Projects & Testimonials", "Projets & Témoignages")}</h2>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {projects.map((p, i) => (
            <div key={i} className="glass-card overflow-hidden group">
              <div className="overflow-hidden aspect-[3/2]">
                <img
                  src={p.img}
                  alt={t(p.en, p.fr)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{t(p.en, p.fr)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(p.descEn, p.descFr)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((tm, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="italic text-primary-foreground/90 leading-relaxed mb-6">"{tm.text}"</p>
              <p className="font-semibold text-sm text-right">
                — {tm.author}, {t(tm.role.en, tm.role.fr)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;