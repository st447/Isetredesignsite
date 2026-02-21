import { useLanguage } from "@/contexts/LanguageContext";

const SiteFooter = () => {
  const { t } = useLanguage();

  return (
    <footer className="text-primary-foreground py-10" style={{ background: "var(--gradient-primary)" }}>
      <div className="section-container py-0 text-center">
        <p className="text-sm text-primary-foreground/80">
          {t(
            "© 2026 ISET INTEGRATION SA – N'Djamena, Chad",
            "© 2026 ISET INTEGRATION SA – N'Djamena, Tchad"
          )}
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
