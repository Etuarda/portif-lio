import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Award, Briefcase, Calendar, CheckSquare, FileBadge, GraduationCap, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import type { Education, Experience } from "@/types/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { springPillTransition } from "@/constants/animations";

type TabType = "work" | "education" | "complementary";
type TimelineTone = "rose" | "emerald" | "purple";

type TimelineEntry = {
  id: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  items: string[];
};

const tabs = [
  { id: "work", label: "Atuação Profissional", icon: <Briefcase className="w-4 h-4" /> },
  { id: "education", label: "Formação Acadêmica", icon: <GraduationCap className="w-4 h-4" /> },
  { id: "complementary", label: "Especializações & IA", icon: <FileBadge className="w-4 h-4" /> },
] as const;

const toneClasses: Record<TimelineTone, { node: string; accent: string; chip: string }> = {
  rose: {
    node: "bg-[#e27274]",
    accent: "text-[#e27274]",
    chip: "bg-[#e27274]/10 border border-[#e27274]/20 text-[#8b3e3f]",
  },
  emerald: {
    node: "bg-emerald-500",
    accent: "text-emerald-600",
    chip: "bg-emerald-500/10 border border-emerald-500/20 text-emerald-800",
  },
  purple: {
    node: "bg-purple-500",
    accent: "text-purple-600",
    chip: "bg-purple-500/10 border border-purple-500/20 text-purple-800",
  },
};

function fromExperience(entry: Experience): TimelineEntry {
  return {
    id: entry.id,
    title: entry.role,
    institution: entry.company,
    period: entry.period,
    description: entry.description,
    items: entry.achievements,
  };
}

function fromEducation(entry: Education): TimelineEntry {
  return {
    id: entry.id,
    title: entry.title,
    institution: entry.institution,
    period: entry.year,
    description: entry.description,
    items: entry.skills,
  };
}

function TimelineCard({ entry, tone, icon }: { entry: TimelineEntry; tone: TimelineTone; icon: "work" | "education" | "award" }) {
  const classes = toneClasses[tone];
  const Icon = icon === "work" ? Briefcase : icon === "education" ? GraduationCap : Award;
  const isWork = icon === "work";

  return (
    <article className="relative group">
      <div className={`absolute left-[-35px] md:left-[-49px] top-1.5 w-6 h-6 md:w-8 md:h-8 rounded-full ${classes.node} border-2 border-[#1c0f0a] flex items-center justify-center text-[#FAF6EE] shadow-[2px_2px_0px_0px_#1c0f0a] group-hover:bg-[#1c0f0a] transition-all`}>
        <Icon className="w-3 h-3 md:w-4 md:h-4 text-[#FAF6EE]" />
      </div>

      <div className="bg-[#fffdfa] rounded-[2rem] border-2 border-[#1c0f0a] p-6 md:p-8 shadow-[5px_5px_0px_0px_#1c0f0a] hover:shadow-[7px_7px_0px_0px_#1c0f0a] hover:translate-y-[-2px] transition-all">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-[#25150e]/10">
          <div>
            <h3 className="font-serif font-black text-xl md:text-2xl text-[#1c0f0a] tracking-tight leading-tight">
              {entry.title}
            </h3>
            <p className={`font-serif font-bold text-base ${classes.accent} mt-1`}>
              {entry.institution}
            </p>
          </div>
          <div className="flex items-center gap-1.5 bg-[#f5ede1] border-2 border-dashed border-[#25150e]/20 px-4 py-1.5 rounded-xl font-mono text-xs text-[#1c0f0a] font-bold">
            <Calendar className="w-3.5 h-3.5 text-[#1c0f0a]" />
            {entry.period}
          </div>
        </div>

        <p className="font-sans text-sm text-[#25150e]/80 leading-relaxed mb-6">
          {entry.description}
        </p>

        {isWork ? (
          <div>
            <h4 className="font-serif font-black text-xs uppercase text-[#1c0f0a] tracking-widest mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#e27274] fill-current" /> Principais Conquistas:
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-[#25150e]/85">
              {entry.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 bg-[#f5ede1]/30 p-2.5 rounded-xl border border-[#25150e]/5">
                  <CheckSquare className="w-4 h-4 text-[#e27274] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {entry.items.map((item) => (
              <span key={item} className={`${classes.chip} font-mono text-[10px] px-2.5 py-1 rounded-md font-semibold`}>
                ✦ {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function TimelineList({ entries, tone, icon, listKey }: { entries: TimelineEntry[]; tone: TimelineTone; icon: "work" | "education" | "award"; listKey: string }) {
  return (
    <motion.div
      key={listKey}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-10 w-full"
    >
      {entries.map((entry) => (
        <TimelineCard key={entry.id} entry={entry} tone={tone} icon={icon} />
      ))}
    </motion.div>
  );
}

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<TabType>("work");

  const workEntries = portfolioData.experiences.map(fromExperience);
  const educationEntries = portfolioData.education.map(fromEducation);
  const complementaryEntries = portfolioData.complementaryEducation.map(fromEducation);

  return (
    <section id="experiencia" className="w-full py-16 md:py-24 px-4 md:px-8 bg-[#f5ede1] border-y-2 border-[#1c0f0a] scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow="Histórico & Qualificação"
          title="Trajetória & Bagagem"
          description="Conheça minha jornada profissional, minha base acadêmica em análise de sistemas e minhas imersões complementares focadas em engenharia de software e inteligência artificial."
        />

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 bg-[#FAF6EE]/50 p-2 rounded-[2rem] border-2 border-[#1c0f0a] max-w-2xl mx-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 py-3 rounded-full text-xs font-mono uppercase tracking-wider font-bold transition-all cursor-pointer flex items-center gap-2 flex-1 justify-center min-w-[150px] ${
                  isActive ? "text-[#FAF6EE] z-10" : "text-[#25150e]/75 hover:text-[#1c0f0a]"
                }`}
                aria-pressed={isActive}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-[#1c0f0a] rounded-full"
                    transition={springPillTransition}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tab.icon}
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative pl-6 md:pl-10 border-l-2 border-[#1c0f0a] border-dashed ml-4 md:ml-8 flex flex-col gap-10">
          <AnimatePresence mode="wait">
            {activeTab === "work" && (
              <TimelineList entries={workEntries} tone="rose" icon="work" listKey="work-list" />
            )}
            {activeTab === "education" && (
              <TimelineList entries={educationEntries} tone="emerald" icon="education" listKey="education-list" />
            )}
            {activeTab === "complementary" && (
              <TimelineList entries={complementaryEntries} tone="purple" icon="award" listKey="complementary-list" />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
