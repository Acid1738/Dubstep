const staticCacheName = "site-static";
const dynamicCache = "site-dynamic";
const assets = [
  "/",
  "index.html",
  "/sw.js",
  "/Stats/stat.html",
  "/Stats/stats.js",
  "/Stats/style.css",
  "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js",
  "https://fonts.googleapis.com/css?family=Shantell Sans"
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
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
          return caches.open(dynamicCache).then(cache => {
            cache.put(evt.request.url, fetchRes.clone());
            return fetchRes;
        })
    });
    })
  );
});