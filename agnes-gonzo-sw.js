const CACHE='agnes-gonzo-2026-v1';
const FILES=['./','./index.html','./agnes-og-gonzo.html','./agnes-gonzo.webmanifest','./gonzo-klitmoeller.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
