'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "6666b744bf797d7cf664b614358ad39d",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"index.html": "f43cbbfeff281121e2ede277b6a1c982",
"/": "f43cbbfeff281121e2ede277b6a1c982",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"flutter_bootstrap.js": "1db24eeb98181c9e9e1bdb41c380e98d",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"duck.gif": "57615b8c0092a66c1d4058b1692955cc",
"assets/NOTICES": "fd8ceda39f730f3f05b03c9dfbe0a2b7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/assets/projects/bd1.webp": "02b9c8c4d2fcaa23ed2ec381a83f828c",
"assets/assets/projects/afps2.webp": "39aba56630ec840f7b2db1bd103f62ba",
"assets/assets/projects/bor3.webp": "2d557637f21ab9324b49554128485e59",
"assets/assets/projects/m0.webp": "17cb1affe85751d79f382afb9f52f6e1",
"assets/assets/projects/bd3.webp": "e209b51c26b3ef50bf4a033afa2a72d3",
"assets/assets/projects/qr2.webp": "8fad0831fb9b1ee8b2a4f7a2f870b593",
"assets/assets/projects/afps0.webp": "a82982dbe75d938f378b250cf16ca698",
"assets/assets/projects/qr4.webp": "0c0b0cf6196d5543b230b95a76f577c2",
"assets/assets/projects/afps5.webp": "532948345d4d26d521981f9fbaf9030b",
"assets/assets/projects/recipe2.webp": "6517198bf97b6a8f401f9987c501d15b",
"assets/assets/projects/qr1.webp": "258c4dc848c6b81b9f8fbcb5a6a39079",
"assets/assets/projects/bor1.webp": "4dcd33aa9f8ff2ab6db7350e96ae958d",
"assets/assets/projects/afps6.webp": "9dc85ca4b25474f072fd9f256f8d27fd",
"assets/assets/projects/afps3.webp": "3bcd69e9ed6feb4c11a9e7b679961a63",
"assets/assets/projects/afps1.webp": "5dc444537fbe475966ffafe515d64c4c",
"assets/assets/projects/afps4.webp": "e4049fbad12c2ed80b818edf1ca3a293",
"assets/assets/projects/recipe1.webp": "0c5861c03c41f9bdf3d2b36f17f7c896",
"assets/assets/projects/qr3.webp": "62a5322c687af5cff3f655bdffca9fa5",
"assets/assets/projects/m1.webp": "965bf5c49cff30f1f2b974d0c5d9bb08",
"assets/assets/projects/m3.webp": "ff00f00b7c621053938dfcc1fe50c8a2",
"assets/assets/projects/bd4.webp": "1ea4220624d8fe2599b2cd30cd68a608",
"assets/assets/projects/m2.webp": "ca6e563f1c0ff9d0785e877eb832fcfd",
"assets/assets/projects/m4.webp": "720305677a2cd34317ae759d2e01bc3a",
"assets/assets/projects/bd2.webp": "185b47a2a4d67a6a095818935f97cb45",
"assets/assets/projects/recipe3.webp": "e121b94b300f3f549c32a37fbecfd01e",
"assets/assets/projects/bor2.webp": "6b866efac50a93a4ae482cc6e7385cde",
"assets/assets/skills/python.svg": "02d2e419b46fbb0ad073277038581239",
"assets/assets/skills/unreal.svg": "c3b1dfa28c04af184f40bc353e89ef6c",
"assets/assets/skills/dart.svg": "aa186d0d8ee172e9043e2555cb70d428",
"assets/assets/skills/java.svg": "d405b286f4c3624a5965d1faf83df4ce",
"assets/assets/skills/django.svg": "26fc02528098e74a4e8c0db0bff4826d",
"assets/assets/skills/flutter.svg": "9c31b1bad560e6d39ce43fd5b5e2d92c",
"assets/assets/skills/html.svg": "185ae2b89ab3083c14648ddb16ea23d2",
"assets/assets/skills/unity.svg": "e351f6d9b886484a65a8c296202ccec2",
"assets/assets/skills/cpp.svg": "c434c05ce6365e4b5d93fe43f8d31081",
"assets/assets/skills/css.svg": "84b43cadf4b00b947f50f4ddb5a8f01c",
"assets/assets/skills/kotlin.svg": "a1e565e66d7b301fa02a3277d13afdf4",
"assets/assets/skills/cs.svg": "d500a56a121eb6227c8b7f0479020d85",
"assets/assets/skills/firebase.svg": "d46f69f077654b47c1bfeaefb71514c7",
"assets/assets/profile.webp": "0e7b7dc5327fa9e9001fadc9c365e0b5",
"assets/AssetManifest.json": "73f417b0f7cc52fe86578487df27c22a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b1b7db35c0875bdefa6eeda1c2f1bf34",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b0363d17b075dfcef26f72a6b141c874",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "7579d16e041af64d3fa9231f0fa36124",
"assets/fonts/MaterialIcons-Regular.otf": "7e8d2f3f03b55fdff7a207bf867a7261",
"assets/AssetManifest.bin": "2ef3c13ff5b4cf2a9b4266cb8ed50248",
"assets/AssetManifest.bin.json": "8933191d9fd0401ac7c54e630c79026e",
"favicon.png": "61b4d48548b20991c0b6838e865567b4",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
