'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c950adfdfe9910e4f5deacf5a8afdce2",
"assets/AssetManifest.bin.json": "c2ce223e7300257282484b65500b218a",
"assets/AssetManifest.json": "2f38ad3543efe257989c164351b976d7",
"assets/assets/animation/coder.json": "c9e548d376c50bee05c10f30d210c14f",
"assets/assets/animation/skills.json": "838dee70f11609332e3cb33b2b51e272",
"assets/assets/animation/yoga.json": "820fe3f1820431901ca5a62d9c276e00",
"assets/assets/back.jpeg": "89485a18d2912ffafff949d53113ad0e",
"assets/assets/background.svg": "79d1860724e3523c3a3b02633ee4bda8",
"assets/assets/burger_menu.svg": "352977cbb34c8ddf28e33a024bf23a4d",
"assets/assets/graphics/coder.svg": "59f04a0de1c25dafa7dd906f16819200",
"assets/assets/graphics/skills.svg": "e53294881c634e52335f64b918e68637",
"assets/assets/graphics/yoga.svg": "33e987777b584dbd65842ec254c92ddb",
"assets/assets/pfp.png": "776a4c0b7b8ae7a52c7df82caecbadae",
"assets/assets/pfp1.png": "9accb7f1f2c18d1242dc70d25203eac6",
"assets/assets/pfp2.png": "8c9d80e90cf34b336ad8bdd9dc6feb8c",
"assets/assets/profile.webp": "0e7b7dc5327fa9e9001fadc9c365e0b5",
"assets/assets/projects/afps0.webp": "6becfc280023f4445478ad33d48eea04",
"assets/assets/projects/afps1.webp": "45636fe50ca22c3d1c57be96a8655240",
"assets/assets/projects/afps2.webp": "4d0228df1afefbfb9aab363ef5e4466e",
"assets/assets/projects/afps3.webp": "980e14f8ff8f3fbd91c846498934280a",
"assets/assets/projects/afps4.webp": "cfe6046fec5d08321c4c84426a92bead",
"assets/assets/projects/afps5.webp": "eb3db8d0c3ccea0c6442d692fef3dd52",
"assets/assets/projects/afps6.webp": "93e47f9a562ca47e5b7e7f45bd30e919",
"assets/assets/projects/bd1.webp": "1bfbd6d04b067c224b9b667d0b3e8688",
"assets/assets/projects/bd2.webp": "7d2ec27cc70013b09942c24484ee94e6",
"assets/assets/projects/bd3.webp": "0700e8162cd74d1884f12a7c94bff97e",
"assets/assets/projects/bd4.webp": "1ea4220624d8fe2599b2cd30cd68a608",
"assets/assets/projects/bor1.webp": "4dcd33aa9f8ff2ab6db7350e96ae958d",
"assets/assets/projects/bor2.webp": "6b866efac50a93a4ae482cc6e7385cde",
"assets/assets/projects/bor3.webp": "2d557637f21ab9324b49554128485e59",
"assets/assets/projects/m0.webp": "17cb1affe85751d79f382afb9f52f6e1",
"assets/assets/projects/m1.webp": "965bf5c49cff30f1f2b974d0c5d9bb08",
"assets/assets/projects/m2.webp": "ca6e563f1c0ff9d0785e877eb832fcfd",
"assets/assets/projects/m3.webp": "ff00f00b7c621053938dfcc1fe50c8a2",
"assets/assets/projects/m4.webp": "720305677a2cd34317ae759d2e01bc3a",
"assets/assets/projects/qr1.webp": "258c4dc848c6b81b9f8fbcb5a6a39079",
"assets/assets/projects/qr2.webp": "8fad0831fb9b1ee8b2a4f7a2f870b593",
"assets/assets/projects/qr3.webp": "62a5322c687af5cff3f655bdffca9fa5",
"assets/assets/projects/qr4.webp": "0c0b0cf6196d5543b230b95a76f577c2",
"assets/assets/projects/recipe1.webp": "602f9b7e192eae578eb05c40ce7272b7",
"assets/assets/projects/recipe2.webp": "6517198bf97b6a8f401f9987c501d15b",
"assets/assets/projects/recipe3.webp": "e121b94b300f3f549c32a37fbecfd01e",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "26c3614425e09a3d8f18dd09e8b8e451",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c48faa97f880cd8f62fc3ab5b33e35be",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "7fc1cc98593d3c698de1a39dd2df1c5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b43074f062c38b9e7bb5f579caf1d7d7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2e6b4338e92675d3787a78101de8d81d",
"/": "2e6b4338e92675d3787a78101de8d81d",
"main.dart.js": "da529147a852b70a7e4de555e455576d",
"manifest.json": "16f43106f1b3640bda24698a8116a1c7",
"version.json": "8ba44ff193a6e46b49fabd1424a35260"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
