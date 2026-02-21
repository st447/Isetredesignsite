import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const solarProducts = [
  { img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=600&h=400&fit=crop", en: "Solar Panels", fr: "Panneaux Solaires", descEn: "High-efficiency photovoltaic panels adapted to Chad's climate for maximum energy output.", descFr: "Panneaux photovoltaïques haute efficacité adaptés au climat tchadien." },
  { img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop", en: "Hybrid Inverters", fr: "Onduleurs Hybrides", descEn: "Off-grid and on-grid inverter systems for reliable and continuous power supply.", descFr: "Systèmes d'onduleurs hors-réseau et sur réseau pour une alimentation fiable." },
  { img: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=600&h=400&fit=crop", en: "Energy Storage", fr: "Stockage d'Énergie", descEn: "Advanced battery solutions ensuring power availability day and night.", descFr: "Solutions de batteries avancées garantissant la disponibilité de l'énergie." },
];

const securityProducts = [
  { img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=600&h=400&fit=crop", en: "CCTV Surveillance", fr: "Vidéosurveillance CCTV", descEn: "HD remote surveillance systems for complete monitoring of your premises.", descFr: "Systèmes de surveillance HD à distance pour une surveillance complète." },
  { img: "https://images.unsplash.com/photo-1580910051074-7f9d41c3d7ef?w=600&h=400&fit=crop", en: "Access Control", fr: "Contrôle d'Accès", descEn: "RFID and biometric access systems to secure and manage entry points.", descFr: "Systèmes d'accès RFID et biométriques pour sécuriser les points d'entrée." },
  { img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=600&h=400&fit=crop", en: "Fire Detection", fr: "Détection Incendie", descEn: "Early fire detection and alerting systems to protect lives and property.", descFr: "Systèmes de détection et d'alerte incendie précoces." },
];

const ProductCard = ({ product }: { product: typeof solarProducts[0] }) => {
  const { t } = useLanguage();
  return (
    <div className="glass-card overflow-hidden group">
      <div className="overflow-hidden aspect-[3/2]">
        <img
          src={product.img}
          alt={product.en}
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
            {solarProducts.map((p, i) => <ProductCard key={i} product={p} />)}
          </div>
        </div>

        {/* Security */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 pl-4 border-l-4 border-accent">
            {t("Electronic Security Systems", "Systèmes de Sécurité Électroniques")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {securityProducts.map((p, i) => <ProductCard key={i} product={p} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
