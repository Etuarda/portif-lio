import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Code2, Cpu, Flame, Sparkles, Star } from "lucide-react";
import { heroVersions, type HeroVersionId } from "@/data/hero";

const profileImage = new URL("../../../eduardass.jpeg", import.meta.url).href;
const resumeUrl = new URL("../../../Eduarda- Curriculo-Full-Stack(6).pdf", import.meta.url).href;

export default function HeroSection() {
  const [activeVersion, setActiveVersion] = useState<HeroVersionId>("standard");
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const currentInfo = heroVersions[activeVersion];

  // Helper to change image index
  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % 3);
  };
  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + 3) % 3);
  };

  const handleSelectVersion = (version: HeroVersionId) => {
    setActiveVersion(version);
    if (version === "standard") setActiveImageIndex(0);
    if (version === "creative") setActiveImageIndex(1);
    if (version === "engine") setActiveImageIndex(2);
  };

  return (
    <section id="sobre" className="w-full py-10 md:py-16 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Whimsical Section Tag */}
      <div className="flex justify-center mb-8 md:mb-12">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#25150e]/60 bg-[#f5ede1] border border-[#25150e]/10 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#e27274]" /> Engenharia de Software & IA
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* COLUNA ESQUERDA: ÁREA VISUAL DO PRODUTO (5/12) */}
        <div className="lg:col-span-5 flex flex-col md:flex-row gap-4 items-stretch h-full">

          {/* Vertical thumbnails (Left) */}
          <div className="flex flex-row md:flex-col gap-3 justify-center md:justify-start order-2 md:order-1">
            <button
              onClick={() => handleSelectVersion("standard")}
              className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border-2 transition-all p-1.5 duration-200 cursor-pointer ${activeVersion === "standard"
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
              onClick={() => handleSelectVersion("creative")}
              className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border-2 transition-all p-1.5 duration-200 cursor-pointer ${activeVersion === "creative"
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
              onClick={() => handleSelectVersion("engine")}
              className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border-2 transition-all p-1.5 duration-200 cursor-pointer ${activeVersion === "engine"
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

          {/* Big central product viewer card (Right/Center) */}
          <div className="flex-1 order-1 md:order-2 bg-[#f5ede1] rounded-[2rem] border-2 border-[#1c0f0a] p-6 relative overflow-hidden flex flex-col justify-between items-center shadow-md select-none group min-h-[350px] md:min-h-[450px]">
            {/* Corner tags for craft look */}
            <div className="absolute top-4 left-4 bg-[#1c0f0a] text-[#FAF6EE] text-[9px] font-mono tracking-widest px-2.5 py-1 rounded-full uppercase">
              {activeVersion}
            </div>

            <div className="absolute top-4 right-4 text-[#e27274]">
              <Star className="w-5 h-5 fill-current animate-pulse" />
            </div>

            {/* Main Interactive SVGs based on index */}
            <div className="my-auto py-6 flex justify-center items-center w-full h-full max-h-[300px]">
              <AnimatePresence mode="wait">
                {activeImageIndex === 0 && (
                  <motion.div
                    key="svg-standard"
                    initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.8, opacity: 0, rotate: 5 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="w-full max-w-[240px] aspect-square"
                  >
                    {/* SVG standard layout (Elegant glowing flower with soft light beams) */}
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                      <defs>
                        <radialGradient id="glow-grad-1" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#FAF6EE" stopOpacity="0.6" />
                          <stop offset="50%" stopColor="#e27274" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#1c0f0a" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                      <circle cx="50" cy="50" r="45" fill="url(#glow-grad-1)" />

                      {/* Sacred geometry flower petals */}
                      <g stroke="#1c0f0a" strokeWidth="1.2" fill="none" opacity="0.85">
                        <ellipse cx="50" cy="50" rx="35" ry="10" transform="rotate(0 50 50)" />
                        <ellipse cx="50" cy="50" rx="35" ry="10" transform="rotate(30 50 50)" stroke="#e27274" />
                        <ellipse cx="50" cy="50" rx="35" ry="10" transform="rotate(60 50 50)" />
                        <ellipse cx="50" cy="50" rx="35" ry="10" transform="rotate(90 50 50)" stroke="#e27274" />
                        <ellipse cx="50" cy="50" rx="35" ry="10" transform="rotate(120 50 50)" />
                        <ellipse cx="50" cy="50" rx="35" ry="10" transform="rotate(150 50 50)" stroke="#e27274" />
                      </g>

                      {/* Glowing core/light */}
                      <circle cx="50" cy="50" r="8" fill="#e27274" />
                      <circle cx="50" cy="50" r="4" fill="#FAF6EE" />

                      {/* Decorative floating lights/nodes */}
                      <circle cx="20" cy="30" r="2.5" fill="#e27274" />
                      <line x1="20" y1="30" x2="35" y2="42" stroke="#1c0f0a" strokeWidth="0.5" strokeDasharray="2" />

                      <circle cx="80" cy="40" r="3" fill="#FAF6EE" stroke="#1c0f0a" strokeWidth="1" />
                      <line x1="80" y1="40" x2="68" y2="46" stroke="#1c0f0a" strokeWidth="0.5" strokeDasharray="2" />
                    </svg>
                  </motion.div>
                )}

                {activeImageIndex === 1 && (
                  <motion.div
                    key="svg-creative"
                    initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.8, opacity: 0, rotate: 5 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="w-full max-w-[240px] aspect-square"
                  >
                    {/* SVG creative layout (Glowing analytical neural network flower) */}
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                      <defs>
                        <radialGradient id="glow-grad-2" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#FAF6EE" stopOpacity="0.7" />
                          <stop offset="60%" stopColor="#c25759" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#1c0f0a" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                      <circle cx="50" cy="50" r="45" fill="url(#glow-grad-2)" />

                      {/* Analytical flower lines */}
                      <g stroke="#1c0f0a" strokeWidth="1" fill="none">
                        <circle cx="50" cy="50" r="24" stroke="#c25759" strokeWidth="0.8" />
                        <circle cx="50" cy="50" r="12" stroke="#1c0f0a" strokeWidth="1" />

                        <line x1="50" y1="10" x2="50" y2="90" stroke="#1c0f0a" strokeWidth="0.5" strokeDasharray="3" />
                        <line x1="10" y1="50" x2="90" y2="50" stroke="#1c0f0a" strokeWidth="0.5" strokeDasharray="3" />
                        <line x1="22" y1="22" x2="78" y2="78" stroke="#c25759" strokeWidth="0.5" />
                        <line x1="22" y1="78" x2="78" y2="22" stroke="#c25759" strokeWidth="0.5" />
                      </g>

                      {/* Nodes */}
                      <circle cx="50" cy="10" r="3.5" fill="#c25759" stroke="#1c0f0a" strokeWidth="1" />
                      <circle cx="50" cy="90" r="3.5" fill="#c25759" stroke="#1c0f0a" strokeWidth="1" />
                      <circle cx="10" cy="50" r="3.5" fill="#c25759" stroke="#1c0f0a" strokeWidth="1" />
                      <circle cx="90" cy="50" r="3.5" fill="#c25759" stroke="#1c0f0a" strokeWidth="1" />

                      <circle cx="50" cy="50" r="6" fill="#FAF6EE" />
                      <circle cx="50" cy="50" r="3" fill="#c25759" />
                    </svg>
                  </motion.div>
                )}

                {activeImageIndex === 2 && (
                  <motion.div
                    key="svg-engine"
                    initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    exit={{ scale: 0.8, opacity: 0, rotate: 5 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="w-full max-w-[240px] aspect-square"
                  >
                    {/* SVG engine layout (Hexagonal back-end grid & glowing core) */}
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                      <defs>
                        <radialGradient id="glow-grad-3" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#FAF6EE" stopOpacity="0.5" />
                          <stop offset="55%" stopColor="#f97316" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#1c0f0a" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                      <circle cx="50" cy="50" r="45" fill="url(#glow-grad-3)" />

                      <g stroke="#1c0f0a" strokeWidth="1.2" fill="none">
                        <polygon points="50,22 74,36 74,64 50,78 26,64 26,36" stroke="#25150e" />
                        <circle cx="50" cy="50" r="28" stroke="#f97316" strokeDasharray="4 2" />

                        <path d="M50,22 Q65,50 50,78 Q35,50 50,22" stroke="#25150e" />
                        <path d="M26,36 Q50,50 74,64" stroke="#f97316" />
                        <path d="M26,64 Q50,50 74,36" stroke="#f97316" />
                      </g>

                      {/* Core reactor */}
                      <rect x="43" y="43" width="14" height="14" rx="4" fill="#1c0f0a" />
                      <circle cx="50" cy="50" r="4" fill="#FAF6EE" />

                      <circle cx="50" cy="50" r="40" stroke="#1c0f0a" strokeWidth="0.5" strokeDasharray="1 5" />
                      <circle cx="16" cy="30" r="2.5" fill="#FAF6EE" stroke="#1c0f0a" strokeWidth="0.8" />
                      <circle cx="84" cy="70" r="2.5" fill="#f97316" />
                    </svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigational Arrows for visual slider */}
            <div className="flex items-center gap-6 mt-4 z-10">
              <button
                onClick={prevImage}
                className="w-10 h-10 rounded-full border border-[#1c0f0a] bg-[#FAF6EE] flex items-center justify-center text-[#1c0f0a] hover:bg-[#1c0f0a] hover:text-[#FAF6EE] active:scale-95 cursor-pointer transition-all"
                title="Imagem anterior"
              >
                ←
              </button>
              <span className="font-mono text-xs text-[#25150e]/60">
                {activeImageIndex + 1} / 3
              </span>
              <button
                onClick={nextImage}
                className="w-10 h-10 rounded-full border border-[#1c0f0a] bg-[#FAF6EE] flex items-center justify-center text-[#1c0f0a] hover:bg-[#1c0f0a] hover:text-[#FAF6EE] active:scale-95 cursor-pointer transition-all"
                title="Próxima imagem"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA: INFORMAÇÕES DO PRODUTO (7/12) */}
        <div className="lg:col-span-7 flex flex-col justify-between self-center">

          {/* Header & Badges */}
          <div className="flex flex-col gap-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 rounded-full border-2 border-[#25150e]/15 overflow-hidden shadow-lg bg-[#FAF6EE] ring-2 ring-[#e27274]/20">
                <img
                  src={profileImage}
                  alt="Foto de perfil de Eduarda Silva Santos"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-[#e27274] font-bold">Eduarda Silva Santos</p>
                <p className="text-xs text-[#25150e]/70 font-medium mt-1">Full-Stack | Dados | IA</p>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <span className={`px-4 py-1 text-xs uppercase font-mono font-black rounded-full border border-[#25150e]/10 shadow-sm ${currentInfo.badgeColor}`}>
                {currentInfo.badgeText}
              </span>
              <span className="text-[#25150e]/60 font-mono text-xs">{currentInfo.rarity}</span>
            </div>
          </div>

          {/* Big Name Title using Fraunces */}
          <h1 className="font-serif font-black text-5xl md:text-6xl text-[#1c0f0a] tracking-tight leading-tight mb-2">
            {currentInfo.title}
          </h1>

          <p className="font-mono text-xs text-[#e27274] font-black uppercase tracking-widest mb-4 flex items-center gap-1.5">
            <Star className="w-4 h-4 fill-current" /> {currentInfo.editionName}
          </p>

          {/* Custom Pretend Price banner */}
          <div className="bg-[#FAF6EE] border-2 border-dashed border-[#1c0f0a] p-4 rounded-2xl mb-6 inline-block">
            <p className="font-mono text-[10px] uppercase text-[#25150e]/50 tracking-wider">Apoio Tecnológico</p>
            <p className="font-serif font-black text-xl text-[#1c0f0a]">{currentInfo.price}</p>
          </div>

          <h3 className="font-serif font-bold text-lg md:text-xl text-[#25150e] leading-relaxed mb-4">
            {currentInfo.subtitle}
          </h3>

          <p className="font-sans text-sm md:text-base text-[#25150e]/80 leading-relaxed mb-8">
            {currentInfo.description}
          </p>
        </div>

        {/* Cards de Versão / Seleção de Stacks */}
        <div className="mb-8">
          <h4 className="font-serif font-bold text-sm text-[#1c0f0a] mb-3 uppercase tracking-wider">
            1. Selecione a Especialidade de Atuação:
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Card Standard */}
            <button
              onClick={() => handleSelectVersion("standard")}
              className={`p-4 rounded-2xl border-2 text-left cursor-pointer transition-all flex flex-col justify-between relative h-28 overflow-hidden group ${activeVersion === "standard"
                  ? "border-[#1c0f0a] bg-[#1c0f0a] text-[#FAF6EE] shadow-md"
                  : "border-[#25150e]/15 bg-[#f5ede1] hover:border-[#25150e]/40 text-[#25150e]"
                }`}
            >
              <div>
                <div className="flex items-center gap-1.5 font-serif font-black text-sm">
                  <span className={`w-2 h-2 rounded-full ${activeVersion === 'standard' ? 'bg-[#e27274]' : 'bg-[#1c0f0a]'}`} />
                  Full-Stack
                </div>
                <p className={`text-[10px] font-mono mt-1 ${activeVersion === "standard" ? "text-orange-100" : "text-[#25150e]/60"}`}>
                  Sistemas Web & React
                </p>
              </div>

              {/* Special label */}
              <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full mt-auto self-start ${activeVersion === "standard" ? "bg-[#FAF6EE] text-[#1c0f0a]" : "bg-[#1c0f0a] text-[#FAF6EE]"
                }`}>
                Core Web
              </span>
            </button>

            {/* Card Creative */}
            <button
              onClick={() => handleSelectVersion("creative")}
              className={`p-4 rounded-2xl border-2 text-left cursor-pointer transition-all flex flex-col justify-between relative h-28 overflow-hidden group ${activeVersion === "creative"
                  ? "border-[#1c0f0a] bg-[#1c0f0a] text-[#FAF6EE] shadow-md"
                  : "border-[#25150e]/15 bg-[#f5ede1] hover:border-[#25150e]/40 text-[#25150e]"
                }`}
            >
              <div>
                <div className="flex items-center gap-1.5 font-serif font-black text-sm">
                  <span className={`w-2 h-2 rounded-full ${activeVersion === 'creative' ? 'bg-[#FAF6EE]' : 'bg-[#e27274]'}`} />
                  Dados & IA
                </div>
                <p className={`text-[10px] font-mono mt-1 ${activeVersion === "creative" ? "text-orange-100" : "text-[#25150e]/60"}`}>
                  Modelagem & Insights
                </p>
              </div>

              <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full mt-auto self-start ${activeVersion === "creative" ? "bg-[#FAF6EE] text-[#1c0f0a]" : "bg-[#e27274] text-[#FAF6EE]"
                }`}>
                Inteligência
              </span>
            </button>

            {/* Card Engine */}
            <button
              onClick={() => handleSelectVersion("engine")}
              className={`p-4 rounded-2xl border-2 text-left cursor-pointer transition-all flex flex-col justify-between relative h-28 overflow-hidden group ${activeVersion === "engine"
                  ? "border-[#1c0f0a] bg-[#1c0f0a] text-[#FAF6EE] shadow-md"
                  : "border-[#25150e]/15 bg-[#f5ede1] hover:border-[#25150e]/40 text-[#25150e]"
                }`}
            >
              <div>
                <div className="flex items-center gap-1.5 font-serif font-black text-sm">
                  <span className={`w-2 h-2 rounded-full ${activeVersion === 'engine' ? 'bg-[#e27274]' : 'bg-orange-500'}`} />
                  Back-End
                </div>
                <p className={`text-[10px] font-mono mt-1 ${activeVersion === "engine" ? "text-orange-100" : "text-[#25150e]/60"}`}>
                  APIs & Microsserviços
                </p>
              </div>

              <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full mt-auto self-start ${activeVersion === "engine" ? "bg-[#FAF6EE] text-[#1c0f0a]" : "bg-orange-500 text-white"
                }`}>
                Resiliência
              </span>
            </button>
          </div>
        </div>

        {/* Active Version Specs / Features list */}
        <div className="mb-8 bg-[#f5ede1] border border-[#25150e]/10 p-5 rounded-2xl">
          <h5 className="font-serif font-bold text-xs uppercase tracking-wider text-[#1c0f0a] mb-3 flex items-center gap-1.5">
            <span>🛠️</span> Tecnologias & Ferramentas Foco:
          </h5>
          <div className="flex flex-wrap gap-2">
            {currentInfo.specs.map((spec, idx) => (
              <span key={idx} className="bg-[#FAF6EE] border border-[#25150e]/15 text-[#1c0f0a] font-mono text-xs px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1">
                <span className="text-[#e27274]">✦</span> {spec}
              </span>
            ))}
          </div>
        </div>

        {/* Core Action Button ("Buy Now" Adapted to "Get in touch / CV") */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#contato"
            className="flex-1 bg-[#1c0f0a] hover:bg-[#2c1a11] text-[#FAF6EE] font-serif font-black text-lg text-center uppercase tracking-wider py-4 px-8 rounded-full border-2 border-[#1c0f0a] shadow-md transition-all duration-200 active:scale-98 cursor-pointer hover:shadow-lg"
          >
            FALAR COM EDUARDA
          </a>

          <a
            href="#projetos"
            className="bg-[#FAF6EE] hover:bg-[#f5ede1] text-[#1c0f0a] font-serif font-bold text-base text-center uppercase tracking-wider py-4 px-6 rounded-full border-2 border-[#1c0f0a] transition-all duration-200 active:scale-98 cursor-pointer flex items-center justify-center gap-1.5"
          >
            VER PROJETOS
          </a>
        </div>

      </div>
    </div>
    </section >
  );
}
