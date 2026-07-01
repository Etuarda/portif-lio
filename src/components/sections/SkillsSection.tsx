import { useMemo, useState } from "react";
import { Blocks, BrainCircuit, Cpu, Database, Laptop, Star } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categoryIcons = [
  <Laptop className="w-5 h-5 text-[#e27274]" />,
  <Cpu className="w-5 h-5 text-orange-400" />,
  <Database className="w-5 h-5 text-yellow-500" />,
  <BrainCircuit className="w-5 h-5 text-emerald-500" />,
  <Blocks className="w-5 h-5 text-purple-500" />,
];

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const activeCategory = useMemo(
    () => portfolioData.skillsCategories[selectedCategory],
    [selectedCategory]
  );

  return (
    <section id="skills" className="w-full py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20">
      <SectionHeading
        eyebrow="Ecossistema Técnico"
        title="Competências Técnicas"
        description="Estes são os eixos técnicos e ferramentas que compõem meu repertório prático. Selecione uma categoria para visualizar os descritivos."
        icon={<Star className="w-3.5 h-3.5 fill-current" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-4 flex flex-col gap-3">
          <h3 className="font-serif font-black text-sm text-[#1c0f0a] mb-2 uppercase tracking-widest pl-2">
            Eixos Tecnológicos
          </h3>

          {portfolioData.skillsCategories.map((category, index) => {
            const isSelected = selectedCategory === index;

            return (
              <button
                key={category.title}
                type="button"
                onClick={() => setSelectedCategory(index)}
                className={`p-5 rounded-[1.5rem] border-2 text-left cursor-pointer transition-all flex items-center justify-between shadow-sm relative overflow-hidden group ${
                  isSelected
                    ? "border-[#1c0f0a] bg-[#1c0f0a] text-[#FAF6EE] translate-x-1"
                    : "border-[#25150e]/15 bg-[#f5ede1] hover:border-[#1c0f0a]/30 text-[#25150e]"
                }`}
                aria-pressed={isSelected}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl border ${isSelected ? "bg-[#FAF6EE]/10 border-white/20" : "bg-[#FAF6EE] border-[#25150e]/15"}`}>
                    {categoryIcons[index] ?? <Blocks className="w-5 h-5 text-[#e27274]" />}
                  </div>
                  <div>
                    <h4 className="font-serif font-black text-base tracking-tight leading-tight">
                      {category.title}
                    </h4>
                    <p className={`font-mono text-[9px] mt-1 ${isSelected ? "text-orange-200" : "text-[#25150e]/50"}`}>
                      {category.skills.length} ferramentas de ofício
                    </p>
                  </div>
                </div>
                <div className="font-serif text-lg">{isSelected ? "✦" : "→"}</div>
              </button>
            );
          })}

          <div className="mt-4 p-5 bg-[#FAF6EE] border-2 border-dashed border-[#1c0f0a] rounded-3xl text-center flex flex-col items-center justify-center relative rotate-[-1deg]">
            <span className="font-serif font-black text-[#e27274] text-lg">Autonomia Integrada</span>
            <p className="font-sans text-[11px] text-[#25150e]/70 mt-1 leading-snug">
              Pronta para se integrar ao fluxo ágil de desenvolvimento do seu time de forma produtiva.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 bg-[#f5ede1] border-2 border-[#1c0f0a] rounded-[2.5rem] p-6 md:p-10 shadow-[6px_6px_0px_0px_#1c0f0a] min-h-[350px]">
          <div className="flex items-center justify-between pb-6 border-b border-[#1c0f0a]/10 mb-8 flex-wrap gap-2">
            <div>
              <span className="font-mono text-[10px] uppercase text-[#e27274] font-black">
                Eixo Selecionado
              </span>
              <h3 className="font-serif font-black text-2xl text-[#1c0f0a] tracking-tight mt-0.5">
                {activeCategory.title}
              </h3>
            </div>

            <div className="flex items-center gap-1.5 bg-[#FAF6EE] border border-[#25150e]/15 px-3.5 py-1.5 rounded-full font-mono text-[10px] text-[#1c0f0a] font-bold shadow-sm">
              <span aria-hidden="true">🚀</span> QUALIFICAÇÃO & PRÁTICA
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeCategory.skills.map((skill) => (
              <article
                key={skill.name}
                className="bg-[#FAF6EE] border-2 border-[#1c0f0a] rounded-2xl p-5 flex flex-col justify-between hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_0px_#1c0f0a] transition-all"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <h4 className="font-serif font-black text-lg text-[#1c0f0a] tracking-tight leading-snug">
                      {skill.name}
                    </h4>

                    <div className="flex items-center gap-1 bg-[#1c0f0a]/5 text-[#1c0f0a] text-[9px] font-mono px-2 py-0.5 rounded-md border border-[#1c0f0a]/10 font-bold uppercase tracking-wider">
                      Ativo
                    </div>
                  </div>

                  <p className="font-sans text-xs text-[#25150e]/75 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
