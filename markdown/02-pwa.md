<!-- .slide: class="" -->

![center h-900](./assets/images/dinosaur.jpg)

Notes:
Contexte: offline

##==##

# PWA

![center](./assets/images/pwa.png)

Notes:

- PWA existant mais à renforcer

- En particulier offline et perf

##==##

# Service worker

![center](./assets/images/service_worker_explain.svg)

Notes:
Proxy

##==##

<!-- .slide: class="with-code"-->

# Le contexte technique - Angular

```javascript
ServiceWorkerModule.register('/ngsw-worker.js', {
  enabled: environment.production,
});
```

<!-- .element: class="big-code" -->

Notes:
@angular/service-worker

ngsw-worker.json => ngsw-worker.js

données statiques et routes principales
Pas d'url paramétré

New @angular/pwa

##==##

<!-- .slide: data-background="./assets/images/streetart-01.jpg" class="transition"-->

# Service worker - custom

Notes:
cas concret classification d'une photo
request paramétrée

##==##

<!-- .slide: class="with-code"-->

# Service worker métier

```javascript
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .delete('app-cache')
      .then(
        caches.open('app-cache').then(async (cache) => {
          const list = await getListArtist(cache);
          for await (const entry of list) {
            pushArtistInCache(entry, cache);
          }
        })
      )
      .finally(self.clients.claim())
  );
});
```

##==##

<!-- .slide: class="with-code"-->

# Service worker métier

```javascript
self.addEventListener('fetch', (event) => {
  if (event.request.url.startsWith(URL_PREFIX)) {
    event.respondWith(
      caches
        .match(event.request)
        .then((response) => response || fetch(event.request))
        .catch((err) => {
          if (IMAGE_REGEX.test(event.request.url)) return '/assets/loader/unavailable.svg';
        })
    );
  }
});
```

##==##

<!-- .slide: data-background="./assets/images/streetart-02.jpg" class="transition"-->

# Deux services worker

Notes:
Si angular en erreur pas d'interception par le le custom !!

##==##

# Voie officielle

> To bypass the service worker you can set ngsw-bypass as a request header, or as a query parameter. (The value of the header or query parameter is ignored and can be empty or omitted.)

<br>

![left w-100](./assets/images/angular.svg)
[https://angular.io/guide/service-worker-devops#bypassing-the-service-worker](https://angular.io/guide/service-worker-devops#bypassing-the-service-worker)

Notes:
PB paramètre à surcharger, plusieurs modif à prévoir même semble-t-il minime !!

##==##

<!-- .slide: class="with-code"-->

# Notre solution

<br>

### mausa-ngsw-worker.js

```javascript
// events before angular service worker
self.addEventListener('fetch', event => { ... })
/****IMPORT ANGULAR WORKER******/
importScripts('./ngsw-worker.js')

self.addEventListener('fetch', event => { ... })

```

<!--.element: class="big-code"-->

Notes:

CONCLU: Offline traité pour les appels de notre API
