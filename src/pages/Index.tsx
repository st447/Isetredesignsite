import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Products from "@/components/Products";
import ProjectsSection from "@/components/ProjectsSection";
import FAQSection from "@/components/FAQSection";
import TeamSection from "@/components/TeamSection";
import SiteFooter from "@/components/SiteFooter";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Products />
      <ProjectsSection />
      <FAQSection />
      <TeamSection />
      <SiteFooter />
      <FloatingButtons />
    </div>
  );
};

export default Index;
