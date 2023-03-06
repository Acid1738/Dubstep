const staticCacheName = "site-static";
const assets = [
  "/",
  "index.html",
];

self.addEventListener("install", (evt) => {
  caches.open(staticCacheName).then((cache) => {
    console.log("caching assets");
    cache.addAll(assets);
  });
});

//activate
self.addEventListener("activate", (evt) => {
  evt.waitUntil(
    caches.keys().then((keys) => {
      console.log(keys);
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});

//fetch events
self.addEventListener("fetch", (evt) => {
  evt.respondWith(
    caches.match(evt.request).then((cacheRes) => {
      return cacheRes || fetch(evt.request);
    })
  );
});
