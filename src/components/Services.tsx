import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Video, Fingerprint, Flame, Bell, TrafficCone,
  MapPin, Sun, Network, Search, GraduationCap,
} from "lucide-react";

const services = [
  { icon: Video, en: "Video Surveillance Systems", fr: "Systèmes de Vidéosurveillance", tags: [{ en: "IP & HD Surveillance", fr: "Surveillance IP & HD" }, { en: "NVR / DVR Systems", fr: "Systèmes NVR / DVR" }, { en: "Mobile Surveillance", fr: "Surveillance Mobile" }, { en: "Autonomous Cameras", fr: "Caméras Autonomes" }, { en: "Installation & Maintenance", fr: "Installation & Maintenance" }] },
  { icon: Fingerprint, en: "Access Control & Biometrics", fr: "Contrôle d'Accès & Biométrie", tags: [{ en: "Door & Barrier Access", fr: "Accès Portes & Barrières" }, { en: "Time Attendance Systems", fr: "Gestion du Temps & Présences" }, { en: "Turnstiles", fr: "Tourniquets" }, { en: "High-Security Doors", fr: "Portes Haute Sécurité" }] },
  { icon: Flame, en: "Fire Safety Systems", fr: "Systèmes de Sécurité Incendie", tags: [{ en: "Fire Detection", fr: "Détection Incendie" }, { en: "Fire Alarms", fr: "Alarmes Incendie" }, { en: "Emergency Lighting", fr: "Éclairage de Secours" }, { en: "Automatic Suppression", fr: "Extinction Automatique" }] },
  { icon: Bell, en: "Alarm & Intrusion Systems", fr: "Systèmes d'Alarme & Anti-Intrusion", tags: [{ en: "Intrusion Alarms", fr: "Alarmes Anti-Intrusion" }, { en: "Perimeter Alarms", fr: "Alarmes Périmètriques" }, { en: "SMS & Email Alerts", fr: "Alertes SMS & Email" }, { en: "Smart Home Integration", fr: "Intégration Domotique" }] },
  { icon: TrafficCone, en: "Intelligent Transport Systems", fr: "Systèmes de Transport Intelligents", tags: [{ en: "Parking Management", fr: "Gestion de Stationnement" }, { en: "License Plate Recognition", fr: "Reconnaissance de Plaques" }, { en: "Traffic Monitoring", fr: "Supervision du Trafic" }] },
  { icon: MapPin, en: "Tracking & Vehicle Surveillance", fr: "Suivi & Surveillance Véhicules", tags: [{ en: "Real-Time GPS Tracking", fr: "Suivi GPS en Temps Réel" }, { en: "Fleet Management", fr: "Gestion de Flotte" }, { en: "Anti-Theft Solutions", fr: "Solutions Anti-Vol" }, { en: "Route Optimization", fr: "Optimisation des Itinéraires" }] },
  { icon: Sun, en: "Solar Energy Solutions", fr: "Solutions d'Énergie Solaire", tags: [{ en: "Solar System Design", fr: "Conception Systèmes Solaires" }, { en: "Photovoltaic Installation", fr: "Installation Photovoltaïque" }, { en: "Off-Grid Systems", fr: "Systèmes Hors-Réseau" }, { en: "Floating Solar", fr: "Solaire Flottant" }] },
  { icon: Network, en: "Smart Cabling & Networking", fr: "Câblage Intelligent & Réseaux", tags: [{ en: "VDI Cabling", fr: "Câblage VDI" }, { en: "Network Infrastructure", fr: "Infrastructure Réseau" }, { en: "PoE Systems", fr: "Systèmes PoE" }, { en: "Fiber Integration", fr: "Intégration Fibre Optique" }] },
  { icon: Search, en: "Security Audit & Consulting", fr: "Audit Sécurité & Conseil", tags: [{ en: "Risk Analysis", fr: "Analyse des Risques" }, { en: "Technology Assessment", fr: "Évaluation Technologique" }, { en: "Cost Optimization", fr: "Optimisation des Coûts" }] },
  { icon: GraduationCap, en: "Certified Training Programs", fr: "Programmes de Formation Certifiants", tags: [{ en: "Security Systems Technician", fr: "Technicien Sécurité" }, { en: "Renewable Energy Technician", fr: "Technicien Énergie Renouvelable" }, { en: "Professional Certification", fr: "Certification Professionnelle" }] },
];

const Services = () => {
  const { t } = useLanguage();
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="solutions" className="bg-card">
      <div ref={ref} className={`section-container fade-up ${visible ? "visible" : ""}`}>
        <div className="section-heading">
          <h2>{t("Our Services", "Nos Services")}</h2>
          <p>{t("Comprehensive solutions for security and energy", "Solutions complètes pour la sécurité et l'énergie")}</p>
        </div>

        <div className="space-y-4">
          {services.map((svc, i) => (
            <div
              key={i}
              className="glass-card p-6 md:p-8 border-l-4 border-l-primary"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <svc.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{t(svc.en, svc.fr)}</h3>
              </div>
              <div className="flex flex-wrap gap-2 ml-16">
                {svc.tags.map((tag, j) => (
                  <span key={j} className="tag-pill">{t(tag.en, tag.fr)}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
