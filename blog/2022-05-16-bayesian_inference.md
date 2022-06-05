---
title: Bayesian inference for better predictions of magazine sales
author: Duong Nguyen
author_title: Senior Machine Learning Consultant
author_url: mailto:inno@ekimetrics.com
header_image_url: "./img/blog/press_printing.jpg"
tags: [Bayesian Inference, Digital Transformation, Sales Prediction, AthenIA]
draft: false
description: "This article describes how Ekimetrics helped major press publishers using Bayesian inference for sales prediction."
keywords:
    - Data Science
    - EkiLab
    - Ekimetrics
    - Eki.Lab
    - Eki
    - Machine Learning
    - Artificial Intelligence
    - Data Science for business
    - Bayesian Inference
    - Sales Prediction
    - AthenIA
    - Digital Transformation
---

<!-- import useBaseUrl from "@docusaurus/useBaseUrl";

<link rel="stylesheet" href="{useBaseUrl('katex/katex.min.css')}" />
 -->
<!--truncate-->





With the insights provided by domain experts and extracted from the historical data, we can estimate an expectation of the sales of the current issue, prior to its sale period. However, even though the experts have a deep understanding of the product as well as the market, and the historical data may show some characteristics of the sales curves, there is always a grey zone of uncertainty and error. The market evolves; customers change their buying habits; some internal factors were poorly estimated; some external factors were not considered; some unexpected events happen during the sale period, etc. All those factors make the prediction which is purely based on historical experiences less reliable. 

After the sale of the current issue has taken place, we can cumulate the recorded sales to get the beginning part of its sales curve. The more time passes, the more observations are built up. Those observations provide the latest information of the reality and indicate how the real sales actually evolve. However, the observations themselves contain noise. For example, a point of sale may forget to record a sale or record it a few days late, preventing us from using purely the observations to make a precise prediction.

Since we do not have enough subjective data, we can leverage Bayesian inference to fold in the prior knowledge that we have already had (thanks to the inputs of the experts and the historical sales) to draw stronger and sharper predictions. Mathematically, we model the sales by a random variable X that follows a distribution p(X|θ) parameterised by a set of parameters θ: X ~ p(X|θ). The prediction problem is reduced to finding the “correct” θ. Given the observations X<sub>obs</sub> (the sales records at the beginning of the sale period of the current issue in our case), frequentist approaches such as the Maximum Likelihood Estimation (MLE) method find an optimal θ that best fits Xobs: θ<sub>MLE</sub> = argmax<sub>θ</sub>(p(X<sub>obs</sub>|θ)), then plug it in to make the sales prediction: X<sup>pred</sup><sub>MLE</sub> = argmax<sub>X</sub>(p(X|θ<sub>MLE</sub>)). However, X<sub>obs</sub> usually contain noise,  results in a bad estimation of θ. With Bayesian inference, we can integrate our prior knowledge to get better predictions. Specifically, from the sales of historical issues and the inputs of the experts, we have an idea of how θ should be, modelled as the prior distribution p(θ). Incorporating it with the information provided by the observations Xobs, we get the posterior distribution p(θ|X<sub>obs</sub>), which is proportional to the prior p(θ) and the likelihood p(X<sub>obs</sub>|θ) 