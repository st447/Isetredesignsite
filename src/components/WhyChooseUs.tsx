import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Clock, Shield, Wrench } from "lucide-react";

const items = [
  { icon: Award, en: "Certified Experts", fr: "Experts Certifiés", descEn: "Our team consists of certified engineers and technicians with years of experience.", descFr: "Notre équipe est composée d'ingénieurs et techniciens certifiés avec des années d'expérience." },
  { icon: Clock, en: "24/7 Support", fr: "Support 24/7", descEn: "We provide round-the-clock customer support and maintenance services.", descFr: "Nous fournissons un support client et des services de maintenance 24h/24." },
  { icon: Shield, en: "Quality Guarantee", fr: "Garantie Qualité", descEn: "All our solutions come with warranty and quality assurance.", descFr: "Toutes nos solutions sont accompagnées d'une garantie et d'une assurance qualité." },
  { icon: Wrench, en: "Professional Installation", fr: "Installation Professionnelle", descEn: "Expert installation services ensuring optimal performance and safety.", descFr: "Services d'installation experts garantissant des performances et une sécurité optimales." },
];

const WhyChooseUs = () => {
  const { t } = useLanguage();
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="services">
      <div ref={ref} className={`section-container fade-up ${visible ? "visible" : ""}`}>
        <div className="section-heading">
          <h2>{t("Why Choose Us?", "Pourquoi Nous Choisir ?")}</h2>
          <p>{t("Trusted expertise across Chad and beyond", "Expertise de confiance au Tchad et au-delà")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="glass-card p-8 text-center group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-500">
                <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{t(item.en, item.fr)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(item.descEn, item.descFr)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
