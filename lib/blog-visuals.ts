export const blogVisualIds = [
  "portaria-virtual",
  "controle-acesso",
  "reconhecimento-facial",
  "monitoramento",
  "condominios",
  "cftv",
  "integracao",
  "visitantes",
  "plataforma",
] as const;

export type BlogVisualId = (typeof blogVisualIds)[number];

export function isBlogVisualId(value: string): value is BlogVisualId {
  return (blogVisualIds as readonly string[]).includes(value);
}
