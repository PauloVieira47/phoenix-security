/** Ativo apenas na Vercel (produção). Local sempre mostra o site completo. */
export function isComingSoonMode() {
  return (
    process.env.VERCEL === "1" && process.env.COMING_SOON === "true"
  );
}
