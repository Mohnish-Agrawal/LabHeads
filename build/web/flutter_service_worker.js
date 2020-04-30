'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "bc14d75388ab1d3a53d120577210297a",
"assets/assets/images/labmanageicon.png": "7221e32b97afccb56d7905deade98e24",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "2e050f338b2f2ae2ad7441e73c9903b5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d8e615fe109e8fd5790015186d9c7c20",
"/": "d8e615fe109e8fd5790015186d9c7c20",
"main.dart.js": "3ab6cf54619c4c220f335727757c9acf",
"manifest.json": "c0e6dddf220cabe30b2d3215c5aa6676"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
