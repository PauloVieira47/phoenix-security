export type Solution = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  problem: string;
  howItWorks: string[];
  benefits: string[];
  features: string[];
  useCases: string[];
  faq: { question: string; answer: string }[];
};

export const solutions: Solution[] = [
  {
    slug: "portaria-virtual",
    title: "Portaria Virtual",
    shortDescription:
      "Atendimento remoto inteligente com controle de acesso integrado e monitoramento em tempo real.",
    description:
      "A portaria virtual da Phoenix combina atendimento remoto, identificação de visitantes, liberação de acessos e registro completo de eventos. Uma operação mais eficiente, segura e escalável para condomínios e empreendimentos.",
    icon: "Shield",
    problem:
      "Portarias físicas enfrentam custos elevados, rotatividade de equipe e dificuldade em manter padrão de atendimento 24 horas, gerando brechas de segurança e falta de rastreabilidade.",
    howItWorks: [
      "Visitante ou veículo chega ao acesso do empreendimento",
      "Sistema identifica e registra a solicitação de entrada",
      "Operador remoto valida com morador ou regras pré-definidas",
      "Acesso é liberado com registro automático no sistema",
      "Evento fica disponível para consulta e auditoria",
    ],
    benefits: [
      "Redução de custos operacionais",
      "Atendimento padronizado 24 horas",
      "Registro completo de acessos",
      "Maior controle sobre visitantes e prestadores",
      "Integração com câmeras e controle de acesso",
    ],
    features: [
      "Atendimento remoto em tempo real",
      "Liberação de pedestres e veículos",
      "Integração com interfones e câmeras",
      "Registro de eventos e histórico",
      "Painel de gestão para síndicos",
      "Alertas e notificações automáticas",
    ],
    useCases: [
      "Condomínios residenciais",
      "Condomínios comerciais",
      "Loteamentos fechados",
      "Empresas com múltiplos acessos",
    ],
    faq: [
      {
        question: "A portaria virtual substitui totalmente a portaria física?",
        answer:
          "Depende da operação. Em muitos casos, a portaria virtual complementa ou substitui a estrutura física, mantendo o mesmo nível — ou maior — de controle e rastreabilidade.",
      },
      {
        question: "Como funciona a liberação para visitantes?",
        answer:
          "O visitante é identificado no acesso, o operador remoto valida com o morador ou regras pré-configuradas e o acesso é liberado com registro automático.",
      },
    ],
  },
  {
    slug: "controle-de-acesso",
    title: "Controle de Acesso",
    shortDescription:
      "Gestão inteligente de entradas com múltiplas tecnologias de identificação e permissões granulares.",
    description:
      "Controle quem entra, quando e como. Nossa solução integra reconhecimento facial, biometria, tags, QR Code e controle veicular em uma plataforma unificada.",
    icon: "KeyRound",
    problem:
      "Sistemas fragmentados dificultam o controle de permissões, geram falhas de identificação e impossibilitam auditoria completa dos acessos.",
    howItWorks: [
      "Cadastro de moradores, visitantes e prestadores",
      "Definição de permissões por área, horário e perfil",
      "Identificação no ponto de acesso",
      "Validação automática ou manual conforme regras",
      "Registro e histórico disponíveis em tempo real",
    ],
    benefits: [
      "Controle granular de permissões",
      "Múltiplas formas de identificação",
      "Histórico completo de acessos",
      "Redução de acessos não autorizados",
      "Integração com portaria virtual e CFTV",
    ],
    features: [
      "Reconhecimento facial",
      "Biometria digital",
      "Tags e cartões de proximidade",
      "QR Code dinâmico",
      "Controle veicular",
      "Gestão de visitantes",
      "Permissões por horário e área",
      "Relatórios e auditoria",
    ],
    useCases: [
      "Portarias de condomínios",
      "Áreas restritas corporativas",
      "Estacionamentos",
      "Academias e áreas comuns",
    ],
    faq: [
      {
        question: "Quais tecnologias de identificação são suportadas?",
        answer:
          "Suportamos reconhecimento facial, biometria, tags RFID, QR Code e integração com sistemas veiculares, podendo combinar múltiplas tecnologias no mesmo empreendimento.",
      },
    ],
  },
  {
    slug: "monitoramento",
    title: "Monitoramento 24h",
    shortDescription:
      "Central de monitoramento com resposta operacional, alertas inteligentes e acompanhamento contínuo.",
    description:
      "Monitoramento profissional 24 horas com equipe especializada, análise de eventos em tempo real e resposta rápida a incidentes.",
    icon: "Eye",
    problem:
      "Câmeras sem monitoramento ativo apenas registram eventos sem permitir resposta imediata, reduzindo a efetividade da segurança.",
    howItWorks: [
      "Câmeras e sensores enviam eventos para a central",
      "Operadores analisam alertas em tempo real",
      "Incidentes são classificados por prioridade",
      "Ações de resposta são acionadas conforme protocolo",
      "Tudo é registrado para histórico e auditoria",
    ],
    benefits: [
      "Resposta rápida a incidentes",
      "Equipe especializada 24 horas",
      "Redução de falsos alarmes",
      "Protocolos personalizados",
      "Histórico completo de eventos",
    ],
    features: [
      "Central de monitoramento 24h",
      "Análise de eventos em tempo real",
      "Alertas inteligentes",
      "Protocolos de resposta",
      "Registro de incidentes",
      "Relatórios operacionais",
    ],
    useCases: [
      "Condomínios",
      "Indústrias",
      "Comércios",
      "Residências de alto padrão",
    ],
    faq: [
      {
        question: "O monitoramento funciona com câmeras de qualquer marca?",
        answer:
          "Trabalhamos com integração a diversas marcas e modelos. Avaliamos a infraestrutura existente para definir a melhor abordagem.",
      },
    ],
  },
  {
    slug: "cftv-inteligente",
    title: "CFTV Inteligente",
    shortDescription:
      "Circuito fechado de TV com análise inteligente, gravação em nuvem e visualização remota.",
    description:
      "Sistema de CFTV com câmeras de alta definição, gravação segura, visualização remota e recursos de inteligência para detecção de eventos.",
    icon: "Camera",
    problem:
      "Sistemas de CFTV legados oferecem imagens de baixa qualidade, sem integração e com dificuldade de acesso remoto e análise de eventos.",
    howItWorks: [
      "Instalação de câmeras estrategicamente posicionadas",
      "Gravação contínua com retenção configurável",
      "Acesso remoto via aplicativo ou painel web",
      "Detecção inteligente de movimento e eventos",
      "Integração com monitoramento e controle de acesso",
    ],
    benefits: [
      "Imagens de alta definição",
      "Acesso remoto de qualquer lugar",
      "Gravação segura e redundante",
      "Detecção inteligente de eventos",
      "Integração com ecossistema Phoenix",
    ],
    features: [
      "Câmeras IP de alta definição",
      "Gravação local e em nuvem",
      "Visualização remota",
      "Detecção de movimento inteligente",
      "Linha do tempo de eventos",
      "Integração com central de monitoramento",
    ],
    useCases: [
      "Áreas comuns de condomínios",
      "Estacionamentos",
      "Perímetros industriais",
      "Escritórios corporativos",
    ],
    faq: [
      {
        question: "Por quanto tempo as gravações ficam armazenadas?",
        answer:
          "O período de retenção é configurável conforme a necessidade do empreendimento e requisitos legais aplicáveis.",
      },
    ],
  },
  {
    slug: "reconhecimento-facial",
    title: "Reconhecimento Facial",
    shortDescription:
      "Identificação biométrica avançada para acesso rápido, seguro e sem contato.",
    description:
      "Tecnologia de reconhecimento facial para identificação precisa de moradores, colaboradores e visitantes autorizados, com registro automático de eventos.",
    icon: "ScanFace",
    problem:
      "Métodos tradicionais de identificação são lentos, sujeitos a fraudes e não oferecem a agilidade necessária em acessos de alto fluxo.",
    howItWorks: [
      "Cadastro facial do usuário autorizado",
      "Câmera identifica o rosto no ponto de acesso",
      "Sistema valida permissões em milissegundos",
      "Acesso liberado ou negado com registro",
      "Evento disponível para consulta imediata",
    ],
    benefits: [
      "Acesso sem contato e ágil",
      "Alta precisão de identificação",
      "Redução de fraudes",
      "Experiência moderna para moradores",
      "Integração com controle de acesso",
    ],
    features: [
      "Identificação em tempo real",
      "Anti-spoofing",
      "Cadastro simplificado",
      "Múltiplos pontos de acesso",
      "Relatórios de acesso",
      "Integração com portaria virtual",
    ],
    useCases: [
      "Portarias de condomínios",
      "Academias e clubes",
      "Escritórios corporativos",
      "Áreas de alto fluxo",
    ],
    faq: [
      {
        question: "O reconhecimento facial funciona com máscara ou óculos?",
        answer:
          "Nossos sistemas são calibrados para diferentes condições. Avaliamos o ambiente para garantir a melhor taxa de acerto possível.",
      },
    ],
  },
  {
    slug: "gestao-de-visitantes",
    title: "Gestão de Visitantes",
    shortDescription:
      "Controle completo do ciclo de vida de visitantes, desde o convite até a saída.",
    description:
      "Plataforma para gestão de visitantes com convites digitais, pré-cadastro, identificação na entrada e registro automático de permanência.",
    icon: "Users",
    problem:
      "Sem um sistema estruturado, visitantes entram sem registro adequado, dificultando auditoria e comprometendo a segurança do empreendimento.",
    howItWorks: [
      "Morador ou empresa gera convite digital",
      "Visitante realiza pré-cadastro com dados e documento",
      "Na chegada, identificação automática ou manual",
      "Permanência monitorada com registro de entrada e saída",
      "Histórico disponível para consulta",
    ],
    benefits: [
      "Rastreabilidade completa",
      "Convites digitais práticos",
      "Pré-cadastro antecipado",
      "Redução de filas na portaria",
      "Integração com controle de acesso",
    ],
    features: [
      "Convites por link ou QR Code",
      "Pré-cadastro de visitantes",
      "Notificações ao morador",
      "Registro de entrada e saída",
      "Lista de visitantes esperados",
      "Relatórios e histórico",
    ],
    useCases: [
      "Condomínios residenciais",
      "Escritórios corporativos",
      "Eventos em áreas comuns",
      "Recepção de clientes",
    ],
    faq: [
      {
        question: "O morador pode autorizar visitantes pelo aplicativo?",
        answer:
          "Sim. Moradores podem gerar convites, autorizar entradas e acompanhar o histórico de visitantes diretamente pelo aplicativo.",
      },
    ],
  },
  {
    slug: "alarmes-e-sensores",
    title: "Alarmes e Sensores",
    shortDescription:
      "Detecção inteligente de intrusão, movimento e eventos críticos com alertas em tempo real.",
    description:
      "Sistema de alarmes e sensores integrado à central de monitoramento para detecção precoce de incidentes e resposta imediata.",
    icon: "Bell",
    problem:
      "Sensores isolados sem integração geram alarmes sem contexto, aumentando falsos positivos e atrasando a resposta a incidentes reais.",
    howItWorks: [
      "Sensores instalados em pontos estratégicos",
      "Detecção de movimento, abertura ou intrusão",
      "Alerta enviado à central de monitoramento",
      "Operador valida e aciona protocolo de resposta",
      "Evento registrado com data, hora e local",
    ],
    benefits: [
      "Detecção precoce de incidentes",
      "Integração com monitoramento 24h",
      "Redução de falsos alarmes",
      "Cobertura de áreas críticas",
      "Alertas em tempo real",
    ],
    features: [
      "Sensores de movimento",
      "Sensores de abertura",
      "Detectores de intrusão",
      "Integração com CFTV",
      "Alertas configuráveis",
      "Protocolos de resposta",
    ],
    useCases: [
      "Perímetros de condomínios",
      "Áreas industriais",
      "Residências",
      "Depósitos e almoxarifados",
    ],
    faq: [
      {
        question: "Os alarmes são monitorados 24 horas?",
        answer:
          "Sim, quando integrados à nossa central de monitoramento, todos os eventos são analisados por operadores especializados.",
      },
    ],
  },
  {
    slug: "integracao-de-seguranca",
    title: "Integração de Segurança",
    shortDescription:
      "Unificação de todos os sistemas de segurança em uma plataforma centralizada e inteligente.",
    description:
      "Integre câmeras, portões, leitores, interfones, sensores e aplicativos em um ecossistema único, gerenciado pela Phoenix Security.",
    icon: "Network",
    problem:
      "Sistemas de segurança fragmentados dificultam a gestão, aumentam custos e impedem visão unificada da operação.",
    howItWorks: [
      "Mapeamento da infraestrutura existente",
      "Integração de dispositivos e plataformas",
      "Centralização em painel único de gestão",
      "Automação de fluxos entre sistemas",
      "Monitoramento contínuo da operação integrada",
    ],
    benefits: [
      "Visão unificada da segurança",
      "Redução de sistemas isolados",
      "Automação de processos",
      "Menor custo operacional",
      "Escalabilidade para novos dispositivos",
    ],
    features: [
      "Painel centralizado",
      "APIs e integrações",
      "Automação de fluxos",
      "Compatibilidade multi-marca",
      "Relatórios consolidados",
      "Suporte técnico especializado",
    ],
    useCases: [
      "Condomínios com múltiplos sistemas",
      "Empresas em expansão",
      "Empreendimentos novos",
      "Modernização de infraestrutura legada",
    ],
    faq: [
      {
        question: "É possível integrar sistemas já existentes?",
        answer:
          "Sim. Avaliamos a infraestrutura atual e definimos a melhor estratégia de integração, preservando investimentos já realizados quando viável.",
      },
    ],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
