import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function SplashIntro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show splash for 2.4 seconds, then slide away
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="splash-container"
          className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-[#1c0f0a] select-none pointer-events-none"
          initial={{ y: 0 }}
          exit={{ 
            y: "-110%",
            transition: { 
              duration: 1.0, 
              ease: [0.77, 0, 0.175, 1], // Custom cubic-bezier for snappy, organic movement
            } 
          }}
        >
          {/* Main big splash background that has a paper-cut / paint feel at the bottom edge */}
          <div className="absolute inset-0 bg-[#1c0f0a] w-full h-full" />

          {/* Organic paper cutout visual edge at the bottom */}
          <div 
            className="absolute bottom-[-100px] left-0 right-0 h-[100px] bg-[#1c0f0a]"
            style={{
              clipPath: "polygon(0% 0%, 15% 40%, 30% 10%, 45% 55%, 60% 25%, 75% 70%, 90% 20%, 100% 50%, 100% 100%, 0% 100%)",
              transform: "scaleY(-1)",
              transformOrigin: "bottom"
            }}
          />

          {/* Sparkles / Whimsical organic shapes in the background of splash */}
          <motion.div 
            id="splash-blob-1"
            className="absolute top-1/4 left-1/10 w-24 h-24 bg-[#e27274] opacity-20 clip-path-organic-1"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            id="splash-blob-2"
            className="absolute bottom-1/4 right-1/10 w-32 h-32 bg-[#e27274] opacity-15 clip-path-organic-2"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Animated Central Text */}
          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.2, duration: 0.7, ease: "easeOut" }
              }}
              className="flex flex-col items-center"
            >
              <span className="font-mono text-xs text-[#e27274] tracking-[0.3em] uppercase mb-3 bg-[#FAF6EE]/5 px-4 py-1.5 rounded-full border border-[#e27274]/20">
                Portfólio de Engenharia & Design
              </span>
              <h1 className="font-serif font-black text-4xl md:text-7xl text-[#FAF6EE] tracking-tight leading-none drop-shadow-md text-center max-w-2xl">
                SEJA BEM-VINDO
              </h1>
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.7, duration: 0.5 }
                }}
                className="mt-6 flex flex-col items-center gap-1"
              >
                <span className="font-serif text-2xl md:text-3xl text-orange-200 font-bold tracking-tight uppercase">
                  EDUARDA SILVA SANTOS
                </span>
                <span className="font-mono text-xs md:text-sm text-[#e27274] uppercase tracking-[0.25em] font-medium mt-1 bg-[#25150e] px-4 py-1.5 rounded-full border border-[#e27274]/20">
                  ⚡ DESENVOLVEDORA FULL STACK & IA
                </span>
              </motion.div>
            </motion.div>

            {/* Simulated loading paintbrush tip line */}
            <div className="w-48 h-2 bg-[#25150e] rounded-full mx-auto mt-10 overflow-hidden relative border border-[#e27274]/20">
              <motion.div
                id="splash-loading-bar"
                className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#e27274] to-orange-400"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>
            
            <p className="font-mono text-[10px] text-orange-200/40 mt-3 tracking-widest uppercase">
              Iluminando ambiente interativo...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
