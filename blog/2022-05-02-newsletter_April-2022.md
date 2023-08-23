---
title: Newsletter for April 2022
author: Samuel Chaineau
author_url: mailto:inno@ekimetrics.com
header_image_url: "img/blog/couv.jpg"
image: "img/blog/couv.jpg"
tags: [Machine Learning, Javascript bundler, Data Engineering]
draft: false
description: "We are now at the start of May and we release our 4th Newsletter! Ranging from podcasts to tutorials, this Newsletter is made for practicioners!"
keywords:
    - Data Science
    - EkiLab
    - Ekimetrics
    - Eki.Lab
    - Eki
    - Machine Learning
    - Artificial Intelligence
    - Data Engineering
    - App and Web Development
    - Data Science for business
---

<!--truncate-->

<div align = "center">

  ![screenshot-app ](img/newsletter_april_2022/couv.jpg)
</div>


<div align ="justify">

## Data Science 

### How is Warner Music using AI to turn sound into strategic assets?  

![](img/newsletter_april_2022/Warner.jpg)

Industries relying on creative contents are now moving toward a data centric strategy with dedicated teams and departments. We wanted to share with you the testimony of Kobi Abayomi, vice president of Data Science at Warner Music. The resource is available both as a podcast or as a transcript. The discussion covers broad topics ranging from what’s going on in the industry, what makes a good data science team or what are his views for the future of AI. 

[Turning Sound Into Information: Warner Music Group’s Kobi Abayomi (mit.edu)](https://sloanreview.mit.edu/audio/turning-sound-into-information-warner-music-groups-kobi-abayomi/)

## Machine Learning

### Showcasing and sharing your ML model in the easiest way with Gradio

![](img/newsletter_april_2022/Gradio.jpg)

Gradio is an open-source framework enabling ML Engineer to quickly share their models via a web interface. The cool feature of Gradio is how simple it is while leaving some rooms for changes and modifications.  Gradio can work with any kind of models and data structures (Images, Text, Tabular…). However, Gradio is made to share pre-trained models meaning that it cannot be used as an Active Learning asset where data would be provided to the model iteratively to its training. When having to share quick demos without the time or the need to have bespoke interface, Gradio is a no brainer. 

[Gradio](https://gradio.app/)

### Learning to prompt for Continual Learning

![](img/newsletter_april_2022/Learning.jpg)

Even though Pathways Language Models (PaLM) is one of the hottest releases of April 2022, our attention has been focused on another Google Research paper discussing the best way to perform Continual Learning. Continual Learning means to train a single model on various type of tasks iteratively. When being trained at step t, the model does not have access to previous data. One of the main challenge posed by such concept is how to maintain knowledge from past data into the model, avoiding catastrophic forgetting. In this paper, researchers propose an approach by leveraging prompt engineering. Using prompt Is very common in NLP as it tends to better fine-tune pretrained algorithms. The main idea of this paper is to tackle continual learning not as a model weights’ shift but rather as a memory space representing the type of task to be trained on. 

[Learning to Prompt for Continual Learning](https://arxiv.org/abs/2112.08654)

## Data Engineering & Architecture

### Putting ElasticSearch into production 

![](img/newsletter_april_2022/ElasticSearch.jpg)

ElasticSearch is a famous distributed search engine build on Apache Lucene. It has now been pretty much the standard for complex use cases where you have to look for data in a large volume and complex database (cf: [How Netflix Content Engineering makes a federated graph searchable](https://netflixtechblog.com/how-netflix-content-engineering-makes-a-federated-graph-searchable-5c0c1c7d7eaf)). However, when it comes to put it into production, several challenges and pitfalls can occur. Hence, this blog post is a user sharing story with some best practices to adopt and bad habits to avoid. 

[In depth guide to running Elasticsearch in production | by Mattis Haase | Medium](https://medium.com/@mzhaase/in-depth-guide-to-running-elasticsearch-in-production-b2ea7c8fa082)


## App and Web Development

### How to build a JavaScript Bundler from scratch

![](img/newsletter_april_2022/Dev.jpg)

A JavaScript Bundler is a tool combining code files in a unique file making it ready to use and deploy. It keeps tracks of every dependency that you might have into your repository. Those are stored into a graph guaranteeing that all your files are updated accordingly. Even if it starts to be common to use a bundler, nothing worth more than building one by ourselves. Following post shows how to build a bundler by yourself while keeping it relatively simple.  

[Building a JavaScript Bundler | Christoph Nakazawa (cpojer.net)](https://cpojer.net/posts/building-a-javascript-bundler)

## Special Section: Modeling

### Dealing with logs and zeros in regression models

![](img/newsletter_april_2022/Log.jpg)

When having data generated by an exponential process, we tend to use log as a function to better fit liner model. However, problems arise when a portion of your data points are equal to zero. Common fix used is adding a constant (often 1) to your data to remove the problem. In this paper, researchers propose a novel family of estimators called iOLS (iterated Ordinary Least Squares). It presents a computational advantage while performing in the best way your fit.

[Dealing with Logs and Zeros in Regression Models (arxiv.org)](https://arxiv.org/abs/2203.11820)


</div>

