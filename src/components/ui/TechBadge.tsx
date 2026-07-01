type TechBadgeProps = {
  children: string;
};

export function TechBadge({ children }: TechBadgeProps) {
  return (
    <span className="bg-[#f5ede1] border border-[#25150e]/10 text-[#25150e]/80 font-mono text-[10px] px-2.5 py-1 rounded-md">
      #{children}
    </span>
  );
}
