if (navigator.onLine) {
  if (sessionStorage.getItem("FirstTime") === null) {
    caches.delete("site-dynamic");
    sessionStorage.setItem("FirstTime", "true");
  }
}
