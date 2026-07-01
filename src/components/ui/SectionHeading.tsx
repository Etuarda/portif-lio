import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, icon }: SectionHeadingProps) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#e27274] font-black bg-[#1c0f0a] px-4 py-1 rounded-full border border-[#FAF6EE]/10 inline-flex items-center gap-2">
        {icon}
        {eyebrow}
      </span>
      <h2 className="font-serif font-black text-4xl md:text-5xl text-[#1c0f0a] tracking-tight mt-3">
        {title}
      </h2>
      <p className="font-sans text-sm text-[#25150e]/70 mt-3">
        {description}
      </p>
    </div>
  );
}
