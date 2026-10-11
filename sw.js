// Service worker: laat de site offline werken en als app op het beginscherm staan.
// Pagina: meteen uit de cache (snel en zuinig); op de achtergrond wordt gekeken of er
// een nieuwe versie is. Zo ja, dan krijgt de app een seintje en verschijnt er een knop.
// Lettertype-bestanden veranderen nooit: alleen uit de cache.
const CACHE = 'tafels-v4';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

const versionTag = (res) => res && (res.headers.get('etag') || res.headers.get('last-modified'));

// Op de achtergrond: "is er iets nieuws?" (bij geen verandering een klein 304-antwoord)
async function refreshPage(cache, cached) {
  try {
    const res = await fetch('./index.html', { cache: 'no-cache' });
    if (!res.ok) return;
    const oldTag = versionTag(cached), newTag = versionTag(res);
    await cache.put('./index.html', res.clone());
    if (cached && oldTag && newTag && oldTag !== newTag) {
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach(c => c.postMessage({ type: 'update-ready' }));
    }
  } catch (e) { /* offline: dan blijft de versie uit de cache staan */ }
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match('./index.html');
      if (cached) {
        e.waitUntil(refreshPage(cache, cached));
        return cached;
      }
      try {
        const res = await fetch(req);
        if (res.ok) cache.put('./index.html', res.clone());
        return res;
      } catch (err) {
        return Response.error();
      }
    })());
    return;
  }

  // Lettertype-bestanden (woff2) veranderen nooit: cache eerst, geen extra verkeer
  if (url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.match(req).then(cached => cached || fetch(req).then(res => {
      if (res && (res.ok || res.type === 'opaque')) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    })));
    return;
  }

  // Overige eigen bestanden en de font-CSS: uit de cache, op de achtergrond ververst
  if (url.hostname === 'fonts.googleapis.com' || url.origin === self.location.origin) {
    e.respondWith(
      caches.match(req).then(cached => {
        const fresh = fetch(req).then(res => {
          if (res && (res.ok || res.type === 'opaque')) {
            const copy = res.clone();
            caches.open(CACHE).then(c => c.put(req, copy));
          }
          return res;
        }).catch(() => cached);
        if (cached) { e.waitUntil(fresh); return cached; }
        return fresh;
      })
    );
  }
});
