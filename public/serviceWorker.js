self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('mysite-dynamic').then(function(cache) {
      return cache.match(event.request).then(function (response) {
        if(response) { console.log("from cache");}
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
const urlsToCache =[
      '/',
      '/index.html'];
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open('mysite-dynamic')
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});