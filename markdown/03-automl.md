<!-- .slide: data-background="./assets/images/streetart-03.jpg" class="transition" -->

# AutoML

Notes:
Service de machine learning de GCP
=> besoin : classification d'image
Par raaport au offline, solution possible d'export

##==##

<!-- .slide: class=""-->

# Classification d'images

![full-center w-1400](./assets/images/bg-0301.jpg)

Notes:
Plus il y a d'images, plus la qualité du modèle est meilleure

Générateur de CSV

##==##

# Deux modèles au choix

<div class="flex-row" style="text-align:center;">
    <div><img src="/assets/images/vision.jpg"><p>API Vision</p></div>
    <div><img src="/assets/images/edge.jpg"><p>Edge</p></div>
</div>
Notes:
Edge = offline vs Vision = in cloud

##==##

<!-- .slide: data-background="./assets/images/bg-0302.jpg" class="transition bottom"-->

# Entraînement

Notes:
Etape Longue mais totalement transparente

1000-10000 : 4-6 heures recommandées

Coût d'entraînement - heures d'entraînement free pour test

##==##

# Export du modèle

![center](./assets/images/tensorflow.svg)

Notes:

- TF Lite (mobile)
- Core ML (IOS)
- Container (TF run on a container)
- Coral (circuit électronique applicatif our périphérique)

Format export : dictionnaire, binaires, config en json

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

Conclusion : application utilisable dans le musée
