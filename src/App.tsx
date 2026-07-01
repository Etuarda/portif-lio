import { motion } from "motion/react";
import SplashIntro from "@/components/layout/SplashIntro";
import Header from "@/components/layout/Header";
import FooterSection from "@/components/layout/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import { SectionReveal } from "@/components/ui/SectionReveal";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#FAF6EE] text-[#25150e] font-sans antialiased overflow-x-hidden selection:bg-[#e27274]/30 selection:text-[#1c0f0a]">
      <SplashIntro />
      <Header />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="w-full flex flex-col"
      >
        <SectionReveal>
          <HeroSection />
        </SectionReveal>

        <SectionReveal>
          <ProjectsSection />
        </SectionReveal>

        <SectionReveal>
          <SkillsSection />
        </SectionReveal>

        <SectionReveal>
          <ExperienceSection />
        </SectionReveal>
      </motion.main>

      <FooterSection />
    </div>
  );
}
