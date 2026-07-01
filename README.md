# Portfólio Eduarda Santos

Portfólio em React, TypeScript, Vite, Tailwind CSS v4 e Motion. A arquitetura foi organizada para separar dados, tipagens, hooks, componentes de layout, seções e componentes de UI reutilizáveis.

## Como rodar localmente

```bash
npm install
npm run dev
```

## Scripts úteis

```bash
npm run typecheck
npm run build
npm run preview
```

## Estrutura principal

```txt
src/
  App.tsx
  components/
    layout/      # Header, SplashIntro e Footer
    sections/    # Hero, Projetos, Skills e Experiência
    ui/          # Componentes reutilizáveis de apresentação
  constants/     # Configurações compartilhadas de animação
  data/          # Conteúdo do portfólio e navegação
  hooks/         # Hooks reutilizáveis
  types/         # Tipagens de domínio
```

## Observação técnica

O formulário de contato mantém o comportamento original: armazena mensagens no `localStorage` do navegador. Para produção real, o ideal é integrar com API própria, Formspree, Resend, EmailJS ou endpoint serverless.
