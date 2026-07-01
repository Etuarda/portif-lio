import { useState } from "react";
import { motion } from "motion/react";
import { Code2, Cpu, Flame, Sparkles, Star } from "lucide-react";
import { heroVersions, type HeroVersionId } from "@/data/hero";

const profileImage = "/eduardass.jpeg";

export default function HeroSection() {
  const [activeVersion, setActiveVersion] = useState<HeroVersionId>("standard");
  const currentInfo = heroVersions[activeVersion];

  const handleSelectVersion = (version: HeroVersionId) => {
    setActiveVersion(version);
  };

  return (
    <section id="sobre" className="w-full py-10 md:py-16 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
      <div className="flex justify-center mb-8 md:mb-12">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#25150e]/60 bg-[#f5ede1] border border-[#25150e]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#e27274]" /> Engenharia de Software & IA
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[auto_minmax(0,1fr)] gap-8 lg:gap-12 items-start">
        <div className="flex flex-row lg:flex-col gap-3 justify-center lg:justify-start">
          <button
            type="button"
            onClick={() => handleSelectVersion("standard")}
            className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border-2 transition-all duration-200 cursor-pointer ${activeVersion === "standard"
              ? "border-[#1c0f0a] bg-[#1c0f0a] text-[#FAF6EE] scale-105"
              : "border-[#25150e]/15 bg-[#f5ede1] text-[#25150e]/70 hover:border-[#1c0f0a]/30"
              }`}
          >
            <div className="flex flex-col items-center">
              <Code2 className="w-5 h-5 mb-0.5" />
              <span className="font-mono text-[8px] uppercase tracking-tighter">STD</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => handleSelectVersion("creative")}
            className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border-2 transition-all duration-200 cursor-pointer ${activeVersion === "creative"
              ? "border-[#1c0f0a] bg-[#1c0f0a] text-[#FAF6EE] scale-105"
              : "border-[#25150e]/15 bg-[#f5ede1] text-[#25150e]/70 hover:border-[#1c0f0a]/30"
              }`}
          >
            <div className="flex flex-col items-center">
              <Flame className="w-5 h-5 mb-0.5 text-[#e27274]" />
              <span className="font-mono text-[8px] uppercase tracking-tighter">DADOS</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => handleSelectVersion("engine")}
            className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border-2 transition-all duration-200 cursor-pointer ${activeVersion === "engine"
              ? "border-[#1c0f0a] bg-[#1c0f0a] text-[#FAF6EE] scale-105"
              : "border-[#25150e]/15 bg-[#f5ede1] text-[#25150e]/70 hover:border-[#1c0f0a]/30"
              }`}
          >
            <div className="flex flex-col items-center">
              <Cpu className="w-5 h-5 mb-0.5 text-orange-400" />
              <span className="font-mono text-[8px] uppercase tracking-tighter">ENG</span>
            </div>
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-w-0 rounded-[2rem] border-2 border-[#1c0f0a] bg-[#f5ede1] p-6 md:p-8 shadow-md overflow-hidden"
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
              <div className="w-24 h-24 rounded-full border-2 border-[#25150e]/15 overflow-hidden shadow-lg bg-[#FAF6EE] ring-2 ring-[#e27274]/20">
                <img src={profileImage} alt="Foto de perfil de Eduarda Silva Santos" className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0">
                <p className="text-sm uppercase tracking-[0.35em] text-[#e27274] font-bold">Eduarda Silva Santos</p>
                <p className="text-xs text-[#25150e]/70 font-medium mt-1">Full-Stack | Dados | IA</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className={`px-4 py-1 text-xs uppercase font-mono font-black rounded-full border border-[#25150e]/10 shadow-sm ${currentInfo.badgeColor}`}>
                {currentInfo.badgeText}
              </span>
              <span className="text-[#25150e]/60 font-mono text-xs">{currentInfo.rarity}</span>
            </div>

            <div className="min-w-0">
              <h1 className="font-serif font-black text-4xl sm:text-5xl md:text-6xl text-[#1c0f0a] tracking-tight leading-tight mb-4">
                {currentInfo.title}
              </h1>
              <p className="font-mono text-xs text-[#e27274] font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                <Star className="w-4 h-4 fill-current" /> {currentInfo.editionName}
              </p>
            </div>

            <div className="bg-[#FAF6EE] border-2 border-dashed border-[#1c0f0a] p-4 rounded-2xl inline-block">
              <p className="font-mono text-[10px] uppercase text-[#25150e]/50 tracking-wider">Apoio Tecnológico</p>
              <p className="font-serif font-black text-xl text-[#1c0f0a]">{currentInfo.price}</p>
            </div>

            <div className="space-y-6">
              <h3 className="font-serif font-bold text-lg md:text-xl text-[#25150e] leading-relaxed">
                {currentInfo.subtitle}
              </h3>
              <p className="font-sans text-sm md:text-base text-[#25150e]/80 leading-relaxed">
                {currentInfo.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
