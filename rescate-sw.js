const CACHE = 'rescapp-v1';
const FILES = ['index.html', 'rescate-manifest.json', 'rescate-icon.svg'];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  if (e.request.url.startsWith(self.location.origin) && !e.request.url.includes('counter.php')) {
    e.respondWith(
      caches.match(e.request).then(res => res || fetch(e.request))
    );
  }
});
