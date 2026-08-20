export const pt = {
  nav: {
    about: "Sobre",
    experience: "Trajetória",
    projects: "Projetos",
    contact: "Contato",
    resume: "Currículo",
  },
  hero: {
    badge: "Victor Mussoline",
    titleStart: "Construindo aplicações ",
    titleHighlight1: "Web & Mobile",
    titleMid: " escaláveis com ",
    titleHighlight2: "React Native & Python",
    titleEnd: ".",
    subtitle: "Desenvolvedor Full-Stack especializado em desenvolvimento multiplataforma, arquitetura de software e engenharia assistida por IA.",
    btnProjects: "Ver Projetos",
    btnContact: "Entrar em Contato",
    btnCV: "Baixar CV",
  },
  about: {
    title: "Sobre Mim",
    p1: "Desenvolvedor Full-Stack e graduando em Sistemas de Informação. Uno minha experiência em operações de TI (TechForge) a uma visão profunda de arquitetura para construir software escalável, eficiente e integrado com a nuvem (Supabase/Vercel) e inteligência artificial.",
    tags: ["🎓 Sistemas de Informação", "⚡ Operações & Arquitetura", "🤖 Engenharia com IA"],
    roleBadge: "Engenheiro Full-Stack",
  },
  whatIBuild: {
    title: "O Que Eu Construo",
    items: [
      {
        title: "Aplicativos Mobile",
        description: "Engenharia de aplicações nativas e cross-platform (iOS/Android) com React Native, focando em performance, animações fluidas e gestão de estado complexa para garantir consistência em diferentes dispositivos."
      },
      {
        title: "Dashboards Responsivos",
        description: "Desenvolvimento de interfaces web ultra velozes com Vite, React e Tailwind CSS, priorizando arquitetura de componentes reutilizáveis, acessibilidade e carregamento instantâneo."
      },
      {
        title: "APIs REST",
        description: "Modelagem e implementação de arquiteturas back-end escaláveis (Python/Node.js), focando na segurança (autenticação, rate limiting), eficiência nas requisições e robustez do banco de dados (relacional e não-relacional)."
      },
      {
        title: "Workflows com IA",
        description: "Integração estratégica de agentes de IA para automatizar lógica de negócios complexa, gerenciar dados e acelerar fluxos de trabalho internos, otimizando o tempo de desenvolvimento e a precisão da entrega."
      },
      {
        title: "Integrações em Nuvem",
        description: "Implementação de infraestruturas em nuvem modernas com Supabase e Vercel, combinando modelagem relacional em PostgreSQL, autenticação segura e rotinas serverless."
      },
      {
        title: "Arquitetura de Software",
        description: "Design de sistemas desacoplados e sustentáveis, aplicando boas práticas de engenharia de software, código limpo e padrões arquiteturais prontos para escala de produção."
      }
    ]
  },
  timeline: {
    title: "Trajetória",
    items: [
      {
        year: "2021",
        role: "Técnico em Informática",
        description: "Base sólida em hardware, redes, infraestrutura e suporte técnico.",
        tags: ["Hardware", "Suporte", "Infraestrutura"]
      },
      {
        year: "2025",
        role: "TechWise",
        description: "Desenvolvimento de software Full-Stack, aplicações cliente e bancos relacionais.",
        tags: ["Full-Stack", "Apps Web", "Bancos de Dados"]
      },
      {
        year: "2026",
        role: "PsicoSistemoLogia",
        description: "Desenvolvimento de sistemas especializados, engenharia multiplataforma e integração de IA.",
        tags: ["React Native", "Python", "Integração de IA"]
      },
      {
        year: "Presente",
        role: "Próxima Oportunidade 🚀",
        description: "Pronto para gerar alto impacto na construção de aplicações Web & Mobile no seu time.",
        tags: ["Web & Mobile", "Sistemas Escaláveis", "Disponibilidade Imediata"]
      }
    ]
  },
  github: {
    title: "Estatísticas do GitHub",
  },
  projects: {
    title: "Projetos em Destaque",
    allTitle: "Todos os Projetos",
    allTitleHighlight: "Todos",
    allTitleRest: "os Projetos",
    featuredBadge: "Destaque",
    featured: [
      {
        id: "arami-psl-jornadas",
        name: "Arami: PSL Jornadas",
        description: "Arami é a plataforma oficial da PsicoSistemoLogia para acompanhar sua Jornada Restaurativa. Desenvolvido para apoiar seu processo de desenvolvimento pessoal, o Arami reúne jornadas estruturadas, práticas restaurativas, conteúdo exclusivo e uma comunidade acolhedora em um único aplicativo. Cada etapa da jornada foi planejada para respeitar seu ritmo e proporcionar uma experiência significativa de aprendizado, reflexão e crescimento.",
        topics: ["React Native", "TypeScript", "Expo", "Redux Toolkit"],
        homepage: "https://play.google.com/store/apps/details?id=com.psl.arami&hl=en-US&ah=87IIPeiH48M02EUUQ433IxROB6Q",
        featured: true,
        isPlayStore: true,
        demoLabel: "Página da Loja",
        images: [
          "/projects/aramiapp-1.png",
          "/projects/aramiapp-2.png",
          "/projects/aramiapp-3.png"
        ]
      },
      {
        id: "dashboard-arami",
        name: "Dashboard Arami",
        description: "Painel administrativo e gerencial para controle operacional, métricas de engajamento e monitoramento da plataforma Arami.",
        topics: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
        images: [
          "/projects/aramidash-1.png",
          "/projects/aramidash-2.png",
          "/projects/aramidash-3.png"
        ],
        featured: true
      },
      {
        id: "fincontrol",
        name: "FinControl",
        description: "Dashboard completo de gestão financeira com métricas em tempo real, controle de receitas/despesas, fluxo de caixa e relatórios visuais.",
        topics: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Supabase"],
        html_url: "https://github.com/VictorMussoline/FinControl",
        homepage: "https://fincontrol-open-app.vercel.app",
        images: [
          "/projects/fincontrol-1.png",
          "/projects/fincontrol-2.png",
          "/projects/fincontrol-3.png"
        ],
        featured: true
      },
      {
        id: "techforge",
        name: "TechForge",
        description: "Website institucional e catálogo de serviços de TI para a TechForge, com design futurista, monitoramento e apresentação de soluções de infraestrutura.",
        topics: ["React", "TypeScript", "Vite", "Framer Motion", "CSS3"],
        html_url: "https://github.com/VictorMussoline/TechForge-Site",
        homepage: "https://site-techforge.vercel.app",
        images: [
          "/projects/techforge-1.png",
          "/projects/techforge-2.png",
          "/projects/techforge-3.png"
        ],
        featured: true
      },
      {
        id: "portfolio-dev",
        name: "Meu Portfólio",
        description: "Aplicação Web Portfólio de alta performance com design glassmorphic, suporte multilíngue (i18n), animações no estilo Apple e suporte a PWA.",
        topics: ["React", "TypeScript", "Vite", "Framer Motion", "PWA"],
        html_url: "https://github.com/VictorMussoline/Portfolio-Dev",
        homepage: "https://victormussoline.vercel.app",
        images: [
          "/projects/portfolio-1.png",
          "/projects/portfolio-2.png",
          "/projects/portfolio-3.png"
        ],
        featured: false
      },
      {
        id: "imersao-dev-alura",
        name: "Bootcamp Dev Alura IA",
        description: "Plataforma interativa de projetos desenvolvidos durante a Imersão Dev da Alura, incluindo jogos, calculadoras e ferramentas de lógica de programação.",
        topics: ["JavaScript", "HTML5", "CSS3", "Lógica de Programação"],
        html_url: "https://github.com/VictorMussoline/Imersao-Dev-Alura",
        homepage: "https://victormussoline.github.io/imersao-dev-alura-10/",
        images: [
          "/projects/alura-1.png",
          "/projects/alura-2.png",
          "/projects/alura-3.png"
        ],
        featured: false
      }
    ],
    demo: "Ver Demo",
    viewAll: "Ver todos os projetos!",
    backToHome: "Voltar para o Início",
  },
  features: {
    title: "Diferenciais",
    list: [
      {
        title: "Desenvolvimento Full-Stack",
        text: "Criação de aplicações completas (Web e Mobile), conectando interfaces modernas a backends robustos de forma nativa."
      },
      {
        title: "Inglês Avançado Certificado (C1)",
        text: "Fluência sólida comprovada (Score 130 no DET), pronto para colaborar em times globais, reuniões e documentação internacional."
      },
      {
        title: "Arquitetura Relacional e APIs",
        text: "Modelagem de dados consistente e segura com Supabase e PostgreSQL, focada em integridade e respostas rápidas."
      },
      {
        title: "Interfaces de Alta Performance",
        text: "Telas ultra velozes e fluidas construídas com Vite, TypeScript e Tailwind CSS, priorizando a experiência do usuário (UX/UI)."
      },
      {
        title: "Desenvolvimento Mobile",
        text: "Criação de aplicativos para smartphones (com foco em React Native), expandindo o alcance do produto além do navegador."
      },
      {
        title: "Refatoração e Escalabilidade",
        text: "Capacidade de evoluir stacks legadas para arquiteturas modernas, otimizando custos, performance e manutenção do código."
      }
    ]
  },
  contact: {
    title: "Vamos conversar?",
    subtitle: "Aberto a oportunidades e novos projetos interessantes.",
    copyEmail: "Email copiado com sucesso!",
    copyEmailFail: "Falha ao copiar.",
    formName: "Seu Nome",
    formEmail: "Seu Email",
    formMessage: "Sua Mensagem",
    formSubmit: "Enviar Mensagem",
    formSending: "Enviando...",
    formSuccess: "Mensagem enviada com sucesso!",
  },
  footer: {
    rights: "Todos os direitos reservados.",
  }
};
