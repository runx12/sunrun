/* ═══════════════════════════════════════════════════════════════════
   RALLY POINT — Service Worker
   Strategy: Cache-first for the app shell (HTML), network-first for
   Google API calls (data always needs to be fresh).
   ═══════════════════════════════════════════════════════════════════ */

const CACHE_NAME = 'rp-shell-v1';

/* Files to cache on install — the app shell */
const SHELL_URLS = [
  '/sunrun/rally',
  '/sunrun/rally.html',
  '/sunrun/rp-manifest.json',
];

/* ── Install: cache the shell ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(SHELL_URLS).catch(err => {
        /* Non-fatal — shell caching may fail in dev environments */
        console.warn('[RP SW] Shell cache failed:', err);
      });
    })
  );
  self.skipWaiting();
});

/* ── Activate: clean up old caches ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

/* ── Fetch: serve shell from cache, pass API calls to network ── */
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  /* Always go to network for Google APIs, OAuth, and sheet data */
  if (
    url.hostname.includes('googleapis.com') ||
    url.hostname.includes('accounts.google.com') ||
    url.hostname.includes('google.com')
  ) {
    return; /* let it fall through to network */
  }

  /* Cache-first for the app shell */
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).then(response => {
        /* Cache successful GET responses for the shell */
        if (event.request.method === 'GET' && response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    }).catch(() => {
      /* Offline fallback — return cached shell if available */
      return caches.match('/sunrun/rally') ||
             caches.match('/sunrun/rally.html');
    })
  );
});
