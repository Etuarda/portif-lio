import { motion } from "motion/react";
import { ArrowUpRight, Star } from "lucide-react";
import { sectionIds, sectionLinks } from "@/data/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Header() {
  const { activeSection, isScrolled } = useActiveSection(sectionIds);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.2, duration: 0.6 }}
      className="sticky top-6 z-40 w-full px-4"
    >
      <div
        id="navbar-bubble"
        className={`mx-auto max-w-[700px] bg-[#1c0f0a] text-[#FAF6EE] shadow-lg rounded-full border border-[#FAF6EE]/10 flex items-center justify-between p-2 pl-6 pr-3 md:pr-4 transition-all duration-300 ${isScrolled ? "scale-[0.98] border-[#e27274]/20" : "scale-100"
          }`}
      >
        <a
          href="#sobre"
          className="flex items-center gap-2 font-serif font-black text-xl tracking-tight text-[#FAF6EE] group"
          aria-label="Ir para a seção sobre"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="text-[#e27274]"
          >
            <Star className="w-5 h-5 fill-current" />
          </motion.div>
          <span className="group-hover:text-[#e27274] transition-colors font-semibold">Eduarda</span>
        </a>

        <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
          {sectionLinks.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative px-4 py-2 font-mono text-xs uppercase tracking-wider font-semibold transition-colors duration-200 hover:text-[#e27274] rounded-full"
                aria-current={isActive ? "page" : undefined}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-[#e27274]/20 rounded-full border border-[#e27274]/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={isActive ? "text-[#e27274]" : "text-[#FAF6EE]/80"}>
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>

        <a
          href="#contato"
          className="bg-[#e27274] hover:bg-[#c25759] active:scale-95 text-[#FAF6EE] font-serif font-bold text-xs md:text-sm uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 flex items-center gap-1.5 shadow-md border border-[#FAF6EE]/15"
        >
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </motion.header>
  );
}
