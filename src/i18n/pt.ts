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
    titleBeforeHighlight: "Projetos em",
    titleHighlight: "Destaque",
    titleAfterHighlight: "",
    allTitle: "Todos os Projetos",
    allTitleHighlight: "Todos",
    allTitleRest: "os Projetos",
    featuredBadge: "Destaque",
    clickForDetails: "Clique para ver detalhes",
    modal: {
      close: "Fechar",
      overview: "Visão Geral",
      features: "Principais Funcionalidades",
      technologies: "Tecnologias & Arquitetura",
      viewLive: "Acessar Aplicação",
      viewStore: "Ver na Play Store",
      viewAppStore: "Ver na App Store",
      viewCode: "Ver Código",
      closedSource: "Código Proprietário",
      gallery: "Galeria do Projeto"
    },
    featured: [
      {
        id: "velo-servicos-gerais",
        name: "Velo: Serviços Gerais",
        description: "Velo é um aplicativo completo de marketplace de serviços gerais desenvolvido integralmente por mim do zero. A plataforma conecta clientes que precisam de serviços do dia a dia — como reformas, manutenção, limpeza, elétrica e assistência técnica — a profissionais qualificados, oferecendo solicitação de orçamentos, gestão de pedidos, comunicação direta e acompanhamento de todo o atendimento em um só lugar.",
        cardSummary: "Marketplace mobile completo que conecta clientes a profissionais de serviços gerais, com orçamentos e gestão de pedidos.",
        topics: ["React Native", "TypeScript", "Expo", "iOS & Android"],
        features: [
          "Conexão ágil entre clientes e prestadores de serviços gerais por categoria e região",
          "Fluxo completo de solicitação, envio e comparação de orçamentos no aplicativo",
          "Perfis de profissionais com portfólio, avaliações e histórico de atendimentos",
          "Acompanhamento em tempo real do status de pedidos e agendamentos",
          "Desenvolvimento completo end-to-end publicado na Google Play e App Store"
        ],
        homepage: "https://play.google.com/store/apps/details?id=com.victormussoline.appvelo&pcampaignid=web_share",
        appStoreUrl: "https://apps.apple.com/br/app/velo-servi%C3%A7os-gerais/id6810832850",
        images: [
          "/projects/velo-app/1.jpg",
          "/projects/velo-app/2.jpg",
          "/projects/velo-app/3.jpg"
        ],
        featured: true,
        isPlayStore: true,
        demoLabel: "Google Play",
        appStoreLabel: "App Store"
      },
      {
        id: "velo-api",
        name: "Velo API: Core Backend & Marketplace",
        description: "API RESTful robusta e escalável desenvolvida em Java 21 e Spring Boot 3 que alimenta todo o ecossistema Velo. Responsável por orquestrar o matching geoespacial entre clientes e prestadores, processar pagamentos via Pix e assinaturas com Asaas e RevenueCat, gerenciar chat com notificações push via Firebase FCM e garantir segurança de ponta com Spring Security, JWT e autenticação social. Toda a API e sua infraestrutura foram configuradas por mim para rodar na Google Cloud Platform (GCP) da forma mais otimizada possível, equilibrando alta performance, escalabilidade automática e eficiência de custos.",
        cardSummary: "API RESTful em Java 21 & Spring Boot 3 configurada de forma otimizada na Google Cloud, orquestrando matching geoespacial, Pix/assinaturas, chat com push e autenticação social.",
        topics: [
          "Java 21",
          "Spring Boot 3",
          "Google Cloud (GCP)",
          "PostgreSQL",
          "Docker",
          "Spring Security & JWT",
          "Firebase FCM",
          "Asaas & RevenueCat"
        ],
        features: [
          "Matching geoespacial eficiente de serviços e prestadores por proximidade e categoria",
          "Integração completa de pagamentos via Pix e assinaturas com Asaas e RevenueCat",
          "Sistema de chat integrado com envio de push notifications em tempo real via Firebase FCM",
          "Autenticação segura com Spring Security, JWT e login social",
          "Infraestrutura e deploy configurados na Google Cloud Platform (GCP) com máxima otimização de performance, escalabilidade e custos",
          "Arquitetura containerizada com Docker e persistência relacional em PostgreSQL"
        ],
        images: [
          "/projects/velo-api/architecture.svg"
        ],
        featured: true
      },
      {
        id: "velo-dashboard",
        name: "Velo Dashboard: Painel Administrativo & Analytics",
        description: "Painel administrativo e executivo desenvolvido para gerenciar toda a operação do ecossistema Velo em tempo real. A plataforma centraliza telemetria operacional e financeira com gráficos interativos, gestão completa de usuários, prestadores e clientes (com rankings, disponibilidade e verificação documental), controle de créditos e vendas in-app sincronizados via RevenueCat (Google Play e App Store), administração de empresas parceiras com ciclos de renovação, moderação de denúncias e um módulo dedicado de Analytics de Conversão com funil completo e diagnóstico de pontos de abandono.",
        cardSummary: "Painel executivo do ecossistema Velo com telemetria em tempo real, gestão de usuários, créditos/RevenueCat, parceiros, moderação e funil de conversão.",
        topics: [
          "React",
          "TypeScript",
          "Tailwind CSS",
          "RevenueCat",
          "Analytics & Funil",
          "REST API"
        ],
        features: [
          "Dashboard executivo em tempo real com KPIs financeiros e operacionais, alertas de cobrança e gráficos interativos (área, barras e linhas)",
          "Gestão centralizada de usuários, prestadores (disponibilidade, ranking de jobs, avaliações e áreas de cobertura) e clientes com filtros avançados",
          "Módulo de Créditos & Vendas com pacotes de moedas sincronizados na Google Play e App Store via RevenueCat e histórico detalhado de transações",
          "Administração de Empresas Parceiras com exibição geolocalizada no app, controle de ciclos de 90 dias, renovação e avisos de mensalidade",
          "Central de Segurança & Auditoria para validação de documentos e moderação de denúncias com fluxo de status (pendente, em análise e resolvida)",
          "Inteligência de Conversão com funil completo da jornada (demanda → contato → aceite → conclusão) e diagnóstico automático de abandono (drop-off)"
        ],
        images: [
          "/projects/dashboard/1.png",
          "/projects/dashboard/2.png",
          "/projects/dashboard/3.png",
          "/projects/dashboard/4.png",
          "/projects/dashboard/5.png",
          "/projects/dashboard/6.png",
          "/projects/dashboard/7.png",
          "/projects/dashboard/8.png"
        ],
        featured: true
      },
      {
        id: "arami-psl-jornadas",
        name: "Arami: PSL Jornadas",
        description: "Arami é a plataforma oficial da PsicoSistemoLogia para acompanhar sua Jornada Restaurativa. Desenvolvido para apoiar seu processo de desenvolvimento pessoal, o Arami reúne jornadas estruturadas, práticas restaurativas, conteúdo exclusivo e uma comunidade acolhedora em um único aplicativo. Cada etapa da jornada foi planejada para respeitar seu ritmo e proporcionar uma experiência significativa de aprendizado, reflexão e crescimento.",
        cardSummary: "Plataforma mobile de jornadas restaurativas com progresso guiado, conteúdo multimídia e uma comunidade acolhedora.",
        topics: ["React Native", "TypeScript", "Expo", "Redux Toolkit"],
        features: [
          "Jornadas guiadas com etapas sequenciais e acompanhamento de evolução",
          "Player multimídia integrado para práticas restaurativas e meditações",
          "Comunidade interna de acolhimento e troca de experiências",
          "Arquitetura offline-first com sincronização periódica de dados",
          "Interface responsiva otimizada para iOS e Android via Expo"
        ],
        homepage: "https://play.google.com/store/apps/details?id=com.psl.arami&hl=en-US&ah=87IIPeiH48M02EUUQ433IxROB6Q",
        appStoreUrl: "https://apps.apple.com/br/app/arami-psl-jornadas/id6791764558",
        featured: true,
        isPlayStore: true,
        demoLabel: "Google Play",
        appStoreLabel: "App Store",
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
        cardSummary: "Dashboard de operação com métricas em tempo real, gestão de usuários e acompanhamento de jornadas.",
        topics: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
        features: [
          "Painel de métricas analíticas e engajamento em tempo real",
          "Gestão de usuários, acessos e jornadas ativas",
          "Gráficos interativos de retenção e atividade com Recharts",
          "Controle de conteúdos, notificações e publicação de materiais"
        ],
        images: [
          "/projects/aramidash-1.png",
          "/projects/aramidash-2.png",
          "/projects/aramidash-3.png"
        ],
        featured: false
      },
      {
        id: "fincontrol",
        name: "FinControl",
        description: "Dashboard completo de gestão financeira com métricas em tempo real, controle de receitas/despesas, fluxo de caixa e relatórios visuais.",
        cardSummary: "Gestão financeira completa com gráficos em tempo real, fluxo de caixa inteligente e relatórios visuais.",
        topics: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Supabase"],
        features: [
          "Fluxo de caixa inteligente com categorização automática de transações",
          "Autenticação e banco de dados em tempo real com Supabase",
          "Relatórios visuais e projeções orçamentárias detalhadas",
          "Design dark mode glassmorphic com alta responsividade"
        ],
        html_url: "https://github.com/VictorMussoline/FinControl",
        homepage: "https://fincontrol-open-app.vercel.app",
        images: [
          "/projects/fincontrol-1.png",
          "/projects/fincontrol-2.png",
          "/projects/fincontrol-3.png"
        ],
        featured: false
      },
      {
        id: "techforge",
        name: "TechForge",
        description: "Website institucional e catálogo de serviços de TI para a TechForge, com design futurista, monitoramento e apresentação de soluções de infraestrutura.",
        cardSummary: "Site institucional com visual futurista, vitrine de serviços e foco em presença digital premium.",
        topics: ["React", "TypeScript", "Vite", "Framer Motion", "CSS3"],
        features: [
          "Interface futurista com efeitos visuais e microinterações Framer Motion",
          "Apresentação estruturada de catálogo de soluções em TI e Cloud",
          "Otimização de SEO e alta pontuação no Google Lighthouse",
          "Layout 100% responsivo e acessível"
        ],
        html_url: "https://github.com/VictorMussoline/TechForge-Site",
        homepage: "https://site-techforge.vercel.app",
        images: [
          "/projects/techforge-1.png",
          "/projects/techforge-2.png",
          "/projects/techforge-3.png"
        ],
        featured: false
      },
      {
        id: "portfolio-dev",
        name: "Meu Portfólio",
        description: "Aplicação Web Portfólio de alta performance com design glassmorphic, suporte multilíngue (i18n), animações no estilo Apple e suporte a PWA.",
        cardSummary: "Portfólio premium com glassmorphism, i18n, animações suaves e experiência instalável como PWA.",
        topics: ["React", "TypeScript", "Vite", "Framer Motion", "PWA"],
        features: [
          "Design glassmorphic dark mode com efeitos de partículas e cursor interativo",
          "Sistema completo de internacionalização (PT/EN)",
          "Progressive Web App (PWA) instalável",
          "Performance e acessibilidade de nível profissional"
        ],
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
        cardSummary: "Coleção interativa de mini-projetos e desafios de lógica, pensada para aprendizado prático.",
        topics: ["JavaScript", "HTML5", "CSS3", "Lógica de Programação"],
        features: [
          "Coleção interativa de mini-apps e desafios práticos de lógica",
          "Estrutura modular e código limpo",
          "Interface intuitiva com foco no aprendizado prático"
        ],
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
