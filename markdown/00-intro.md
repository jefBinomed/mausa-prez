<!-- .slide: data-background="./assets/images/streetart-origines.jpeg" class="transition" -->

# Origines du projet

Notes:
Revenons sur les choix

##==##

<!-- .slide: data-background="./assets/images/shazam.jpg" class="transition" -->

Notes:
Classification audio

##==##

<!-- .slide: class="full-center" -->

# Google annonce AutoML en 2018

![h-500](./assets/images/google-cloud-automl-fonctionnement.png)

Notes:
AutoML en Alpha -> Classification (cas de l'image)
Envie de tester

##==##

<!-- .slide: class="flex-row" -->

# Didier fan de streetart

![h-500](./assets/images/didier.jpeg)
![h-500](./assets/images/edicola.jpg)

##==##

<!-- .slide: data-background-video="./assets/images/mindblow.mp4" -->

Notes:
Ça a fait a chboom dans sa tête

##==##

<!-- .slide: class="full-center" -->

# StreetArt.app est né !

![](./assets/images/streeartApp.png)

Notes:
On a créé le Shazaam du street art

##==##

<!-- .slide: class="full-center" -->

# Architecture

![h-800](./assets/images/SchemaStreetArt.svg)

Notes:
PWA -> Angular 6
Firebase -> Serverless qui scale

- Auth
- DataStore
- Hosting
  Cloud Function -> AutoML
  Administration simplifiée par spreadsheet -> RestAPI
