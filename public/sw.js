const staticCacheName = "site-static";
const dynamicCache = "site-dynamic";
const assets = [
  "/",
  "index.html",
  "/sw.js",
  "/static/css/main.f28ba2b1.css",
  "/static/css/main.f28ba2b1.css.map",
  "/static/js/main.6aa69e32.js",
  "/static/js/main.6aa69e32.js.LICENSE.txt",
  "/static/js/main.6aa69e32.js.map",
  "Icon/72.svg",
  "Icon/96.svg",
  "Icon/128.svg",
  "Icon/144.svg",
  "Icon/152.svg",
  "Icon/384.svg",
  "Icon/512.svg",
  "/Stats/stat.html",
  "/Stats/stats.js",
  "/Stats/style.css"
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