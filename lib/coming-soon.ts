/**
 * Modo "Em breve" na Vercel.
 * Site publicado — desativado. Preview local continua em /em-breve.
 *
 * Para reativar temporariamente: defina COMING_SOON=true nas variáveis da Vercel
 * e altere SITE_PUBLISHED para false abaixo.
 */
const SITE_PUBLISHED = true;

export function isComingSoonMode() {
  if (SITE_PUBLISHED) return false;

  return (
    process.env.VERCEL === "1" && process.env.COMING_SOON === "true"
  );
}
