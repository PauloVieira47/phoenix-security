export type Segment = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  challenges: string[];
  solutions: string[];
  benefits: string[];
};

export const segments: Segment[] = [
  {
    slug: "condominios",
    title: "Condomínios",
    shortDescription:
      "Segurança integrada para condomínios residenciais e comerciais de todos os portes.",
    description:
      "Soluções completas para condomínios que precisam de controle de acesso, portaria virtual, monitoramento e gestão de visitantes em uma operação unificada e eficiente.",
    icon: "Building2",
    challenges: [
      "Alto fluxo de visitantes e prestadores",
      "Custos elevados de portaria física",
      "Dificuldade em manter padrão de segurança 24h",
      "Falta de rastreabilidade de acessos",
    ],
    solutions: [
      "Portaria virtual inteligente",
      "Controle de acesso integrado",
      "Monitoramento 24 horas",
      "Gestão de visitantes",
      "CFTV inteligente",
    ],
    benefits: [
      "Mais segurança para moradores",
      "Redução de custos operacionais",
      "Transparência para síndicos e administradoras",
      "Histórico completo de eventos",
    ],
  },
  {
    slug: "empresas",
    title: "Empresas",
    shortDescription:
      "Controle de acesso e monitoramento para ambientes corporativos e escritórios.",
    description:
      "Proteja colaboradores, ativos e informações com soluções de controle de acesso, CFTV e monitoramento adaptadas à realidade corporativa.",
    icon: "Briefcase",
    challenges: [
      "Controle de acesso a áreas restritas",
      "Gestão de visitantes e prestadores",
      "Proteção de ativos e informações",
      "Conformidade com políticas internas",
    ],
    solutions: [
      "Controle de acesso corporativo",
      "Gestão de visitantes",
      "CFTV inteligente",
      "Monitoramento de perímetro",
      "Integração de segurança",
    ],
    benefits: [
      "Ambiente corporativo mais seguro",
      "Controle granular de permissões",
      "Auditoria completa de acessos",
      "Escalabilidade conforme crescimento",
    ],
  },
  {
    slug: "industrias",
    title: "Indústrias",
    shortDescription:
      "Segurança robusta para ambientes industriais com monitoramento de perímetro e controle de acesso.",
    description:
      "Soluções de segurança para indústrias com foco em proteção de perímetro, controle de acesso de colaboradores e monitoramento contínuo de áreas críticas.",
    icon: "Factory",
    challenges: [
      "Grandes áreas e múltiplos acessos",
      "Controle de colaboradores e terceiros",
      "Proteção de equipamentos e matéria-prima",
      "Operação 24 horas em turnos",
    ],
    solutions: [
      "Monitoramento de perímetro",
      "Controle de acesso veicular e pedestre",
      "CFTV industrial",
      "Alarmes e sensores",
      "Central de monitoramento 24h",
    ],
    benefits: [
      "Proteção de ativos industriais",
      "Controle rigoroso de acessos",
      "Resposta rápida a incidentes",
      "Conformidade com normas de segurança",
    ],
  },
  {
    slug: "loteamentos",
    title: "Loteamentos",
    shortDescription:
      "Segurança perimetral e controle de acesso para loteamentos e condomínios horizontais.",
    description:
      "Proteja loteamentos fechados com portaria virtual, controle de acesso veicular, monitoramento de perímetro e gestão centralizada de toda a operação.",
    icon: "MapPin",
    challenges: [
      "Extensão territorial ampla",
      "Controle de acesso veicular",
      "Monitoramento de perímetro",
      "Gestão de moradores e visitantes",
    ],
    solutions: [
      "Portaria virtual",
      "Controle veicular",
      "CFTV de perímetro",
      "Sensores e alarmes",
      "Aplicativo para moradores",
    ],
    benefits: [
      "Segurança em toda a extensão",
      "Controle eficiente de veículos",
      "Monitoramento proativo",
      "Valorização do empreendimento",
    ],
  },
  {
    slug: "residencias",
    title: "Residências",
    shortDescription:
      "Soluções de segurança personalizadas para residências de alto padrão.",
    description:
      "Proteção inteligente para residências com CFTV, alarmes, controle de acesso e monitoramento remoto, adaptados às necessidades de cada propriedade.",
    icon: "Home",
    challenges: [
      "Proteção de família e patrimônio",
      "Monitoramento durante ausências",
      "Integração com automação residencial",
      "Discrição e sofisticação",
    ],
    solutions: [
      "CFTV residencial",
      "Alarmes e sensores",
      "Controle de acesso",
      "Monitoramento remoto 24h",
      "Aplicativo de gestão",
    ],
    benefits: [
      "Tranquilidade para a família",
      "Monitoramento de qualquer lugar",
      "Resposta rápida a incidentes",
      "Solução discreta e elegante",
    ],
  },
];

export function getSegmentBySlug(slug: string): Segment | undefined {
  return segments.find((s) => s.slug === slug);
}
