import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Mail, Phone } from "lucide-react";

const team = [
  { initial: "I", en: "Technical Engineering Team", fr: "Équipe Technique d'Ingénierie", roleEn: "Solar & Electronic Security Engineers", roleFr: "Ingénieurs Solaire & Sécurité Électronique", email: "info@isetintegration.com", phone: "+235 68 37 61 10" },
  { initial: "T", en: "Installation & Support Team", fr: "Équipe Installation & Support", roleEn: "Certified Technicians", roleFr: "Techniciens Certifiés", email: "support@isetintegration.com", phone: "+235 68 37 61 10" },
];

const TeamSection = () => {
  const { t } = useLanguage();
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="team" className="bg-card">
      <div ref={ref} className={`section-container fade-up ${visible ? "visible" : ""}`}>
        <div className="section-heading">
          <h2>{t("Our Team", "Notre Équipe")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <div key={i} className="glass-card p-8 flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 text-2xl font-bold text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                {member.initial}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{t(member.en, member.fr)}</h3>
                <p className="text-sm text-muted-foreground">{t(member.roleEn, member.roleFr)}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href={`mailto:${member.email}`} className="hover:text-primary transition-colors">{member.email}</a>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="hover:text-primary transition-colors">{member.phone}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
