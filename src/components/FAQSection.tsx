import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown } from "lucide-react";

const faqs = [
  { en: "What is the warranty on solar installations?", fr: "Quelle est la garantie sur les installations solaires ?", ansEn: "Our solar installations come with a 25-year performance warranty, a 10-year product warranty, and a 5-year installation warranty.", ansFr: "Nos installations solaires sont garanties 25 ans en performance, 10 ans en produit et 5 ans pour l'installation." },
  { en: "How long does installation take?", fr: "Combien de temps prend l'installation ?", ansEn: "A typical solar system takes 2–3 days. Security systems are usually installed in 1–2 days depending on scope.", ansFr: "Un système solaire typique prend 2-3 jours. Les systèmes de sécurité s'installent en 1-2 jours selon l'envergure." },
  { en: "Do you offer maintenance services?", fr: "Offrez-vous des services de maintenance ?", ansEn: "Yes! We provide comprehensive maintenance packages including inspections, cleaning, and repairs with 24/7 support.", ansFr: "Oui ! Nous proposons des forfaits de maintenance complets incluant inspections, nettoyage et réparations avec support 24h/24." },
  { en: "Can I monitor my security system remotely?", fr: "Puis-je surveiller mon système à distance ?", ansEn: "Absolutely! All our security systems include mobile app access so you can monitor your property from anywhere.", ansFr: "Absolument ! Tous nos systèmes incluent un accès via application mobile pour surveiller votre propriété de n'importe où." },
  { en: "What areas do you serve?", fr: "Quelles zones desservez-vous ?", ansEn: "We are based in N'Djamena and serve clients across Chad. Contact us to discuss your project.", ansFr: "Nous sommes basés à N'Djamena et servons des clients à travers tout le Tchad. Contactez-nous pour discuter de votre projet." },
];

const FAQSection = () => {
  const { t } = useLanguage();
  const { ref, visible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq">
      <div ref={ref} className={`section-container fade-up ${visible ? "visible" : ""}`}>
        <div className="section-heading">
          <h2>{t("Frequently Asked Questions", "Questions Fréquemment Posées")}</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors duration-300"
              >
                <span className="font-semibold text-foreground pr-4">{t(faq.en, faq.fr)}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-muted-foreground leading-relaxed">
                  {t(faq.ansEn, faq.ansFr)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
