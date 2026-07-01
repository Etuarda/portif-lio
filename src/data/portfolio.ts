import type { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  name: "Eduarda Silva Santos",
  title: "Desenvolvedora Full Stack",
  subtitle: "Desenvolvimento Full Stack, Back-end, Engenharia de Dados e IA Aplicada com foco em arquiteturas sólidas e usabilidade.",
  bio: "Sou Desenvolvedora Full Stack com foco em React, Node.js, TypeScript, PostgreSQL e arquitetura de APIs. Estudante de Análise e Desenvolvimento de Sistemas pela PUCRS, formada em Desenvolvimento Web pela Cubos Academy, em formação pelo Programadores do Amanhã e com estudos em Inteligência Artificial pela Capacitação Nacional em IA — PPI/CTE-IA (FDTE/USP). Minha atuação conecta engenharia de software com raciocínio analítico para transformar dados e processos em soluções de impacto real.",
  skillsCategories: [
    {
      title: "Front-End",
      skills: [
        { name: "React", description: "Criação de SPAs dinâmicas, arquitetura de componentes modulares e hooks customizados." },
        { name: "TypeScript", description: "Tipagem estrita, interfaces seguras e aumento de robustez na aplicação." },
        { name: "Tailwind CSS", description: "Design responsivo, otimização de estilos utilitários e layouts fluidos." },
        { name: "React Router DOM", description: "Gerenciamento de rotas complexas, navegação SPA e lazy loading." },
        { name: "Material UI / Axios", description: "Uso de bibliotecas robustas para UI profissional e consumo eficiente de APIs REST." }
      ]
    },
    {
      title: "Back-End & APIs",
      skills: [
        { name: "Node.js / Express", description: "Construção de APIs escaláveis, middlewares personalizados e tratamento rigoroso de erros." },
        { name: "JWT & Zod", description: "Autenticação segura via JSON Web Tokens e validação de esquemas de dados em tempo de execução." },
        { name: "Prisma & Sequelize", description: "ORMs modernos para modelagem de banco de dados e migrações eficientes." },
        { name: "Arquitetura em Camadas", description: "Organização estrutural limpa em controllers, services, repositories e DTOs." }
      ]
    },
    {
      title: "Bancos de Dados & Cache",
      skills: [
        { name: "PostgreSQL", description: "Modelagem relacional, normalização de tabelas e otimização de consultas complexas." },
        { name: "MySQL / SQLite", description: "Persistência leve para micro-ambientes, desenvolvimento local e testes." },
        { name: "Redis", description: "Gerenciamento de cache em memória para otimização de latência e controle de sessões." }
      ]
    },
    {
      title: "Dados & Inteligência Artificial",
      skills: [
        { name: "Python", description: "Processamento, limpeza, tratamento de volumes de dados e análise exploratória." },
        { name: "Scikit-Learn / Machine Learning", description: "Implementação de modelos preditivos, regressão logística e classificação." },
        { name: "Looker Studio", description: "Geração de dashboards estratégicos e visualizações de business intelligence." },
        { name: "NLP & OpenCV", description: "Experimentos aplicados de processamento de linguagem natural e visão computacional." }
      ]
    },
    {
      title: "Ferramentas & Qualidade",
      skills: [
        { name: "Docker & Compose", description: "Conteinerização de ambientes de desenvolvimento e microsserviços." },
        { name: "RabbitMQ", description: "Arquiteturas orientadas a eventos e mensageria assíncrona distribuída." },
        { name: "Git & GitHub Actions", description: "Fluxos de trabalho Gitflow, integração contínua e automação de deploys." },
        { name: "Acessibilidade & Testes", description: "Desenvolvimento alinhado à WCAG 2.2, testes unitários com Vitest e React Testing Library." }
      ]
    }
  ],
  projects: [
    {
      id: "onvagas",
      title: "OnVagas",
      description: "Plataforma SaaS para otimização de candidaturas, análise de compatibilidade perfil-vaga e geração de currículos personalizados.",
      longDescription: "O OnVagas centraliza o histórico de análises de candidaturas e resolve o gargalo de adaptação manual de currículos. Projetado como um produto real, gerencia perfis profissionais estruturados, avalia afinidades técnicas com vagas e gera saídas sob medida.",
      tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Neon", "JWT", "Zod", "Redis"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600&h=400",
      features: [
        "Desenvolvimento Full Stack completo com arquitetura de produto SaaS real",
        "Modelagem relacional otimizada no PostgreSQL utilizando Prisma ORM",
        "Autenticação de usuários segura através de JWT e validação estrita com Zod",
        "Controle de concorrência e gerenciamento reativo do histórico de candidaturas"
      ],
      demoUrl: "https://onvagas.com.br/",
      githubUrl: "https://github.com/Etuarda/vagasrepo"
    },
    {
      id: "controle-planos",
      title: "Sistema de Controle de Planos",
      description: "Arquitetura back-end baseada em microsserviços distribuídos para faturamento, gestão de planos e assinaturas recorrentes.",
      longDescription: "Sistema simulando infraestrutura de escala corporativa para controle de clientes e cobranças. Utiliza comunicação assíncrona para garantir resiliência e isolamento de serviços de pagamentos e cadastros.",
      tags: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "RabbitMQ", "Docker", "Microsserviços"],
      category: "backend",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600&h=400",
      features: [
        "Arquitetura de microsserviços desacoplados e orquestrados com Docker Compose",
        "Mensageria assíncrona robusta utilizando RabbitMQ para processamento resiliente",
        "Caches estratégicos com Redis para otimizar tempo de resposta e poupar o banco",
        "API Gateway centralizando rotas, logs de requisições e rate limiting"
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/Etuarda/backend"
    },
    {
      id: "roadmap-planner",
      title: "Backend Roadmap Planner",
      description: "Ferramenta de diagnóstico para programadores, avaliando lacunas técnicas em eixos de back-end Node.js e gerando trilhas progressivas.",
      longDescription: "Plataforma voltada ao ecossistema educacional técnico. Avalia competências em HTTP, APIs, bancos de dados e arquitetura, calculando pontuações por eixo para gerar cronogramas sequenciais de estudos práticos.",
      tags: ["React", "TypeScript", "Node.js", "Express", "Zod", "Tailwind CSS"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600&h=400",
      features: [
        "Motor de recomendação estruturado baseado em pontuações e regras de negócio",
        "Arquitetura de API modular e organizada em camadas (Controllers, Services, Repositories)",
        "Validação de dados rigorosa tanto no cliente quanto no servidor com Zod",
        "Interface fluida com acompanhamento interativo do progresso do estudante"
      ],
      demoUrl: "https://miniprojetopda4-1.onrender.com/",
      githubUrl: "https://github.com/Etuarda/miniProjetoPda4"
    },
    {
      id: "a11y-io",
      title: "a11y.io",
      description: "Assistente inteligente de apoio à engenharia de requisitos focada em acessibilidade digital (critérios WCAG 2.2 e cenários BDD).",
      longDescription: "Solução que aproxima qualidade de software e acessibilidade desde as etapas iniciais de design. Transforma requisitos brutos em histórias de usuário detalhadas com critérios de aceite adaptados à acessibilidade digital.",
      tags: ["React", "Node.js", "Express", "Clean Architecture", "WCAG 2.2", "BDD"],
      category: "data_ai",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=600&h=400",
      features: [
        "Interface voltada à especificação ágil e documentação de requisitos acessíveis",
        "Clean Architecture dividindo estritamente as regras de domínio e casos de uso",
        "Alinhamento com diretrizes WCAG 2.2 para geração de user stories e cenários BDD",
        "Estrutura pensada para simplificar a adoção de acessibilidade por times de desenvolvimento"
      ],
      demoUrl: "https://a11y-6cvv.onrender.com/",
      githubUrl: "https://github.com/Etuarda/a11y"
    },
    {
      id: "serie-journal",
      title: "Série Journal",
      description: "Aplicação front-end com CRUD completo em React para cadastro, catalogação e busca dinâmica de séries assistidas.",
      longDescription: "Sistema para catálogo pessoal de entretenimento. Conta com rotas aninhadas, consumo estruturado de dados de APIs externas via Axios e suite de testes unitários para garantir estabilidade da interface.",
      tags: ["React", "Vite", "React Router DOM", "Axios", "Material UI", "Vitest", "Testing Library"],
      category: "frontend",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=600&h=400",
      features: [
        "Interface rica de usuário construída sobre componentes responsivos Material UI",
        "Suíte de testes automatizados com cobertura de componentes via Vitest e Testing Library",
        "Roteamento robusto com React Router DOM gerenciando estados de navegação",
        "Busca e filtragem instantânea do acervo no lado do cliente"
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/Etuarda/Series-Journal"
    },
    {
      id: "residencia-dados",
      title: "Análise de Dados — Residência PUC-Rio",
      description: "Relatório de inteligência analítica com limpeza, ETL de dados brutos e construção de dashboards interativos.",
      longDescription: "Desenvolvido durante residência prática em análise de dados. Focado em consolidar bases de dados dispersas, calibrar indicadores e montar relatórios dinâmicos para suportar decisões corporativas.",
      tags: ["Python", "Pandas", "Matplotlib", "Looker Studio", "ETL", "SQL"],
      category: "data_ai",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400",
      features: [
        "Processamento completo de tratamento de inconsistências em dados com Pandas",
        "Criação de métricas de performance corporativa e modelagem star schema",
        "Construção de relatórios visuais refinados no Looker Studio",
        "Uso de storytelling com dados para traduzir números em ações de negócio claras"
      ],
      demoUrl: "https://datastudio.google.com/s/rhrnbLbiyq4",
      githubUrl: "#"
    },
    {
      id: "capacitacao-ia",
      title: "Laboratório de IA — FDTE/USP",
      description: "Coleção de estudos de modelagem preditiva, classificação, processamento de linguagem natural e visão computacional.",
      longDescription: "Repositório técnico consolidando projetos e investigações no âmbito da Capacitação Nacional em IA. Cobre desde classificação estatística binária até experimentos de aprendizado por reforço.",
      tags: ["Python", "Scikit-Learn", "Machine Learning", "NLP", "OpenCV", "TensorFlow", "Deep Learning"],
      category: "data_ai",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600&h=400",
      features: [
        "Processamento de Linguagem Natural aplicando NLP para chatbot inteligente de FAQs",
        "Visão computacional prática utilizando OpenCV para template matching e classificação de imagens",
        "Construção e avaliação experimental de regressão logística para modelagens preditivas",
        "Estudo de aprendizado por reforço aplicando algoritmos de Q-learning e SARSA em grades"
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/Etuarda/capacitacao-tecnica-em-IA--FDTE_USP"
    },
    {
      id: "caminho-seguro",
      title: "Caminho Seguro",
      description: "Protótipo web de impacto social com foco em acesso discreto, privacidade de dados locais e utilitários de emergência para mulheres.",
      longDescription: "Desenvolvido como projeto educacional prático de alto valor social. Focado em máxima usabilidade móvel, sigilo na interface de usuário e armazenamento local sandbox de registros pessoais.",
      tags: ["HTML", "CSS", "JavaScript", "LocalStorage", "Impacto Social"],
      category: "frontend",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=600&h=400",
      features: [
        "Interface adaptativa com visualização limpa e discreta para proteção",
        "Persistência local segura de anotações e contatos no LocalStorage do navegador",
        "Navegação veloz e otimizada construída inteiramente com JavaScript Baunilha",
        "Foco estrito em usabilidade sob cenários de alta urgência"
      ],
      demoUrl: "https://etuarda.github.io/mulhersegura/src/html/calculadora.html",
      githubUrl: "https://github.com/Etuarda/mulhersegura"
    }
  ],
  experiences: [
    {
      id: "pesquisa-puc",
      role: "Pesquisadora Acadêmica de Acessibilidade Digital",
      company: "PUCRS (Remoto)",
      period: "Agosto de 2025 - Presente",
      description: "Atuação focada na especificação integrada de requisitos de acessibilidade para sistemas de software de alta usabilidade.",
      achievements: [
        "Avaliação minuciosa de requisitos de software aplicando heurísticas baseadas estritamente nas normas WCAG 2.2.",
        "Trabalho colaborativo refinando cenários reais e fornecendo feedback documentado para aperfeiçoar metodologias de design acessível.",
        "Validação experimental de ferramentas e sugestões incorporadas com rigor técnico para times de engenharia."
      ]
    },
    {
      id: "dev-autonomo",
      role: "Desenvolvedora Full Stack",
      company: "Projetos Acadêmicos & Autorais (Remoto)",
      period: "Janeiro de 2024 - Presente",
      description: "Desenvolvimento ativo de soluções completas de ponta a ponta, conectando bancos de dados escaláveis a interfaces dinâmicas.",
      achievements: [
        "Projetei e programei APIs REST seguras e eficientes em Express e Prisma ORM, integrando-as com bancos Postgres relacionais.",
        "Implementei interfaces flexíveis em React aplicando componentização inteligente e técnicas de acessibilidade sob demanda.",
        "Estabeleci documentações detalhadas (Swagger / Swagger UI) e mantive versionamento rigoroso de ramificações Git no GitHub."
      ]
    },
    {
      id: "residente-pucrio",
      role: "Residente em Análise de Dados",
      company: "Instituto ECOA PUC-Rio (Remoto)",
      period: "Agosto de 2025 - Novembro de 2025",
      description: "Residência prática focada em tratamento de dados, inteligência analítica, extração, modelagem e suporte a tomada de decisão.",
      achievements: [
        "Estruturei pipelines simplificados de ETL, cuidando do saneamento, consistência e transformação de dados em Python (Pandas).",
        "Criei dashboards dinâmicos no Looker Studio para visualização rápida de indicadores de desempenho críticos.",
        "Apresentei relatórios com storytelling de dados de fácil interpretação para stakeholders do programa TIC em Trilhas."
      ]
    },
    {
      id: "telemarketing-aec",
      role: "Profissional de Atendimento ao Cliente",
      company: "AeC (Campina Grande - Híbrido)",
      period: "Janeiro de 2021 - Julho de 2024",
      description: "Suporte resolutivo de alta performance ao cliente final, lapidando soft-skills fundamentais de negociação e resolução de demandas críticas.",
      achievements: [
        "Aprimoramento em comunicação assertiva, escuta ativa e gerenciamento de conflitos sob cenários de pressão corporativa.",
        "Organização de históricos de chamados e conformidade ágil com metas de produtividade e controle de tempo.",
        "Sólida experiência que hoje direciona minha empatia e assertividade para entender necessidades dos usuários ao projetar interfaces."
      ]
    }
  ],
  education: [
    {
      id: "edu_1",
      year: "2024 - Em andamento",
      title: "Tecnologia em Análise e Desenvolvimento de Sistemas",
      institution: "PUCRS (Pontifícia Universidade Católica do Rio Grande do Sul)",
      description: "Formação superior com ênfase em Engenharia de Software, modelagem de dados relacionais, arquitetura de APIs e boas práticas de desenvolvimento.",
      skills: ["Engenharia de Software", "Sistemas Web", "Banco de Dados", "Arquitetura de APIs", "Metodologias Ágeis"]
    },
    {
      id: "edu_2",
      year: "2015 - 2018",
      title: "Ensino Médio Concluído",
      institution: "Unidade Escolar Senador Chagas Rodrigues — UESCR",
      description: "Educação geral básica e desenvolvimento de competências fundamentais.",
      skills: ["Comunicação", "Raciocínio Lógico"]
    }
  ],
  complementaryEducation: [
    {
      id: "comp_1",
      year: "2026",
      title: "Trilha para ELAS em Agentes de IA",
      institution: "Instituto Eldorado & IBM SkillsBuild",
      description: "Formação complementar voltada a fundamentos e aplicações de agentes de IA, com foco em conceitos, possibilidades práticas e uso de IA generativa em soluções digitais. Certificação ID: PLAN-5A7A14F90773 (Concluído em 28 de Junho de 2026).",
      skills: ["Agentes de IA", "IA Generativa", "IBM SkillsBuild", "Orquestração de LLMs"]
    },
    {
      id: "comp_2",
      year: "2025 - 2026",
      title: "Capacitação Técnica e Empreendedora em Inteligência Artificial",
      institution: "Fundação para o Desenvolvimento Tecnológico da Engenharia — FDTE / USP",
      description: "Programa nacional robusto de 360 horas de imersão (PPI — CTE-IA com apoio da UFC, Softex e MCTI) focado em Machine Learning, PLN, Visão Computacional, Deep Learning e Aprendizado por Reforço.",
      skills: ["Machine Learning", "NLP", "Visão Computacional", "Python", "Deep Learning", "Estatística Aplicada"]
    },
    {
      id: "comp_3",
      year: "2025 - 2026",
      title: "Programadores do Amanhã (Computer Software Technician)",
      institution: "Programadores do Amanhã (Parceria Educacional)",
      description: "Formação extensiva prática de um ano em desenvolvimento full stack em squad, cobrindo JavaScript, Node.js, Express, Sequelize, MySQL, React, metodologias ágeis e soft skills.",
      skills: ["Node.js", "Express", "Sequelize", "MySQL", "React", "SQUADS", "Metodologias Ágeis"]
    },
    {
      id: "comp_4",
      year: "2025",
      title: "Residência Trilhas em Tecnologia — Análise de Dados",
      institution: "Instituto ECOA / PUC-Rio (Pontifícia Universidade Católica do Rio de Janeiro)",
      description: "Residência prática hands-on de 340 horas cobrindo pipelines de ETL de dados reais, calibração de métricas de negócio, construção de dashboards e tomada de decisão estratégica.",
      skills: ["Análise de Dados", "ETL", "Looker Studio", "Storytelling de Dados", "Pandas"]
    },
    {
      id: "comp_5",
      year: "2025",
      title: "Primeiros Passos em Visualização e Inteligência de Dados",
      institution: "PUC-Rio (Pontifícia Universidade Católica do Rio de Janeiro)",
      description: "Curso prático de 32 horas focado em design de dashboards, inteligência analítica de negócios e comunicação visual de indicadores de desempenho.",
      skills: ["Visualização de Dados", "KPIs", "Dashboards", "Business Intelligence"]
    },
    {
      id: "comp_6",
      year: "2025",
      title: "Lógica de Programação para Web",
      institution: "Venturus (Capacitação Tecnológica)",
      description: "Formação complementar intensiva de 36 horas focada na resolução de algoritmos complexos, estruturas de repetição e lógica computacional pura aplicada à web.",
      skills: ["Lógica de Programação", "Algoritmos", "JavaScript", "Resolução de Problemas"]
    },
    {
      id: "comp_7",
      year: "2025",
      title: "Eu Progr{amo}",
      institution: "PrograMaria",
      description: "Capacitação prática de 16 horas focada em HTML5, CSS3, JS e introdução às tecnologias Web modernas com viés de inclusão e impacto.",
      skills: ["HTML5", "CSS Semântico", "JavaScript", "Comunidade"]
    },
    {
      id: "comp_8",
      year: "2025",
      title: "Introdução à Programação",
      institution: "Minas Programam",
      description: "Curso robusto de 120 horas abordando lógica de programação pura, semântica web, design adaptativo e técnicas de engenharia de software básicas.",
      skills: ["HTML", "CSS", "Lógica de Programação", "Raciocínio Computacional"]
    },
    {
      id: "comp_9",
      year: "2025",
      title: "Programa de Mentoria Ser Mulher em Tech",
      institution: "Ser Mulher em Tech (Comunidade & Carreira)",
      description: "Programa focado em soft skills, posicionamento profissional, mentoria de arquitetura de software e preparação para entrevistas e desafios de mercado.",
      skills: ["Soft Skills", "Carreira em TI", "Posicionamento", "Planejamento"]
    },
    {
      id: "comp_10",
      year: "2024",
      title: "TypeScript Avançado",
      institution: "Cubos Academy",
      description: "Curso focado de 77 horas em tipagem estrita, interfaces de dados robustas, decoradores, tipos genéricos e integração segura com APIs Node.js.",
      skills: ["TypeScript", "Tipagem Estrita", "Generics", "Segurança de Código"]
    },
    {
      id: "comp_11",
      year: "2024",
      title: "Desenvolvimento de Software — Frontend",
      institution: "Cubos Academy",
      description: "Mais de 492 horas dedicadas ao desenvolvimento de SPAs dinâmicas com React, gerenciamento de rotas e consumo de APIs estruturadas.",
      skills: ["React", "JavaScript", "Componentização", "Consumo de APIs REST", "Vite"]
    },
    {
      id: "comp_12",
      year: "2023 - 2024",
      title: "Programação do Zero Noturno — Foco em Back-End",
      institution: "Cubos Academy",
      description: "Mais de 600 horas de imersão completa em arquitetura de APIs REST, Node.js, Express, modelagem de banco de dados PostgreSQL e versionamento com Git.",
      skills: ["Node.js", "Express", "PostgreSQL", "SQL", "APIs REST", "Git", "GitHub"]
    }
  ]
};
