const cacheName = "reun-Block Blast Puzzle-1.1";
const contentToCache = [
    "Build/BlockBlast1.1-8.loader.js",
    "Build/BlockBlast1.1-8.framework.js.unityweb",
    "Build/BlockBlast1.1-8.data.unityweb",
    "Build/BlockBlast1.1-8.wasm.unityweb",
    "TemplateData/style.css"

];

self.addEventListener('install', function(e) {
    console.log('[Service Worker] Install');

    e.waitUntil((async function() {
        const cache = await caches.open(cacheName);
        console.log('[Service Worker] Caching all: app shell and content');
        await cache.addAll(contentToCache);
    })());
});

