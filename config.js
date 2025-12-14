// ============================================================================
// Centralized Configuration - Auto-detects local vs production
// ============================================================================

(function() {
  const IS_LOCAL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  window.__apiConfig = {
    IS_LOCAL: IS_LOCAL,
    API_BASE: IS_LOCAL ? 'http://localhost:3000' : 'https://underwrite-iq-lite.vercel.app',
    SITE_BASE: IS_LOCAL ? window.location.origin : 'https://fundhub.ai'
  };

  // Log in dev mode for debugging
  if (IS_LOCAL) {
    console.log('[config] Running in LOCAL mode:', window.__apiConfig);
  }
})();
