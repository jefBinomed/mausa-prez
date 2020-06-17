<!-- .slide: class="transition" -->

# Quel est la fonctionnalité clé à avoir en offline ?

Notes: Le scan des oeuvres avec le résultat

##==##

<!-- .slide: class="transition" -->

# PWA

##==##

# Les principes

<br><ul>

<li>Progressive</li>
<li class="fragment">Sécurisée</li>
<li class="fragment">Engageante</li>
<li class="fragment">Installable</li>
<li class="fragment"><strong>Rapidité</strong></li>
<li class="fragment"><strong>Indépendance de la connexion</strong></li>
</ul>

Notes:

- le principale étant l'indépendance de la connexion

- Développement d'application Web telle une applications mobiles ou natives
  Première clé de boost des PWA,
- le service worker va être la clé de la gestion d'un cache applicatif

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

##==##

<!-- .slide: class="transition"-->

# Et nos appels dyamiques ?

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
          const list = await getListArtist();
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

<!--.element: class="big-code"-->

##==##

# Problème comment gérer deux services worker ?

[bypassing the service worker](https://angular.io/guide/service-worker-devops#bypassing-the-service-worker)

Notes :
Le service worker Angular va tout analyzer de base et si erreur aucune possibilité à notre service de worker d'intercepter l'appel
