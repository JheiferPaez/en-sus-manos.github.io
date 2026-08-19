const CACHE_NAME = "en-sus-manos-v1.0.1";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/css/styles.css",
  "./assets/js/config.js",
  "./assets/js/content.js",
  "./assets/js/storage.js",
  "./assets/js/search.js",
  "./assets/js/router.js",
  "./assets/js/app.js",
  "./assets/icons/logo.svg",
  "./assets/icons/favicon.svg",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/images/bienvenida.webp",
  "./assets/images/celulas-sangre.webp",
  "./assets/images/alimentacion-segura.webp",
  "./assets/images/lavado-manos.webp",
  "./assets/images/apoyo-cuidador.webp",
  "./recursos/planificadores-imprimibles.html"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(async () => {
        const cached = await caches.match(event.request);
        if (cached) return cached;
        if (event.request.mode === "navigate") return caches.match("./index.html");
        return new Response("Recurso no disponible sin conexión", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } });
      })
  );
});
