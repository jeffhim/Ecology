const CACHE_NAME = "ecology-app-v1";
const ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/app.js",   // 若你把 JS 分檔，否則可省
  "/styles.css", // 若有外部 CSS
  "/icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).catch(()=>{})
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
