self.addEventListener("install" , evt => {
    console.log("installed");
});

//activate
self.addEventListener("activate" , evt => {
    console.log("activiated");
});

self.addEventListener("fetch" , evt => {
    console.log("fetch event", evt);
});