import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { t } = useLanguage();
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="about" className="bg-card">
      <div ref={ref} className={`section-container fade-up ${visible ? "visible" : ""}`}>
        <div className="section-heading">
          <h2>{t("About ISET Integration SA", "À propos de ISET Integration SA")}</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t(
              "ISET INTEGRATION SA (Intelligent Security & Énergie du Tchad) is a professional systems integration company based in N'Djamena, Chad.",
              "ISET INTEGRATION SA (Intelligent Security & Énergie du Tchad) est une société professionnelle d'intégration de systèmes basée à N'Djamena, Tchad."
            )}
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t(
              "We specialize in solar energy solutions and electronic security systems including CCTV, access control, fire detection, alarms, and GPS tracking.",
              "Nous sommes spécialisés dans les solutions d'énergie solaire et les systèmes de sécurité électronique incluant CCTV, contrôle d'accès, détection incendie, alarmes et suivi GPS."
            )}
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {t(
              "Our mission is to deliver high-quality, reliable, and innovative solutions backed by experienced engineers and certified technicians.",
              "Notre mission est de fournir des solutions de haute qualité, fiables et innovantes, soutenues par des ingénieurs expérimentés et des techniciens certifiés."
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
