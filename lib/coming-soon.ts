/**
 * Produção (Vercel): só a página "Em breve".
 * Local (`yarn dev`): site completo.
 * Preview da landing: /em-breve
 */
export function isComingSoonMode() {
  return process.env.VERCEL === "1";
}
