import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageview } from "../utils/analytics";

/**
 * Envia pageview ao GA4 sempre que a rota mudar (SPA).
 */
export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location.pathname, location.search]);

  return null;
}
