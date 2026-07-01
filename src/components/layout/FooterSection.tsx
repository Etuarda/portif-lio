import { useState, type FormEvent, type MouseEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FileText, Github, Linkedin, Mail, Send, Star, Trash2 } from "lucide-react";
import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import type { ContactMessage } from "@/types/contact";

export default function FooterSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [messages, setMessages] = useLocalStorageState<ContactMessage[]>("eduarda_portfolio_messages", []);
  const [showInbox, setShowInbox] = useState(false);
  const resumeUrl = "/Eduarda- Curriculo-Full-Stack(6).pdf";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !text) return;

    const mailto = `mailto:ettuarda@gmail.com?subject=${encodeURIComponent(
      `Contato via Portfólio de ${name}`
    )}&body=${encodeURIComponent(
      `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${text}`
    )}`;

    window.location.href = mailto;

    const newMessage: ContactMessage = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      email,
      text,
      date: new Date().toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([newMessage, ...messages]);

    setName("");
    setEmail("");
    setText("");
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const handleDeleteMessage = (id: string, e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setMessages(messages.filter((message) => message.id !== id));
  };

  return (
    <footer id="contato" className="w-full relative mt-20 pt-10 bg-[#1c0f0a] text-[#FAF6EE] overflow-hidden">

      {/* SVG Organic Wave Divider at the top of footer (Paint reveal style) */}
      <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden pointer-events-none transform -translate-y-11">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-12 text-[#1c0f0a] fill-current"
        >
          <path d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,42.7C840,32,960,32,1080,42.7C1200,53,1320,75,1380,85.3L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 pt-6 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* COLUNA ESQUERDA: APRESENTAÇÃO & REDES (5/12) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 font-serif font-black text-3xl tracking-tight text-[#FAF6EE] mb-4">
                <Star className="w-6 h-6 fill-current text-[#e27274]" />
                Oi, tudo bem? :)
              </div>
              <p className="font-sans text-sm text-[#FAF6EE]/70 leading-relaxed mb-6 max-w-sm">
                Obrigada por visitar meu portfólio! Se você procura uma desenvolvedora focada, proativa, com excelente raciocínio analítico e pronta para conceber soluções de alto nível no seu time, envie sua mensagem ou conecte-se comigo!
              </p>
            </div>

            {/* Social Links Styled as paper stamps */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <a
                href="https://github.com/Etuarda"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-[#FAF6EE]/10 border border-[#FAF6EE]/15 hover:bg-[#e27274] hover:text-[#1c0f0a] flex items-center justify-center transition-all cursor-pointer shadow-sm group"
                title="GitHub"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/itseduarda"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-[#FAF6EE]/10 border border-[#FAF6EE]/15 hover:bg-[#e27274] hover:text-[#1c0f0a] flex items-center justify-center transition-all cursor-pointer shadow-sm group"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:ettuarda@gmail.com"
                className="w-11 h-11 rounded-xl bg-[#FAF6EE]/10 border border-[#FAF6EE]/15 hover:bg-[#e27274] hover:text-[#1c0f0a] flex items-center justify-center transition-all cursor-pointer shadow-sm group"
                title="E-mail"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href={resumeUrl}
                download="Eduarda- Curriculo-Full-Stack(6).pdf"
                target="_blank"
                rel="noreferrer"
                className="px-4 h-11 rounded-xl bg-[#FAF6EE]/10 border border-[#FAF6EE]/15 hover:bg-[#FAF6EE] hover:text-[#1c0f0a] flex items-center gap-1.5 justify-center transition-all cursor-pointer text-xs font-mono uppercase tracking-wider font-bold shadow-sm"
                title="Baixar Currículo PDF"
              >
                <FileText className="w-4 h-4" /> Baixar Currículo
              </a>
            </div>

            {/* Quick map routes */}
            <div>
              <h4 className="font-serif font-black text-xs uppercase tracking-widest text-[#e27274] mb-3">
                Mapa do Ofício
              </h4>
              <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider">
                <a href="#sobre" className="hover:text-[#e27274] transition-colors">Sobre</a>
                <a href="#projetos" className="hover:text-[#e27274] transition-colors">Projetos</a>
                <a href="#skills" className="hover:text-[#e27274] transition-colors">Habilidades</a>
                <a href="#experiencia" className="hover:text-[#e27274] transition-colors">Trajetória</a>
              </nav>
            </div>
          </div>

          {/* COLUNA DIREITA: FORMULÁRIO DE CONTATO (7/12) */}
          <div className="lg:col-span-7 bg-[#FAF6EE] text-[#1c0f0a] rounded-[2rem] border-2 border-[#1c0f0a] p-6 md:p-8 shadow-[4px_4px_0px_0px_#e27274] relative overflow-hidden">

            {/* Stamp logo on corner */}
            <div className="absolute top-4 right-4 bg-[#e27274] text-[#FAF6EE] font-serif font-bold text-[9px] uppercase px-2 py-1 rounded tracking-wide rotate-[4deg]">
              Contato Direto
            </div>

            <div className="mb-6">
              <h3 className="font-serif font-black text-2xl text-[#1c0f0a] tracking-tight">
                Deixe uma Mensagem! 🌟
              </h3>
              <p className="font-sans text-xs text-[#25150e]/60 mt-1">
                Deixe sua proposta, feedback ou mensagem profissional para batermos um papo técnico.
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-name" className="font-serif font-black text-xs uppercase tracking-wider text-[#1c0f0a]">
                    Seu Nome:
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Amigo Recrutador"
                    className="w-full bg-[#f5ede1] border border-[#25150e]/20 focus:border-[#1c0f0a] focus:bg-[#FAF6EE] focus:ring-0 rounded-xl px-4 py-3 font-sans text-xs text-[#1c0f0a] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="form-email" className="font-serif font-black text-xs uppercase tracking-wider text-[#1c0f0a]">
                    Seu E-mail:
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seuemail@empresa.com"
                    className="w-full bg-[#f5ede1] border border-[#25150e]/20 focus:border-[#1c0f0a] focus:bg-[#FAF6EE] focus:ring-0 rounded-xl px-4 py-3 font-sans text-xs text-[#1c0f0a] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="form-message" className="font-serif font-black text-xs uppercase tracking-wider text-[#1c0f0a]">
                  Proposta / Ideia / Recado:
                </label>
                <textarea
                  id="form-message"
                  required
                  rows={4}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Gostamos muito do seu perfil adaptado! Que tal bater um papo técnico sobre uma vaga?"
                  className="w-full bg-[#f5ede1] border border-[#25150e]/20 focus:border-[#1c0f0a] focus:bg-[#FAF6EE] focus:ring-0 rounded-xl p-4 font-sans text-xs text-[#1c0f0a] transition-colors resize-none"
                />
              </div>

              {/* Submitted message bubble feedback */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-[#25150e] text-[#FAF6EE] p-4 rounded-xl border border-[#e27274]/40 font-mono text-xs flex flex-col gap-1 relative"
                  >
                    <span className="text-[#e27274] font-bold">Mensagem Enviada! 🌟</span>
                    <span>Sua mensagem de contato profissional foi armazenada localmente na minha gaveta de recados.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                className="w-full bg-[#1c0f0a] hover:bg-[#e27274] hover:text-[#1c0f0a] text-[#FAF6EE] font-serif font-black text-sm uppercase tracking-wider py-4 rounded-full transition-all duration-200 active:scale-98 shadow-sm flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                ENVIAR MENSAGEM <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Secrets local inbox (Local storage sandbox reader) */}
            {messages.length > 0 && (
              <div className="mt-6 pt-4 border-t-2 border-dashed border-[#25150e]/15">
                <button
                  type="button"
                  onClick={() => setShowInbox(!showInbox)}
                  className="font-mono text-[10px] uppercase font-black tracking-widest text-[#e27274] flex items-center gap-1 cursor-pointer"
                >
                  📬 GAVETA DE RECADOS RECEBIDOS ({messages.length}) {showInbox ? "▼" : "▶"}
                </button>

                {showInbox && (
                  <div className="mt-4 flex flex-col gap-3 max-h-52 overflow-y-auto pr-2">
                    {messages.map((m) => (
                      <div key={m.id} className="p-3.5 bg-[#f5ede1] rounded-xl border border-[#1c0f0a]/15 text-xs relative group flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <span className="font-serif font-black text-[#1c0f0a]">{m.name}</span>
                          <span className="font-mono text-[9px] text-[#25150e]/50">{m.date}</span>
                        </div>
                        <span className="font-mono text-[10px] text-[#e27274] font-semibold">{m.email}</span>
                        <p className="font-sans text-[11px] text-[#25150e]/80 mt-1 italic">"{m.text}"</p>

                        <button
                          type="button"
                          onClick={(e) => handleDeleteMessage(m.id, e)}
                          className="absolute right-2.5 bottom-2.5 opacity-0 group-hover:opacity-100 text-[#c25759] hover:text-[#1c0f0a] transition-all p-1"
                          title="Apagar recado"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>

        </div>

        {/* MASSIVE BOTTOM LOGO: "EDUARDA" */}
        <div className="mt-20 pt-8 border-t border-[#FAF6EE]/10 text-center select-none overflow-hidden">
          <h1 className="font-serif font-black text-[12vw] tracking-[0.25em] leading-none text-[#FAF6EE]/5 translate-y-4 inline-block hover:text-[#e27274]/10 transition-colors uppercase">
            Eduarda
          </h1>
        </div>

        {/* Legal Rights line */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-[#FAF6EE]/45 mt-4 pt-4 border-t border-[#FAF6EE]/5 gap-2">
          <span>© 2026 Eduarda Silva Santos. Feito com amor, café e código artesanal.</span>
          <span className="bg-[#FAF6EE]/5 px-3 py-1 rounded-full">ESTÉTICA FLOR & LUZ COMPATÍVEL</span>
        </div>

      </div>
    </footer>
  );
}
