import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, ExternalLink, FolderGit2, Github, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { projectCategories, type ProjectFilter } from "@/data/navigation";
import type { Project } from "@/types/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";

function ProjectActions({ project, isExpanded, onToggle }: { project: Project; isExpanded: boolean; onToggle: () => void }) {
  return (
    <div className="flex items-center justify-between gap-4 mt-4 pt-4 border-t border-[#25150e]/10">
      <button
        type="button"
        onClick={onToggle}
        className="font-serif font-black text-xs uppercase tracking-wider text-[#e27274] hover:text-[#c25759] transition-colors cursor-pointer"
        aria-expanded={isExpanded}
      >
        {isExpanded ? "✕ Fechar Inspeção" : "✦ Inspeção Completa"}
      </button>

      <div className="flex items-center gap-2">
        <a
          href={project.githubUrl ?? "#"}
          target={project.githubUrl?.startsWith("http") ? "_blank" : undefined}
          rel={project.githubUrl?.startsWith("http") ? "noreferrer" : undefined}
          className="p-2.5 rounded-full bg-[#f5ede1] border border-[#25150e]/15 text-[#25150e] hover:bg-[#1c0f0a] hover:text-[#FAF6EE] transition-colors"
          title="Código Fonte"
          aria-label={`Abrir código fonte do projeto ${project.title}`}
        >
          <Github className="w-4 h-4" />
        </a>
        <a
          href={project.demoUrl ?? "#"}
          target={project.demoUrl?.startsWith("http") ? "_blank" : undefined}
          rel={project.demoUrl?.startsWith("http") ? "noreferrer" : undefined}
          className="px-4 py-2 bg-[#1c0f0a] hover:bg-[#c25759] text-[#FAF6EE] font-serif font-bold text-xs uppercase tracking-wider rounded-full flex items-center gap-1 shadow-sm"
          title="Ver Demo Online"
          aria-label={`Abrir demonstração do projeto ${project.title}`}
        >
          Abrir <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}

function ProjectCard({ project, isExpanded, onToggle }: { project: Project; isExpanded: boolean; onToggle: () => void }) {
  return (
    <motion.article
      layout
      key={project.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className={`bg-[#fffdfa] rounded-[2rem] border-2 border-[#1c0f0a] overflow-hidden shadow-[6px_6px_0px_0px_#1c0f0a] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#1c0f0a] transition-all flex flex-col justify-between ${
        isExpanded ? "md:col-span-2 border-[#e27274]" : ""
      }`}
    >
      <div className={`flex flex-col ${isExpanded ? "lg:flex-row" : ""}`}>
        <div
          className={`relative overflow-hidden bg-[#FAF6EE] border-b-2 border-[#1c0f0a] ${
            isExpanded ? "lg:w-1/2 lg:border-b-0 lg:border-r-2" : "w-full"
          }`}
        >
          <img
            src={project.image}
            alt={`Imagem representativa do projeto ${project.title}`}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-56 md:h-64 object-cover filter saturate-75 contrast-110 hover:saturate-100 transition-all duration-300"
          />
          <div className="absolute top-4 left-4 bg-[#1c0f0a] text-[#FAF6EE] text-[9px] font-mono tracking-widest px-3 py-1.5 rounded-full uppercase border border-[#FAF6EE]/10">
            {project.category}
          </div>
        </div>

        <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <h3 className="font-serif font-black text-2xl text-[#1c0f0a] tracking-tight">
                {project.title}
              </h3>
              <FolderGit2 className="w-5 h-5 text-[#e27274]" />
            </div>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag) => (
                <TechBadge key={tag}>{tag}</TechBadge>
              ))}
            </div>

            <p className="font-sans text-sm text-[#25150e]/80 leading-relaxed mb-6">
              {isExpanded ? project.longDescription : project.description}
            </p>

            {isExpanded && (
              <div className="mb-6 bg-[#FAF6EE] border border-[#25150e]/10 p-4 rounded-2xl">
                <h4 className="font-serif font-bold text-xs uppercase text-[#1c0f0a] tracking-wider mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#e27274] fill-current" /> Destaques Funcionais:
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-[#25150e]/80">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#e27274] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <ProjectActions project={project} isExpanded={isExpanded} onToggle={onToggle} />
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (filter === "all") return portfolioData.projects;
    return portfolioData.projects.filter((project) => project.category === filter);
  }, [filter]);

  const handleToggleExpand = (id: string) => {
    setExpandedProjectId((currentId) => (currentId === id ? null : id));
  };

  return (
    <section id="projetos" className="w-full py-16 md:py-24 px-4 md:px-8 bg-[#f5ede1] border-y-2 border-[#1c0f0a] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Showroom de Engenharia"
          title="Sistemas & Soluções"
          description="Projetos autorais desenvolvidos com atenção artesanal ao design e precisão cirúrgica na arquitetura de código. Clique em um card para inspecionar os detalhes técnicos."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12" aria-label="Filtros de projetos">
          {projectCategories.map((category) => {
            const isActive = filter === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider font-bold border-2 transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-[#1c0f0a] border-[#1c0f0a] text-[#FAF6EE] shadow-md scale-105"
                    : "bg-[#FAF6EE] border-[#25150e]/15 text-[#25150e]/75 hover:border-[#1c0f0a]/40"
                }`}
                aria-pressed={isActive}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-[#e27274]" : "bg-[#25150e]/30"}`} />
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isExpanded={expandedProjectId === project.id}
                onToggle={() => handleToggleExpand(project.id)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
