/**
 * Google Analytics 4 (GA4) - Mitta Estética
 * Stream: mittaestetica.vercel.app | ID: G-SDRJ73205T
 * Opcional: defina VITE_GA_MEASUREMENT_ID no .env para sobrescrever.
 */
const MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID || "G-SDRJ73205T";

export function initGA() {
  if (!MEASUREMENT_ID) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", MEASUREMENT_ID, {
    send_page_view: false, // controlamos manualmente para SPA
  });
}

export function pageview(path) {
  if (!window.gtag || !MEASUREMENT_ID) return;
  window.gtag("config", MEASUREMENT_ID, {
    page_path: path,
  });
}
