/**
 * @file This service worker handles both PWA functionality (caching)
 * and push notifications via OneSignal.
 */

// Import the OneSignal service worker script
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

const CACHE_NAME = 'matrix-strategy-ai-cache-v1';
const urlsToCache = [
  '/',
  // Other assets can be added here. Next.js uses hashed filenames,
  // so a more advanced strategy is needed for full offline support.
  // This basic setup is enough to make the app installable.
];

// PWA: Install event - cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('PWA Service Worker: Caching core assets');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// PWA: Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('PWA Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// PWA: Fetch event - serve from cache if available, otherwise fetch from network
self.addEventListener('fetch', event => {
  // We only want to cache GET requests.
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Not in cache - fetch and cache
        return fetch(event.request).then(
          (response) => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});
