---
slug: Predicting_World_through_Multimodality
title: 'Predicting the World Through Multimodality: When Data Speaks Together'
authors: [taher.asmi, francois.guerillon]


header_image_url: "img/blog/Predicting_World_Multimodal.jpg"
image: "img/blog/Predicting_World_Multimodal.jpg"
tags: [Multimodal AI, Computer Vision, Generative AI, Predictive Modeling]
draft: true
description: "How multimodal AI turns images, text, and data into smarter, more robust predictions that drive better business decisions."

keywords:
    - Multimodal AI
    - Computer Vision
    - Generative AI
    - Predictive Modeling
---
<!-- import useBaseUrl from "@docusaurus/useBaseUrl";

<link rel="stylesheet" href="{useBaseUrl('katex/katex.min.css')}" />
 -->
<!--truncate-->

<div align="justify"> 

Our highly digitized world generates vast amounts of new data every day, in many different forms: images, text, numbers, sounds… Every digital interaction produces data, every click leaves a trace. Yet most artificial intelligence systems still exploit only a single facet of this richness, an image alone (or a small set of images), a standalone text, or numerical tables. This is known as a unimodal approach. But reality itself is multimodal.

This is precisely what we explore at Ekimetrics research lab, prediction from multimodal data, an approach that brings together multiple data types to better understand, predict, and support decision-making.



# What Is Multimodality?

In deep learning, multimodality refers to a model’s ability to learn from multiple sources of information simultaneously.

Humans do not rely on a single modality to understand a situation. We observe, read, listen, and feel. Our brains fuse these signals to build a global understanding. The goal is to do the same with artificial intelligence. Images capture shape, color, style, and aesthetics, text provides context, tone, intent, and sometimes emotions, tabular data (numbers and indicators) reveal objective characteristics, and time series tell the story of how things evolve over time, often exposing underlying trends.

By combining these modalities, we obtain a much richer representation of reality, one that enables better future predictions and deeper interpretation of the present.


# Why Is This So Powerful?

Because the real world is never limited to a single modality.

Take product sales forecasting as an example. The product image, its marketing description, technical specifications, and historical sales data each tell part of the story. Individually, these signals are informative but often incomplete. Together, they become strongly predictive.

This is the core value of multimodality: cross-referencing visual, textual, and numerical signals to uncover hidden relationships, allowing models to learn more like humans by perceiving a problem in its full multisensory complexity, and ultimately producing predictions that are more robust, and more precise.


# Our Approach: A Next-Generation Multimodal Architecture

To efficiently connect these diverse sources of information, we designed a deep learning architecture inspired by the latest advances in multimodal artificial intelligence.

It is built around a backbone composed of specialized encoders, each acting as an expert for a given modality, or in some cases, a pair of modalities. These encoders are based on open-source pre-trained models and are then fine-tuned to the specific business problem, allowing us to fully leverage the knowledge acquired during large-scale pretraining.

This backbone is designed to be fully dynamic. Encoder selection is adapted to the use case, expected complexity, available data volume, and computational constraints. As a result, we can favor lightweight and fast models in demanding industrial contexts, or leverage more sophisticated variants when data richness allows it.

Once each modality is mapped into a coherent latent space, we use a trainable fusion module that explicitly learns interactions between the different data sources. This module can take several forms, transformer-based architectures or simpler neural networks, when efficiency and cost are priorities. Regardless of its form, its role remains the same, transforming a diversity of signals into a single, coherent decision.


# Complementary Solutions for Specific Business Needs

In addition to our main multimodal architecture, we can leverage two complementary approaches tailored to specific business requirements.

## Tabular-driven enrichment

The first approach is used when the tabular modality is the dominant one. In this case, instead of directly using our multimodal architecture to perform forecasting, we extend it so that it optimizes the results already obtained by a tabular model. Our solution then acts as an enrichment module, it leverages other modalities, such as text or images, to produce additional representations that the tabular model cannot extract on its own. The multimodal architecture therefore does not replace the main tabular model but rather strengthens it and refines its predictions by exploiting complementary information.


## Interpretability-first modeling

When interpretability and understanding of predictive drivers are the primary objectives, we extract explicit and directly interpretable features from complex modalities. These may include visual concepts or textual signals such as sentiment or key themes. The predictive task is then reframed as modeling on enriched tabular data, preserving transparency while benefiting from unstructured data. This approach is particularly valuable in environments where decision explainability is essential.

This flexible design allows us to easily benchmark multiple model variants and select the best trade-off between operational performance, robustness, explainability and deployment cost. Our approach ensures optimal exploitation of modality complementarity, delivering more relevant, contextual, and business-aligned predictions.



# Some Use Cases

## Sales Volume Forecasting

**Objective**: Predict future sales volumes to optimize production and logistics.

We combine product images, descriptive text, available attributes (category, price, stock, positioning), historical sales (when available), and sometimes broader market data to capture emerging trends. Each modality contributes valuable insights: images reveal perceived quality or style, text conveys the marketing promise and uncoded product qualities, and tabular data reflects core characteristics and past behavior.


## Predicting the Number of Likes on Social Media

**Objective**: Estimate and optimize the potential impact of a post before publication.

The model learns from the post’s image, caption, hashtags, and profile data (number of followers, posting time, etc.). This can be a powerful asset for creators and brands, helping them select content and optimize messaging. It also allows us to analyze the relative importance of each modality, for example, assessing how much the image itself influences engagement.


## Predicting Average Product Ratings on E-Commerce Platforms

**Objective**: Anticipate customer perception and improve design or communication before launch.

Product images, text description(s), and numerical attributes (price, category, weight, etc.) are fused to estimate the average rating a product is likely to receive.


# Toward Truly Global Intelligence

Multimodality paves the way for a new generation of models, more flexible, more intelligent, and closer to how humans think.

It does not replace classical machine learning approaches; it reconciles them. At Ekimetrics, we believe multimodality represents the future of machine learning: multisensory AI systems that no longer analyze signals in isolation but instead understand the complex interactions between fundamentally different sources of information.


</div>