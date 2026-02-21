import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const solarProducts = [
  {
    img: "@/assets/hero1.jpg",
    en: "Solar Panels",
    fr: "Panneaux Solaires",
    descEn: "High-efficiency photovoltaic panels adapted to Chad's climate for maximum energy output.",
    descFr: "Panneaux photovoltaïques haute efficacité adaptés au climat tchadien.",
  },
  {
    img: "@/assets/hero2.jpg",
    en: "Hybrid Inverters",
    fr: "Onduleurs Hybrides",
    descEn: "Off-grid and on-grid inverter systems for reliable and continuous power supply.",
    descFr: "Systèmes d'onduleurs hors-réseau et sur réseau pour une alimentation fiable.",
  },
  {
    img: "@/assets/hero3.jpg",
    en: "Energy Storage",
    fr: "Stockage d'Énergie",
    descEn: "Advanced battery solutions ensuring power availability day and night.",
    descFr: "Solutions de batteries avancées garantissant la disponibilité de l'énergie.",
  },
];

const securityProducts = [
  {
    img: "@/assets/hero4.jpg",
    en: "CCTV Surveillance",
    fr: "Vidéosurveillance CCTV",
    descEn: "HD remote surveillance systems for complete monitoring of your premises.",
    descFr: "Systèmes de surveillance HD à distance pour une surveillance complète.",
  },
  {
    img: "@/assets/hero5.jpg",
    en: "Access Control",
    fr: "Contrôle d'Accès",
    descEn: "RFID and biometric access systems to secure and manage entry points.",
    descFr: "Systèmes d'accès RFID et biométriques pour sécuriser les points d'entrée.",
  },
  {
    img: "@/assets/hero6.jpg",
    en: "Fire Detection",
    fr: "Détection Incendie",
    descEn: "Early fire detection and alerting systems to protect lives and property.",
    descFr: "Systèmes de détection et d'alerte incendie précoces.",
  },
];

const ProductCard = ({ product }: { product: typeof solarProducts[0] }) => {
  const { t } = useLanguage();
  return (
    <div className="glass-card overflow-hidden group">
      <div className="overflow-hidden aspect-[3/2]">
        <img
          src={product.img}
          alt={t(product.en, product.fr)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h4 className="text-lg font-semibold mb-2">{t(product.en, product.fr)}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {t(product.descEn, product.descFr)}
        </p>
      </div>
    </div>
  );
};

const Products = () => {
  const { t } = useLanguage();
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="products">
      <div ref={ref} className={`section-container fade-up ${visible ? "visible" : ""}`}>
        <div className="section-heading">
          <h2>{t("Our Products", "Nos Produits")}</h2>
        </div>

        {/* Solar */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 pl-4 border-l-4 border-accent">
            {t("Solar Energy Solutions", "Solutions d'Énergie Solaire")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solarProducts.map((p, i) => (
              <ProductCard key={i} product={p} />
            ))}
          </div>
        </div>

        {/* Security */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 pl-4 border-l-4 border-accent">
            {t("Electronic Security Systems", "Systèmes de Sécurité Électroniques")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {securityProducts.map((p, i) => (
              <ProductCard key={i} product={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;