import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Sun, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

// Import all hero images
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
import hero5 from "../assets/hero5.jpg";
import hero6 from "../assets/hero6.jpg";
import hero7 from "../assets/hero7.jpg";
import hero8 from "../assets/hero8.jpg";
import hero9 from "../assets/hero9.jpg";
import hero10 from "../assets/hero10.jpg";
import hero11 from "../assets/hero11.jpg";
import hero12 from "../assets/hero12.jpg";
import hero13 from "../assets/hero13.jpg";
import hero14 from "../assets/hero14.jpg";
import hero15 from "../assets/hero15.jpg";
import hero16 from "../assets/hero16.jpg";

const images = [
  hero1, hero2, hero3, hero4,
  hero5, hero6, hero7, hero8,
  hero9, hero10, hero11, hero12,
  hero13, hero14, hero15, hero16
];

const Hero = () => {
  const { t } = useLanguage();
  const [loaded, setLoaded] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setLoaded(true);

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Slider */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Hero"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container pt-32">
        <div className="max-w-3xl">
          <div
            className={`transition-all duration-1000 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div className="w-12 h-12 rounded-2xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                <Sun className="w-6 h-6 text-accent" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-primary-foreground leading-[1.05] mb-6">
              {t("Smart Security.", "Sécurité Intelligente.")}
              <br />
              <span className="text-accent">
                {t("Solar Energy.", "Énergie Solaire.")}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-10 leading-relaxed">
              {t(
                "Advanced electronic security systems and reliable solar solutions adapted to African environments for sustainable energy independence.",
                "Systèmes de sécurité électronique avancés et solutions solaires fiables adaptées aux environnements africains pour une indépendance énergétique durable."
              )}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#solutions" className="cta-button">
                {t("Our Solutions", "Nos Solutions")}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#about" className="cta-button-primary">
                {t("Learn More", "En Savoir Plus")}
              </a>
            </div>
          </div>

          {/* Stats */}
          <div
            className={`mt-20 grid grid-cols-3 gap-8 max-w-lg transition-all duration-1000 delay-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { num: "500+", label: t("Projects", "Projets") },
              { num: "24/7", label: t("Support", "Support") },
              { num: "10+", label: t("Years", "Ans") },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-accent">{stat.num}</p>
                <p className="text-sm text-primary-foreground/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;