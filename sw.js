// Service worker de La Balance d'Ondine : l'appli marche hors ligne une fois ouverte.
// Changer VERSION à chaque mise à jour pour que les téléphones récupèrent la nouvelle version.
const VERSION = 'balance-v8';
const SONS = ['add','boing','coin','del','drop1','drop2','drop3','drop4','drop5','flip','gavel','go','levelup','lose','nope','on','pick','slowmo','tick','tie','trophy','type','vdevil','vjudge','whistle','whoosh','win'];
const FICHIERS = [
  './', 'index.html', 'manifest.webmanifest',
  'assets/sprites/judge.png', 'assets/sprites/elephant.png', 'assets/sprites/anvil.png', 'assets/sprites/devil.png',
  'assets/icones/icon-192.png', 'assets/icones/icon-512.png', 'assets/icones/icon-maskable-512.png', 'assets/icones/apple-touch-icon.png',
  ...SONS.map(s => `assets/sons/${s}.wav`)
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FICHIERS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // la page : réseau d'abord (pour avoir les mises à jour), cache si hors ligne
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put('index.html', copy)); return r; })
      .catch(() => caches.match('index.html')));
    return;
  }
  // polices Google et fichiers du jeu : cache d'abord
  if (url.origin === location.origin || url.hostname.endsWith('fonts.googleapis.com') || url.hostname.endsWith('fonts.gstatic.com')) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
      if (r.ok || r.type === 'opaque') { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
      return r;
    })));
  }
});
