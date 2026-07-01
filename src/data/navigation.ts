import type { ProjectCategory } from "@/types/portfolio";

export const sectionLinks = [
  { id: "sobre", label: "Sobre" },
  { id: "projetos", label: "Projetos" },
  { id: "skills", label: "Skills" },
  { id: "experiencia", label: "Trajetória" },
  { id: "contato", label: "Mensagem" },
] as const;

export type SectionId = (typeof sectionLinks)[number]["id"];

export const sectionIds = sectionLinks.map((item) => item.id);

export const projectCategories = [
  { id: "all", label: "Todos" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "backend", label: "Back-End" },
  { id: "frontend", label: "Front-End" },
  { id: "data_ai", label: "Dados & IA" },
] as const satisfies ReadonlyArray<{ id: "all" | ProjectCategory; label: string }>;

export type ProjectFilter = (typeof projectCategories)[number]["id"];
