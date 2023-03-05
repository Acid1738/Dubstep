const staticCacheName = "site-static-v2";
const assets = [
  "/",
  "index.html",
  "/src/Characters/Character.js",
  "/src/Fetch/fetch.js",
  "/src/Front/card.css",
  "/src/Front/card.js",
  "/src/Front/CardBack.js",
  "/src/Front/Click.js",
  "/src/Information/Refresh/Refresh.js",
  "/src/Information/info.css",
  "/src/Information/Info.js",
  "/src/Information/InfoBack.js",
  "/src/Season/character.css",
  "/src/Season/season.css",
  "/src/Season/season.js",
];

self.addEventListener("install", (evt) => {
  caches.open(staticCacheName).then((cache) => {
    console.log("caching assets");
    cache.addAll(assets);
  });
});

//activate
self.addEventListener("activate", evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            console.log(keys);
            return Promise.all(keys 
                .filter(key => key !== staticCacheName)
                .map(key => caches.delete(key)))
        })
    )
});


//fetch events
self.addEventListener("fetch", evt => {
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request);
        }))
});
