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
          "Depende da operação. Em muitos casos, a portaria virtual complementa ou substitui a estrutura física, mantendo o mesmo nível ou maior de controle e rastreabilidade.",
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
      "Gestão inteligente de entradas com múltiplas tecnologias e permissões claras.",
    description:
      "Controle quem entra, quando e por onde. Facial, biometria, tags, QR Code e acesso veicular em uma plataforma unificada, com histórico completo.",
    icon: "KeyRound",
    problem:
      "Sistemas fragmentados atrapalham permissões, geram falhas de identificação e dificultam a auditoria completa dos acessos.",
    howItWorks: [
      "Cadastro de moradores, visitantes e prestadores",
      "Definição de permissões por área, horário e perfil",
      "Identificação no ponto de acesso",
      "Validação automática conforme as regras",
      "Registro e histórico disponíveis em tempo real",
    ],
    benefits: [
      "Permissões granulares por pessoa e área",
      "Várias formas de identificação no mesmo sistema",
      "Histórico completo para consulta e auditoria",
      "Menos acessos não autorizados",
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
          "Facial, biometria, tags RFID, QR Code e integração veicular. Dá para combinar várias tecnologias no mesmo empreendimento.",
      },
      {
        question: "É possível definir horários e áreas diferentes?",
        answer:
          "Sim. As permissões podem ser configuradas por perfil, ponto de acesso e janela de horário, com registro de cada evento.",
      },
      {
        question: "O sistema integra com a portaria virtual?",
        answer:
          "Sim. O controle de acesso faz parte do ecossistema Phoenix e se conecta à portaria, monitoramento e histórico operacional.",
      },
    ],
  },
  {
    slug: "monitoramento",
    title: "Monitoramento 24h",
    shortDescription:
      "Central ativa com análise em tempo real, alertas inteligentes e resposta operacional.",
    description:
      "Vigilância profissional 24 horas com equipe especializada, leitura de eventos em tempo real e resposta rápida a incidentes.",
    icon: "Eye",
    problem:
      "Câmeras sem acompanhamento ativo apenas gravam. Sem resposta imediata, a segurança perde efetividade no momento crítico.",
    howItWorks: [
      "Câmeras e sensores enviam eventos para a central",
      "Operadores analisam alertas em tempo real",
      "Incidentes são classificados por prioridade",
      "Ações de resposta seguem protocolo definido",
      "Tudo fica registrado para histórico e auditoria",
    ],
    benefits: [
      "Resposta rápida a incidentes",
      "Equipe especializada disponível 24 horas",
      "Menos falsos alarmes no dia a dia",
      "Protocolos sob medida por empreendimento",
      "Histórico completo de eventos e ações",
    ],
    features: [
      "Central de monitoramento 24h",
      "Análise de eventos em tempo real",
      "Alertas inteligentes por prioridade",
      "Protocolos de resposta operacional",
      "Registro padronizado de incidentes",
      "Relatórios para gestão e auditoria",
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
          "Integramos diversas marcas e modelos. Na avaliação técnica analisamos a infraestrutura existente e definimos a melhor abordagem.",
      },
      {
        question: "A central opera de verdade 24 horas?",
        answer:
          "Sim. A operação é contínua, com profissionais preparados e protocolos ativos para prevenção e resposta.",
      },
      {
        question: "Dá para personalizar os protocolos do empreendimento?",
        answer:
          "Sim. Cada operação pode ter regras, prioridades e fluxos de resposta alinhados à realidade do local.",
      },
    ],
  },
  {
    slug: "cftv-inteligente",
    title: "CFTV Inteligente",
    shortDescription:
      "Circuito fechado com análise inteligente, gravação segura e visualização remota.",
    description:
      "Câmeras de alta definição, gravação confiável, acesso remoto e detecção inteligente de eventos para condomínios e empresas.",
    icon: "Camera",
    problem:
      "Sistemas de CFTV legados entregam imagem fraca, sem integração e com pouco acesso remoto ou análise de eventos.",
    howItWorks: [
      "Posicionamento estratégico das câmeras",
      "Gravação contínua com retenção configurável",
      "Acesso remoto via app ou painel web",
      "Detecção inteligente de movimento e eventos",
      "Integração com monitoramento e controle de acesso",
    ],
    benefits: [
      "Imagens de alta definição",
      "Acesso remoto de qualquer lugar",
      "Gravação segura e redundante",
      "Detecção inteligente de eventos",
      "Integração com o ecossistema Phoenix",
    ],
    features: [
      "Câmeras IP de alta definição",
      "Gravação local e em nuvem",
      "Visualização remota",
      "Detecção de movimento inteligente",
      "Linha do tempo de eventos",
      "Integração com a central de monitoramento",
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
          "O período de retenção é configurável conforme a necessidade do empreendimento e os requisitos legais aplicáveis.",
      },
    ],
  },
  {
    slug: "reconhecimento-facial",
    title: "Reconhecimento Facial",
    shortDescription:
      "Identificação biométrica avançada para acesso rápido, seguro e sem contato.",
    description:
      "Identificação facial precisa de moradores, colaboradores e visitantes autorizados, com validação em tempo real e registro automático de cada evento.",
    icon: "ScanFace",
    problem:
      "Métodos tradicionais de identificação são lentos, sujeitos a fraude e não acompanham acessos de alto fluxo com a agilidade necessária.",
    howItWorks: [
      "Cadastro facial do usuário autorizado",
      "Câmera identifica o rosto no ponto de acesso",
      "Sistema valida permissões em milissegundos",
      "Acesso liberado ou negado com registro",
      "Evento disponível para consulta imediata",
    ],
    benefits: [
      "Acesso sem contato e mais ágil",
      "Alta precisão de identificação",
      "Redução de fraudes e uso indevido",
      "Experiência moderna para moradores e equipes",
      "Integração com controle de acesso e portaria",
    ],
    features: [
      "Identificação em tempo real",
      "Proteção anti-spoofing",
      "Cadastro simplificado",
      "Múltiplos pontos de acesso",
      "Relatórios e histórico de eventos",
      "Integração com portaria virtual Phoenix",
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
          "Os sistemas são calibrados para diferentes condições do ambiente. Na avaliação técnica definimos o melhor posicionamento e configuração para manter alta taxa de acerto.",
      },
      {
        question: "Os dados faciais ficam seguros?",
        answer:
          "Sim. O tratamento segue boas práticas de segurança da informação e privacidade, com acesso controlado e uso exclusivo para a operação autorizada do empreendimento.",
      },
      {
        question: "Dá para integrar com a portaria virtual?",
        answer:
          "Sim. O reconhecimento facial faz parte do ecossistema Phoenix e se integra ao controle de acesso, portaria e histórico de eventos.",
      },
    ],
  },
  {
    slug: "gestao-de-visitantes",
    title: "Gestão de Visitantes",
    shortDescription:
      "Controle completo do ciclo de visitantes, do convite à saída.",
    description:
      "Convites digitais, pré-cadastro, identificação na entrada e registro automático de permanência para condomínios e empresas.",
    icon: "Users",
    problem:
      "Sem um fluxo estruturado, visitantes entram sem registro adequado, o que dificulta a auditoria e enfraquece a segurança do empreendimento.",
    howItWorks: [
      "Morador ou empresa gera o convite digital",
      "Visitante faz pré-cadastro com dados e documento",
      "Na chegada, identificação automática ou na portaria",
      "Permanência registrada com entrada e saída",
      "Histórico disponível para consulta e auditoria",
    ],
    benefits: [
      "Rastreabilidade completa",
      "Convites digitais práticos",
      "Pré-cadastro antecipado",
      "Menos fila na portaria",
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
          "Sim. Moradores podem gerar convites, autorizar entradas e acompanhar o histórico de visitantes pelo aplicativo.",
      },
    ],
  },
  {
    slug: "alarmes-e-sensores",
    title: "Alarmes e Sensores",
    shortDescription:
      "Detecção inteligente de movimento, abertura e intrusão com alertas em tempo real.",
    description:
      "Sensores conectados à central Phoenix para detecção precoce, menos falso alarme e resposta imediata quando o evento importa.",
    icon: "Bell",
    problem:
      "Sensores isolados geram alarmes sem contexto, aumentam falsos positivos e atrasam a resposta a incidentes reais.",
    howItWorks: [
      "Sensores instalados em pontos estratégicos",
      "Detecção de movimento, abertura ou intrusão",
      "Alerta enviado à central de monitoramento",
      "Operador valida e aciona o protocolo de resposta",
      "Evento registrado com data, hora e local",
    ],
    benefits: [
      "Detecção precoce de incidentes",
      "Integração com monitoramento 24h",
      "Menos falsos alarmes",
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
          "Sim. Quando integrados à central de monitoramento, os eventos são analisados por operadores especializados.",
      },
    ],
  },
  {
    slug: "integracao-de-seguranca",
    title: "Integração de Segurança",
    shortDescription:
      "Unifique câmeras, acessos, sensores e apps em um só ecossistema.",
    description:
      "Integre câmeras, portões, leitores, interfones, sensores e aplicativos em uma plataforma centralizada, gerenciada pela Phoenix Security.",
    icon: "Network",
    problem:
      "Sistemas fragmentados dificultam a gestão, elevam custos e impedem uma visão unificada da operação.",
    howItWorks: [
      "Mapeamento da infraestrutura existente",
      "Integração de dispositivos e plataformas",
      "Centralização em um painel único de gestão",
      "Automação de fluxos entre sistemas",
      "Monitoramento contínuo da operação integrada",
    ],
    benefits: [
      "Visão unificada da segurança",
      "Menos sistemas isolados",
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
          "Sim. Avaliamos a infraestrutura atual e definimos a melhor estratégia de integração, preservando o investimento já feito quando for viável.",
      },
    ],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
