/**
 * Com `COMING_SOON=1`, a Vercel mostra só a landing "Em breve".
 * Sem a variável (padrão), o site completo fica no ar.
 * Preview local da landing: /em-breve
 */
export function isComingSoonMode() {
  return process.env.COMING_SOON === "1";
}
