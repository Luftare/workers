const CACHE = 'workers-cache-v3';

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(CACHE).then(function(cache) {
      return cache.match(event.request).then(function(response) {
        return (
          response ||
          fetch(event.request).then(function(response) {
            cache.put(event.request, response.clone());
            return response;
          })
        );
      });
    })
  );
});
