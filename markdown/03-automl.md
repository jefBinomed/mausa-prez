<!-- .slide: data-background="./assets/images/streetart-04.jpg" class="transition" -->

# AutoML

Notes:
Service de machine learning de GCP
=> besoin : classification d'image

##==##

<!-- .slide: class=""-->

# Classification d'images

![full-center w-1400](./assets/images/bg-0301.jpg)

Notes:
Plus il y a d'images, plus la qualité du modèle est meilleure
Classer les images par étiquette - générateur de CSV

##==##

# Deux modèles au choix

<div class="flex-row" style="text-align:center;">
    <div><img src="/assets/images/vision.jpg"><p>API Vision</p></div>
    <div><img src="/assets/images/edge.jpg"><p>Edge</p></div>
</div>
Notes:
Edge = offline vs Vision = in cloud

##==##

<!-- .slide: data-background="./assets/images/bg-0302.jpg" class="transition underline bottom"-->

# Entraînement

Notes:
Etape Longue mais totalement transparente
Lancement durant la nuit - attention à la tarification et à la taille de votre projet

##==##

<!-- .slide: data-background="./assets/images/streetart-05.jpg" class="transition"-->

# Modèle offline

##==##

# Export du modèle

![center](./assets/images/tensorflow.svg)

Notes:

- TF Lite
- Core ML (IOS)
- Container (TF run on a docker container)
- Coral (Edge TPU - Google - circuit électronique applicatif)

##==##

<!-- .slide: class="with-code"-->

# Intégration du modèle

<br>

## Chargement

```typescript
constructor() {
    automl
      .loadImageClassification(PATH_MODEL)
      .then(model => {
        this.model = model
      })
  }
```

<!-- .element: class="big-code"-->

Notes:
@tensorflow/tfjs
@tensorflow/tfjs-automl

##==##

<!-- .slide: class="with-code"-->

# Intégration de l'appel

<br>

## Classification

```typescript
const predictions = await this.model.classify(image, { centerCrop: true });
```

<!-- .element: class="big-code"-->

Notes:
image : HtmlImageElement, ImageData, Tensor

Ne pas oublier d'enlever le bruit - 10%
Et de trier

##==##

<!-- .slide: data-background="./assets/images/choice.jpg" -->

Notes:
Garder l'API Vision
