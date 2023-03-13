const staticCacheName = "site-static";
const dynamicCache = "site-dynamic";
const assets = [
  "/Dubstep/",
  "/Dubstep/index.html",
  "/Dubstep/sw.js",
  "/Dubstep/Stats/stat.html",
  "/Dubstep/Stats/stats.js",
  "/Dubstep/Stats/style.css",
];

self.addEventListener("install", (event) => {
  waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching assets");
      cache.addAll(assets);
    })
  );
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
      return (
        cacheRes ||
        fetch(evt.request).then((fetchRes) => {
          return caches.open(dynamicCache).then((cache) => {
            cache.put(evt.request.url, fetchRes.clone());
            return fetchRes;
          });
        })
      );
    })
  );
});
