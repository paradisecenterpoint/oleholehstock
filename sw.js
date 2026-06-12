const CACHE_NAME = "stock-app-v1";

const urlsToCache = [

  "./",
  "./index.html",
  "./closing.html",
  "./crosscheck.html",
  "./history.html",
  "./style.css",
  "./config.js"

];
  

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});