<!-- .slide: class="transition" -->

# AutoML

Notes:
Service de machine learning de GCP

##==##

<!-- .slide: class=""-->

# Classification d'images

![full-center w-1400](./assets/images/bg-0301.jpg)

Notes:
Plus il y a d'images, plus la qualité du modèle est meilleure
Classer les images par étiquette - utilisation d'un générateur de CSV

##==##

<!-- .slide: data-background="assets/images/bg-0302.jpg"-->
<!-- # Entraînement du modèle -->

Notes: Etape Longue mais totalement transparente
Lancement durant la nuit - attention à la tarification et à la taille de votre projet

##==##

# Le choix du modèle ?

<div class="flex-row">
    <div><img src="/assets/images/edge.jpg"><p class="center">Edge</p></div>
    <div><img src="/assets/images/vision.jpg"><p>API Vision</p></div>
</div>
Notes: Edge = offline vs Vision = in cloud

##==##

# TensorflowJS

- Export du modèle
- Intégration de l'appel
- Préserver les deux modes, vision ou tensorflowjs
