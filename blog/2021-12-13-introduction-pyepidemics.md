---
slug: introduction-pyepidemics
title: Introduction to Pyepidemics - epidemiological modeling in Python
author: Theo Alves Da Costa
author_title:
author_url: mailto:inno@ekimetrics.com
header_image_url: img/blog/intro-pyepidemics.jpg
tags: [Open-Source,Epidemiology,Bayesian]
draft: true
description: We created Pyepidemics, an open-source library to simulate epidemics (SIR, SEIHDR, COVID19). We detail in this article what you can build with the library.   
keywords:
    - Data Science
    - EkiLab
    - Ekimetrics
    - Eki.Lab
    - Eki
    - Machine Learning
    - Artificial Intelligence
    - Pyepidemics
    - Epidemiology
    - System Dynamics
---

<!--truncate-->

## Pyepidemics

### Context

During the first wave of COVID19 in 2020, Ekimetrics joined the CoData movement, a coalition of data and artificial intelligence specialists whose goal was to pool their skills to provide answers and solutions on the evolution of the pandemics. We had the chance to work with many epidemiological experts, and as we went along we built a toolbox to facilitate our modeling of the current pandemics. We then put this toolbox in open source under the name **pyepidemics** to contribute to the community on this scientific discipline difficult to apprehend for Data Scientists but with obvious bridges facilitating innovation. 
Today, with the resurgence of the epidemic in Europe, it seemed important to present this library more widely to democratize these analyses on a larger scale. 

- The library is available on Github at [this link](https://github.com/ekimetrics/pyepidemics)
- The documentation is available at [this link](https://ekimetrics.github.io/pyepidemics)

This article will serve as a synthetic presentation of what can be done with the library, please refer to the documentation for more details. Do not hesitate to post issues on Github and to contribute with new proposals, the development is still in experimental version. 

### Introduction to Pyepidemics
Pyepidemics allows to simply create compartmental epidemiological models (also used in system dynamics) and to solve the differential equations that model the phenomenon. The different features implemented today are: 

- Creation of classical compartmental models (SIR, SEIR, SEIDR, etc...)
- Creation of COVID19 related model (with ICU and different levels of symptoms)
- Creation of custom compartmental model
- Implementation of policies (lockdown, tracing, testing, etc...)
- Calibration of epidemiological parameters on real-world data using Bayesian optimization

### Installation
You can simply install pyepidemics using the command 
```
pip install pyepidemics
```


## Introduction to epidemiological modeling in Python
Les images, le raisonnement et la construction des premières briques de la librairie sont très largement inspirées du travail exceptionnel de Henri Froese avec sa série d'article sur l'épidémiologie, en particulier le premier article [Infectious Disease Modelling: Beyond the Basic SIR Model](https://towardsdatascience.com/infectious-disease-modelling-beyond-the-basic-sir-model-216369c584c4). 

### Compartmental models
Une épidemie sera modélisée en utilisant les différents états qu'une population pourra prendre, par exemple : non affectée, immunisée, vaccinée, malade symptomatique, malade asymptomatique, hospitalisée, en réanimation ... Chaque état sera modélisé avec un compartiment, et une population évoluera entre les différents comportements en fonction de paramètres de probabilité et de durée de transition. Concrètement cela revient à résoudre un système d'équations différentielles en fonction du temps. 

Par exemple le modèle compartimental le plus simple est le modèle SIR (pour les 3 états Susceptible - Infecté - Removed). 
Ainsi il est possible d'écrire les compartiments suivants avec leur transition : 

![](img/introduction-pyepidemics/sir.png)

Les paramètres de transition étant donné par : 

![](img/introduction-pyepidemics/sir2.png)


### Building a SIR model with pyepidemics
Cette section est détaillée dans ce [tutoriel](https://ekimetrics.github.io/pyepidemics/tutorials/quickstart/) qui est aussi disponible directement sur [Colab](https://colab.research.google.com/github/ekimetrics/pyepidemics/blob/master/docs/tutorials/quickstart.ipynb).  

#### Using the bank of models
Comme le modèle SIR est un modèle standard, vous pouvez retrouver une version déjà codée dans la banque des modèles. Nous apprendrons à la section suivante comment est construit cette abstraction pour vous permettre de rajouter des précisions dans la modélisation. 

Ainsi avec pyepidemics:

```python
from pyepidemics.models import SIR

N = 1000 # Thousand persons
beta = 3/4 # One person contaminates 3/4 person per day
gamma = 1/4 # One person stay infected for 4 days

sir = SIR(N,beta,gamma)
```

Ensuite, il est possible de résoudre le système d'équations différentielles simplement avec la méthode ``.solve()`` (plus de paramètres sont disponibles, regarder le tutoriel cité ci-dessus : 

```python
states = sir.solve()
states.show(plotly = False)
```

On observe ainsi ce que l'on appelle communément une "vague" épidémique. 

![](img/introduction-pyepidemics/sir3.png)


#### Reimplementing the SIR model
Rentrons maintenant dans le fonctionnement interne de cette abstraction pour réimplémenter son fonctionnement en quelques lignes de code. Concrètement nous construisons un graphe entre les différents états en détaillant les transitions. Pyepidemics traduit ensuite ce graphe en système d'équations différentielles pour pouvoir le résoudre. 




## References
Ces quelques références nous ont grandement aidé pendant le développement de la librairie
- [Infectious Disease Modelling: Beyond the Basic SIR Model](https://towardsdatascience.com/infectious-disease-modelling-beyond-the-basic-sir-model-216369c584c4)
- [Expected impact of lockdown in Île-de-France and possible exit strategies](https://www.medrxiv.org/content/10.1101/2020.05.08.20095521v1) - by INSERM
- [Estimating the burden of SARS-CoV-2 in France](https://hal-pasteur.archives-ouvertes.fr/pasteur-02548181/document) - by Institut Pasteur

TODO 
- Bien cleaner la documentation de pyepidemics
    - Features inexistants
    - Lien vers CoData
    - Couleur
