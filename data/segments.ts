export type SegmentStatusItem = {
  label: string;
  value: string;
};

export type Segment = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  challenges: string[];
  solutions: string[];
  solutionSlugs: string[];
  benefits: string[];
  headline: string;
  headlineMuted: string;
  backgroundSrc?: string;
  pageTitle: string;
  pageSubtitle: string;
  challengesEyebrow: string;
  challengesTitle: string;
  challengesLead: string;
  solutionsEyebrow: string;
  solutionsTitle: string;
  solutionsLead: string;
  benefitsEyebrow: string;
  benefitsTitle: string;
  benefitsLead: string;
  relatedTitle: string;
  statusItems: SegmentStatusItem[];
};

export const segments: Segment[] = [
  {
    slug: "condominios",
    title: "Condomínios",
    shortDescription:
      "Portaria, acessos e monitoramento pensados para o ritmo de moradores, visitantes e prestadores.",
    description:
      "Unifique portaria virtual, controle de acesso, CFTV e gestão de visitantes em uma operação clara para o síndico, a administradora e os moradores.",
    icon: "Building2",
    headline: "Mais controle no condomínio.",
    headlineMuted: "Menos atrito no dia a dia.",
    backgroundSrc: "/background-condominios.jpg",
    pageTitle: "Segurança completa para condomínios",
    pageSubtitle:
      "Do hall à garagem, cada entrada registrada. Ideal para condomínios residenciais e comerciais em São José dos Campos, Vale do Paraíba e Grande São Paulo.",
    challengesEyebrow: "Rotina do condomínio",
    challengesTitle: "Onde a operação costuma falhar",
    challengesLead:
      "Fluxo intenso, portaria cara e pouco histórico. Esses pontos geram risco e desgaste para quem administra.",
    solutionsEyebrow: "Pacote condomínio",
    solutionsTitle: "O que o condomínio precisa no dia a dia",
    solutionsLead:
      "Um conjunto pensado para liberar quem deve entrar, acompanhar visitantes e manter a portaria sob controle 24h.",
    benefitsEyebrow: "Para síndico e morador",
    benefitsTitle: "O que muda na prática",
    benefitsLead:
      "Mais previsibilidade na operação, menos custo fixo e mais tranquilidade para quem mora e para quem gerencia.",
    relatedTitle: "Soluções para o seu condomínio",
    statusItems: [
      { label: "FOCUS", value: "ACCESS" },
      { label: "FLOW", value: "24H" },
      { label: "BASE", value: "SJC" },
      { label: "MODE", value: "LIVE" },
    ],
    challenges: [
      "Visitantes e prestadores sem pré-cadastro geram fila e falha de registro",
      "Portaria física com custo alto e padrão desigual entre turnos",
      "Moradores pedem agilidade, mas a administração precisa de rastreio",
      "Eventos em áreas comuns sem histórico confiável para auditoria",
    ],
    solutions: [
      "Portaria virtual com atendimento remoto",
      "Controle de acesso facial, tag e QR Code",
      "Gestão de visitantes com convite digital",
      "CFTV nas áreas comuns e garagens",
      "Monitoramento 24h integrado à operação",
    ],
    solutionSlugs: [
      "portaria-virtual",
      "controle-de-acesso",
      "monitoramento",
      "gestao-de-visitantes",
      "cftv-inteligente",
    ],
    benefits: [
      "Portaria mais enxuta sem perder controle",
      "Histórico claro para assembleia e administradora",
      "Menos atrito na entrada de moradores e visitantes",
      "Visão unificada de acessos, câmeras e ocorrências",
    ],
  },
  {
    slug: "empresas",
    title: "Empresas",
    shortDescription:
      "Acessos, visitantes e perímetro sob regras corporativas, com auditoria pronta para compliance.",
    description:
      "Controle quem entra em cada área, acompanhe visitantes e prestadores e mantenha CFTV e alertas alinhados à política de segurança da empresa.",
    icon: "Briefcase",
    headline: "Acesso certo. Área certa.",
    headlineMuted: "Sem abrir mão da produtividade.",
    backgroundSrc: "/background-empresas.jpg",
    pageTitle: "Segurança corporativa sob medida",
    pageSubtitle:
      "Permissões por perfil, áreas restritas e auditoria contínua para escritórios e sedes em São José dos Campos e Grande São Paulo.",
    challengesEyebrow: "Ambiente corporativo",
    challengesTitle: "Riscos que afetam a operação",
    challengesLead:
      "Áreas sensíveis, visitantes frequentes e auditoria fraca. No corporativo, falha de acesso vira risco de negócio.",
    solutionsEyebrow: "Stack corporativa",
    solutionsTitle: "Controle alinhado à sua política",
    solutionsLead:
      "Do crachá ao facial, do lobby ao data room: regras claras e registro completo para TI, facilities e compliance.",
    benefitsEyebrow: "Para facilities e RH",
    benefitsTitle: "Ganhos na operação corporativa",
    benefitsLead:
      "Menos acesso indevido, mais rastreabilidade e uma base sólida para auditorias internas e externas.",
    relatedTitle: "Soluções para a sua empresa",
    statusItems: [
      { label: "POLICY", value: "ACTIVE" },
      { label: "ZONES", value: "RULED" },
      { label: "AUDIT", value: "ON" },
      { label: "BASE", value: "SJC" },
    ],
    challenges: [
      "Colaboradores e terceiros com permissões genéricas demais",
      "Recepção sem fluxo estruturado de visitantes e fornecedores",
      "Salas críticas e estoques sem barreira de acesso confiável",
      "Dificuldade em provar quem acessou o quê, e quando",
    ],
    solutions: [
      "Controle de acesso por perfil, área e horário",
      "Gestão de visitantes com pré-cadastro",
      "CFTV em lobbies, garagens e áreas críticas",
      "Monitoramento de perímetro e alertas",
      "Integração com sistemas e painéis internos",
    ],
    solutionSlugs: [
      "controle-de-acesso",
      "gestao-de-visitantes",
      "cftv-inteligente",
      "monitoramento",
      "integracao-de-seguranca",
    ],
    benefits: [
      "Permissões granulares por cargo e setor",
      "Auditoria pronta para compliance e SGSI",
      "Recepção mais rápida e rastreável",
      "Escalabilidade para novas unidades e andares",
    ],
  },
  {
    slug: "industrias",
    title: "Indústrias",
    shortDescription:
      "Perímetro, turnos e pátios sob vigilância contínua, com resposta pronta a incidentes.",
    description:
      "Proteja planta, pátios e acessos veiculares com monitoramento 24h, CFTV industrial, sensores e controle rigoroso de colaboradores e terceiros.",
    icon: "Factory",
    headline: "Planta sob vigilância.",
    headlineMuted: "Perímetro sob protocolo.",
    backgroundSrc: "/background-industrias.jpg",
    pageTitle: "Segurança industrial de ponta a ponta",
    pageSubtitle:
      "Grandes áreas, múltiplos turnos e ativos críticos. Operação pensada para indústrias e centros logísticos no Vale do Paraíba e em São Paulo.",
    challengesEyebrow: "Chão de fábrica",
    challengesTitle: "Desafios da operação industrial",
    challengesLead:
      "Extensão, turnos e terceiros. Na indústria, o risco está no perímetro, no pátio e nas áreas de produção.",
    solutionsEyebrow: "Camada industrial",
    solutionsTitle: "Cobertura da cerca ao carregamento",
    solutionsLead:
      "Sensores, câmeras e acessos conectados à central, com prioridade para eventos que param a operação.",
    benefitsEyebrow: "Para planta e segurança",
    benefitsTitle: "Resultado na linha e no pátio",
    benefitsLead:
      "Menos invasão e desvio, mais evidência em ocorrências e resposta alinhada ao protocolo da planta.",
    relatedTitle: "Soluções para a sua indústria",
    statusItems: [
      { label: "SITE", value: "SECURE" },
      { label: "SHIFT", value: "24H" },
      { label: "YARD", value: "WATCH" },
      { label: "ALERT", value: "LIVE" },
    ],
    challenges: [
      "Perímetros longos com pontos cegos e acessos secundários",
      "Turnos e terceiros dificultam saber quem está na planta",
      "Pátios e docas com fluxo intenso de veículos e cargas",
      "Incidentes sem imagem e protocolo sincronizados",
    ],
    solutions: [
      "Monitoramento de perímetro 24h",
      "Controle de acesso pedestre e veicular",
      "CFTV industrial com detecção de eventos",
      "Alarmes e sensores em áreas críticas",
      "Integração com a central Phoenix",
    ],
    solutionSlugs: [
      "monitoramento",
      "controle-de-acesso",
      "cftv-inteligente",
      "alarmes-e-sensores",
      "integracao-de-seguranca",
    ],
    benefits: [
      "Visibilidade contínua da cerca e dos pátios",
      "Controle rigoroso de colaboradores e prestadores",
      "Resposta rápida com imagem e contexto",
      "Registro alinhado a normas e auditorias de planta",
    ],
  },
  {
    slug: "loteamentos",
    title: "Loteamentos",
    shortDescription:
      "Portaria, veículos e perímetro em escala horizontal, com gestão centralizada do condomínio.",
    description:
      "Loteamentos e condomínios horizontais pedem visão de área ampla: portaria virtual, controle veicular, CFTV de perímetro e regras claras para moradores e visitantes.",
    icon: "MapPin",
    headline: "Entrada sob regras.",
    headlineMuted: "Perímetro sob olhar contínuo.",
    backgroundSrc: "/background-loteamentos.jpg",
    pageTitle: "Segurança para loteamentos fechados",
    pageSubtitle:
      "Extensão territorial, fluxo de veículos e perímetro aberto. Solução pensada para condomínios horizontais e loteamentos no Vale e Litoral.",
    challengesEyebrow: "Escala horizontal",
    challengesTitle: "O que complica no loteamento",
    challengesLead:
      "Área grande, muitos veículos e poucos pontos de controle. Sem integração, a segurança fica fragmentada.",
    solutionsEyebrow: "Pacote loteamento",
    solutionsTitle: "Da guarita ao perímetro",
    solutionsLead:
      "Portaria, cancelas, câmeras e sensores trabalhando juntos, com painel único para a administração.",
    benefitsEyebrow: "Para associação e morador",
    benefitsTitle: "Valor e segurança no empreendimento",
    benefitsLead:
      "Mais controle nas entradas, perímetro mais vigiado e percepção de valorização do loteamento.",
    relatedTitle: "Soluções para o seu loteamento",
    statusItems: [
      { label: "GATE", value: "ACTIVE" },
      { label: "FLEET", value: "TRACK" },
      { label: "EDGE", value: "WATCH" },
      { label: "AREA", value: "WIDE" },
    ],
    challenges: [
      "Várias entradas e vias internas sem visão unificada",
      "Controle veicular frágil em horários de pico",
      "Perímetro extenso difícil de vigiar só com ronda",
      "Moradores e visitantes sem fluxo digital padronizado",
    ],
    solutions: [
      "Portaria virtual na guarita principal",
      "Controle veicular com liberação registrada",
      "CFTV de perímetro e vias internas",
      "Sensores e alarmes em pontos críticos",
      "Gestão de visitantes para moradores",
    ],
    solutionSlugs: [
      "portaria-virtual",
      "controle-de-acesso",
      "cftv-inteligente",
      "alarmes-e-sensores",
      "gestao-de-visitantes",
    ],
    benefits: [
      "Entradas e saídas com registro confiável",
      "Perímetro monitorado com menos ponto cego",
      "Operação mais leve para a associação",
      "Empreendimento mais seguro e valorizado",
    ],
  },
  {
    slug: "residencias",
    title: "Residências",
    shortDescription:
      "CFTV, alarmes e monitoramento discreto para residências que pedem proteção sem abrir mão do conforto.",
    description:
      "Proteja a família e o patrimônio com câmeras, sensores, controle de acesso e monitoramento remoto, em uma solução elegante e fácil de acompanhar pelo app.",
    icon: "Home",
    headline: "Sua casa sob cuidado.",
    headlineMuted: "Você acompanha de onde estiver.",
    backgroundSrc: "/background-residencias.jpg",
    pageTitle: "Segurança residencial de alto padrão",
    pageSubtitle:
      "Discrição, resposta rápida e visão remota. Para residências em São José dos Campos, Vale do Paraíba e Grande São Paulo.",
    challengesEyebrow: "Casa e família",
    challengesTitle: "Preocupações do dia a dia",
    challengesLead:
      "Ausências longas, área externa exposta e necessidade de discrição. A residência pede proteção sem parecer bunker.",
    solutionsEyebrow: "Kit residencial",
    solutionsTitle: "Proteção sob medida para a casa",
    solutionsLead:
      "Câmeras, alarmes e acessos integrados ao monitoramento, com app simples para a família.",
    benefitsEyebrow: "Para quem mora",
    benefitsTitle: "Tranquilidade com elegância",
    benefitsLead:
      "Você vê o que acontece, recebe alerta na hora certa e mantém a estética da casa intacta.",
    relatedTitle: "Soluções para a sua residência",
    statusItems: [
      { label: "HOME", value: "GUARD" },
      { label: "CAMS", value: "HD" },
      { label: "ALERT", value: "APP" },
      { label: "STYLE", value: "DISCREET" },
    ],
    challenges: [
      "Casa vazia por viagens ou rotina de trabalho",
      "Jardins, garagens e muros sem cobertura visual",
      "Alarmes isolados que geram falso positivo",
      "Soluções invasivas que quebram o design da casa",
    ],
    solutions: [
      "CFTV residencial com visualização remota",
      "Alarmes e sensores calibrados ao imóvel",
      "Controle de acesso discreto na entrada",
      "Monitoramento remoto 24h",
      "App para acompanhar eventos e câmeras",
    ],
    solutionSlugs: [
      "cftv-inteligente",
      "alarmes-e-sensores",
      "controle-de-acesso",
      "monitoramento",
      "integracao-de-seguranca",
    ],
    benefits: [
      "Tranquilidade mesmo longe de casa",
      "Alertas com contexto, não só sirene",
      "Instalação discreta e alinhada ao projeto",
      "Resposta rápida quando algo sai do padrão",
    ],
  },
];

export function getSegmentBySlug(slug: string): Segment | undefined {
  return segments.find((s) => s.slug === slug);
}
