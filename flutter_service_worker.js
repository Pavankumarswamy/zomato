'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
".git/config": "ca151e336d9688bd9a1eacc417845834",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "61ee41d42f8dfd788ee90f194e2b631f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4026a95e28986094f5b680e9d6b7ef84",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "68f41dccd00647d58aaa4d0d70bb4f5b",
".git/logs/refs/heads/master": "68f41dccd00647d58aaa4d0d70bb4f5b",
".git/logs/refs/remotes/origin/HEAD": "cee70af4987b40075dbbc6bb2368d34f",
".git/logs/refs/remotes/origin/master": "062c3ebe64b6cfb8826197251534b01e",
".git/objects/01/4572ab724f9d3a7b060953e2c254df417173e7": "dbff8379d6f31a4d69196182fe1b488d",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/0b/4a9ba0f06c422665ef23cf6ba9d6810ae10044": "179d051603b6fd8ba88a3b51ecb1d5c1",
".git/objects/16/1068b9130eec32fe7e451fe4e3ab79d539c5de": "6c09dc044d593b5852d536466ab1256d",
".git/objects/1c/3e837188357ec1de4e730c8ae0758f7f454e12": "37eee46e26dc236c43e6bb00144898eb",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/38/cd5f50aa85e273a2588b2c5ea4d477a3da562b": "86ca74160ccb3106e4d00fa24b505faa",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/a3759457f97d66f57d63b7dec8b8088389ecdf": "2d4365c44170440e27cdb58fbfde21b4",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/4a/ec469ec3ddf1ae6ba9adc469ce55713df9c842": "a1381469a24c99cb02734711e87b411b",
".git/objects/4b/1a039714f7e3b5128185ad7ccffe0850b08087": "f0cb19ff8f1e847fabe72a77e8100bf6",
".git/objects/4e/9cc1a43a522445dcfd8e83ee8354ad344b39c7": "fc6df5132b0d76512c684cd34694fdd6",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/50/3f42ace25ba93fe1f4fdc12653db77f36e8d37": "f863dd809d45f9f335cbaef17a20edbf",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5c/220b4ec163e9e765a8f20a5a50b716c35541f0": "f4cf7f4483b0d2b1eb3928f9c48189ba",
".git/objects/5c/6c00b31c948d76efa3e31178f0fd397ee75eba": "e955869f59c8250fd56cf6d034c64bc5",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/71/ddaac649dea32318aec1234179d3047eaefa22": "870b453c368964731d9da582b3c9efc4",
".git/objects/73/cdee4861d050ae38731a0dcb5179288116297a": "eb0b3ce65e640eda10f2b89f79d3fa0e",
".git/objects/7d/7824aefb9db8a5ce1fc0e9aad4b71f8c432fd8": "53d90c4b9a448456d00b623a3e605891",
".git/objects/87/350abedb75c65dac0052e12445766dee0c9361": "47be14c9071064b4f545a365a2b329a2",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/90/38150c463c1c66b90b706cecd457e1e9ebade1": "b4c436c9cd4985e4d7259aa365a5a396",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/92/c3961ac99a0659ee0cdc051773e7cd7b832e9c": "da1358d8d2afec3f8fc0a367c84f41c2",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/a2/5355f3583a02890ca8d510e4a933d65ebbd137": "617a8914297e6f973f26afc87f98d230",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b1/56e85e43929a82a368946fe8f1beb7e8a91485": "a90001b9279f11f1325285ce87c4b743",
".git/objects/b9/7cc462698e1775af0e4fde1dcb5b4a5911ebaf": "510ebb584581937583dd33704d23bbaf",
".git/objects/ba/e1a12bb99f376d27341cc7674e17610f6090af": "fe13d46e388e42faed4d3dc2a665dc64",
".git/objects/bc/c98e665d6460c0688b429863d0fd0c7ddf7018": "f04da96eb4a17add19e22cb196e8a9ae",
".git/objects/c6/a59e0fe51d25109f7b967785680c94de185290": "a91c6d9a68e9a1dea7772cf93c289bf9",
".git/objects/d2/f7e71bd0ddaa7b1a3ed7d2e6ac407b27def811": "b350399949cb99e0616800709cc16f8d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dd/6a59439fc003248f8c82595af5ce4f40a3044e": "4c5f84f285227207ec656c9cf41c88ea",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/refs/heads/master": "34ad8921e629f92b2ee898485385be94",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "2297fcb69154884db28153d9052cf377",
"assets/AssetManifest.bin": "e130e5435c8b7107d19f75898f4c0f9a",
"assets/AssetManifest.bin.json": "0cebf73a6bc3ce8e16e5f9eb0b51d587",
"assets/AssetManifest.json": "77dd37a94fef59411c870bd531ee1d07",
"assets/assets/login.json": "dc84e58b47e10ebe6d18fb2766b25001",
"assets/assets/logo.png": "af59dc4fa5541a812206f5dd1c5d5e76",
"assets/assets/zs.jpg": "4a28b24ac77afa0afd62558325c42ea2",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "8c2997e8daf1da5bd8441e1a664c6a43",
"assets/NOTICES": "b0eb9ada4b317f42577027f1bd2db504",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "e145f815fcc3244975b55ee3e8f17b82",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "e3ae7fa34f1e5fd6bce18539c41c5ca5",
"icons/Icon-192.png": "a56887873f7d296e915d9c64ecd6948c",
"icons/Icon-512.png": "c631a20bd7a9400947970060621890c4",
"icons/Icon-maskable-192.png": "a56887873f7d296e915d9c64ecd6948c",
"icons/Icon-maskable-512.png": "c631a20bd7a9400947970060621890c4",
"index.html": "1fec08dc635826c22b1b8a61cb1a485d",
"/": "1fec08dc635826c22b1b8a61cb1a485d",
"main.dart.js": "12a0f2f2e68817756a20d7b10e99306f",
"manifest.json": "27c0abbd8ec62f31278a7ab816f5e1b2",
"version.json": "177a739dbcbd081e91e51a787a33a4c5"};
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
