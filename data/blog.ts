export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  coverImage: string;
  coverAlt: string;
};

export const blogCategories = [
  "Todos",
  "Segurança",
  "Condomínios",
  "Tecnologia",
  "Portaria Virtual",
  "Controle de Acesso",
  "Monitoramento",
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "portaria-virtual-condominios",
    title: "Como a portaria virtual transforma a segurança de condomínios",
    excerpt:
      "Entenda como a portaria virtual reduz custos, aumenta o controle e melhora a experiência de moradores e visitantes.",
    content: `
A portaria virtual representa uma evolução significativa na forma como condomínios gerenciam o controle de acesso e a segurança de seus moradores.

## O que muda na prática

Com atendimento remoto integrado a câmeras, interfones e sistemas de controle de acesso, a operação ganha padronização, rastreabilidade e disponibilidade 24 horas.

[media:visual:portaria-virtual|Fluxo da portaria remota: interfone → operador → liberação de acesso com registro.]

## Benefícios para síndicos e administradoras

- Redução de custos operacionais
- Registro completo de todos os acessos
- Maior transparência na gestão
- Escalabilidade conforme o empreendimento cresce

## O papel da tecnologia

A combinação de operadores especializados com plataformas inteligentes permite uma operação mais eficiente do que modelos tradicionais, sem comprometer a segurança.
    `.trim(),
    category: "Portaria Virtual",
    author: "Equipe Phoenix",
    date: "2026-03-15",
    readTime: "5 min",
    coverImage: "/background-controle-acesso.jpg",
    coverAlt: "Portaria virtual e controle de acesso em condomínio",
  },
  {
    slug: "controle-acesso-inteligente",
    title: "Controle de acesso inteligente: além do cartão magnético",
    excerpt:
      "Reconhecimento facial, biometria e QR Code estão redefinindo como empreendimentos controlam quem entra e sai.",
    content: `
Os métodos tradicionais de controle de acesso estão sendo substituídos por tecnologias mais seguras, ágeis e inteligentes.

## Tecnologias em destaque

[media:visual:reconhecimento-facial|Biometria facial: identificação sem contato na entrada do empreendimento.]

- Reconhecimento facial sem contato
- Biometria digital de alta precisão
- QR Code dinâmico para visitantes
- Tags e controle veicular integrado

## Por que migrar

Sistemas fragmentados dificultam auditoria e aumentam vulnerabilidades. Uma plataforma unificada oferece visão completa da operação.
    `.trim(),
    category: "Controle de Acesso",
    author: "Equipe Phoenix",
    date: "2026-03-10",
    readTime: "4 min",
    coverImage: "/background-facial.jpg",
    coverAlt: "Controle de acesso com reconhecimento facial",
  },
  {
    slug: "monitoramento-24h-importancia",
    title: "Por que o monitoramento 24h faz diferença na segurança",
    excerpt:
      "Câmeras sem monitoramento ativo apenas registram. Saiba como a central de monitoramento transforma dados em resposta.",
    content: `
Ter câmeras instaladas é apenas o primeiro passo. O monitoramento ativo é o que transforma um sistema de CFTV em uma ferramenta efetiva de segurança.

## Monitoramento ativo vs. passivo

No modelo passivo, eventos são registrados mas ninguém responde em tempo real. No modelo ativo, operadores especializados analisam alertas e acionam protocolos de resposta.

[media:visual:monitoramento|Central 24h: operadores acompanham múltiplas telas e acionam protocolos de resposta.]

## Impacto na segurança

- Resposta imediata a incidentes
- Redução de falsos alarmes
- Protocolos personalizados por empreendimento
- Histórico para auditoria e melhoria contínua
    `.trim(),
    category: "Monitoramento",
    author: "Equipe Phoenix",
    date: "2026-03-05",
    readTime: "6 min",
    coverImage: "/background-monitoramento.jpg",
    coverAlt: "Central de monitoramento 24 horas",
  },
  {
    slug: "seguranca-condominios-2026",
    title: "Tendências de segurança para condomínios em 2026",
    excerpt:
      "As principais tendências que estão moldando a segurança de condomínios neste ano.",
    content: `
O mercado de segurança para condomínios evolui rapidamente, impulsionado por novas tecnologias e expectativas crescentes dos moradores.

## Tendências em destaque

1. **Portaria virtual como padrão**: cada vez mais condomínios adotam modelos remotos integrados.
2. **Inteligência artificial no CFTV**: detecção automática de eventos relevantes.
3. **Aplicativos para moradores**: gestão de visitantes e acessos na palma da mão.
4. **Integração de sistemas**: ecossistemas unificados substituem soluções isoladas.

## O que considerar

Ao avaliar soluções, priorize fornecedores que ofereçam integração, suporte especializado e histórico comprovado no segmento.

[media:visual:integracao|Ecossistema integrado: CFTV, alarmes, acesso e portaria conectados em uma plataforma.]
    `.trim(),
    category: "Condomínios",
    author: "Equipe Phoenix",
    date: "2026-02-28",
    readTime: "7 min",
    coverImage: "/background-condominios.jpg",
    coverAlt: "Segurança integrada para condomínios",
  },
  {
    slug: "tecnologia-seguranca-predial",
    title: "Tecnologia e segurança predial: o que muda com a digitalização",
    excerpt:
      "Como a digitalização está transformando a gestão de segurança em empreendimentos.",
    content: `
A digitalização da segurança predial não é mais uma tendência futura: é uma realidade presente em empreendimentos que buscam eficiência e controle.

## Pilares da transformação

- **Conectividade**: todos os dispositivos integrados em uma rede
- **Dados**: cada acesso e evento registrado e analisável
- **Automação**: fluxos que antes dependiam de intervenção manual
- **Experiência**: moradores e gestores com acesso a informações em tempo real

## Próximos passos

Empreendimentos que ainda operam com sistemas isolados têm muito a ganhar com uma avaliação da infraestrutura atual e um plano de integração gradual.

[media:visual:plataforma|Painel Phoenix: visão centralizada de eventos, acessos e alertas do empreendimento.]
    `.trim(),
    category: "Tecnologia",
    author: "Equipe Phoenix",
    date: "2026-02-20",
    readTime: "5 min",
    coverImage: "/background-integracao.jpg",
    coverAlt: "Integração tecnológica na segurança predial",
  },
  {
    slug: "gestao-visitantes-melhores-praticas",
    title: "Gestão de visitantes: melhores práticas para condomínios",
    excerpt:
      "Como estruturar o fluxo de visitantes para mais segurança e menos atrito na portaria.",
    content: `
A gestão de visitantes é um dos pontos mais críticos, e mais negligenciados, na segurança de condomínios.

## Boas práticas

- Pré-cadastro de visitantes com antecedência
- Convites digitais com validade definida
- Registro automático de entrada e saída
- Notificação imediata ao morador
- Histórico consultável para auditoria

[media:visual:visitantes|Convite digital: visitante apresenta QR Code e o acesso é registrado automaticamente.]

## Tecnologia como aliada

Sistemas de gestão de visitantes integrados ao controle de acesso eliminam filas, reduzem erros humanos e oferecem rastreabilidade completa.
    `.trim(),
    category: "Segurança",
    author: "Equipe Phoenix",
    date: "2026-02-15",
    readTime: "4 min",
    coverImage: "/background-gestao-visitantes.jpg",
    coverAlt: "Gestão de visitantes em condomínios",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
