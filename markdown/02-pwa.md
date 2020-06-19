<!-- .slide: data-background="./assets/images/streetart-01.jpg" class="transition" -->

# PWA

Notes:
First evolution - PWA - offline

##==##

# Les principes

![center](./assets/images/pwa.png)

Notes:

- Main offline

- Développement d'application Web telle une applications mobiles ou natives
  Première clé de boost des PWA,

- fichier manifest

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
Angular génère un service worker - @angular/service-worker
ngsw-worker.json => ngsw-worker.js

Le service worker d'angular se charge de toutes la gestion des données statiques ainsi que des routes principales

New @angular/pwa

##==##

<!-- .slide: data-background="./assets/images/streetart-02.jpg" class="transition"-->

# Service worker - custom

##==##

<!-- .slide: class="with-code"-->

# Création d'un service worker métier

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

# Création d'un service worker métier

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

<!-- .slide: data-background="./assets/images/streetart-03.jpg" class="transition"-->

# Deux services worker

##==##

# Voie officielle

> To bypass the service worker you can set ngsw-bypass as a request header, or as a query parameter. (The value of the header or query parameter is ignored and can be empty or omitted.)

<br>

![left w-100](./assets/images/angular.svg)
[https://angular.io/guide/service-worker-devops#bypassing-the-service-worker](https://angular.io/guide/service-worker-devops#bypassing-the-service-worker)

Notes:
Le service worker Angular va tout analyzer de base et si erreur aucune possibilité à notre service de worker d'intercepter l'appel
Défaut :

- paramètre à surcharger !!

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
