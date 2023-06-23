---
title: "Exploring the links between creative execution and marketing effectiveness - Part V: Key Paths to Success and Common Pitfalls to Avoid"
author: Marina Bermejo Sarmiento, Monica Brondholt Sorensen, Karin Sasaki
author_title: Data Scientist Consultant
author_url: mailto:inno@ekimetrics.com
header_image_url: "./img/blog/Eki_Meta_part_V.png"
tags: [Object Detection, Optical Character Recognition, Marketing Mix Modelling, Deep Learning, Tesseract]
draft: false
description: " In this last part, we outline the key learnings from this project, including key paths to success and common pitfalls to avoid."

keywords:
    - Data Science
    - EkiLab
    - Ekimetrics
    - Eki.Lab
    - Eki
    - Machine Learning
    - Artificial Intelligence
    - Data Science for business
    - Operational Research
    - Optimization
    - Knapsack problem
    - Deep Reinforcement Learning
---

<!-- import useBaseUrl from "@docusaurus/useBaseUrl";

<link rel="stylesheet" href="{useBaseUrl('katex/katex.min.css')}" />
 -->
<!--truncate-->


<div align = "center">

  ![screenshot-app ](img/Eki_Meta/Eki_Meta_part_V.png)
</div>


<div align="justify"> 

This article is the last part of a set of five technical articles that accompany a [whitepaper](https://ekimetrics.com/news-and-events/exploring-the-links-between-creative-execution-and-marketing-effectiveness-exclusivepreview) written in collaboration between Meta and Ekimetrics. Object Detection (OD) and Optical Character Recognition (OCR) were used to detect specific features in creative images, such as faces, smiles, text, brand logos, etc. Then, in combination with impressions data, marketing mix models were used to investigate what objects, or combinations of objects in creative images in marketing campaigns, drive higher ROIs.
In this last part we share with the reader common pitfalls to avoid when utilising tools for Object Detection, Optical Character Recognition and MMM, as well as things to keep in mind, that will facilitate the process.

</div>

## Common Pitfalls to Avoid
<div align="justify"> 

- **Failing to Define Labels at the Start:** Define the set of labels that are going to be studied at the very beginning. Adding more labels in the middle of the study would involve having to go back to time consuming tasks, such as manual labelling and repeated extraction and processing of labels.

- **Ambiguous Object Definitions:** Describe clearly from the start what each label is (e.g., “Person” can be any body part, not just a whole body with a face). This is helpful when the manual labelling is being done as a team, rather than by one person. Furthermore, if using a pre-trained model, ensure that your definition of the object aligns with what is detected by the model. For example, you may define “Car” as just the outside of the car while the OD model is trained to detect both the interior and exterior of cars.

- **Non-Generalizable Labels:** If you are studying two separate sub-brands within one brand, it is advisable to have two separate studies, rather than one. That is, instead of defining objects “Brand A Logo” and “Brand B Logo”, it may be better to separate the brands into different streams and have the same object labels for both (e.g., logo, brand cue, product and person). This will ensure that you code is reusable for studies of brands that have different numbers of sub-brands.

- **Lazy Manual Labelling:** Make sure to manually label all objects in a creative. For example, if there are three cars, label all of them, not just one. The manually labelled validation set is the ground truth against which a model’s performance is compared. If some objects are missed, you may have strange performance results that indicate that the model may be over-detecting objects.

- **Trying to be Exhaustive:** Avoid testing all open-source resources available, as this can be very time-consuming and not very fruitful. Choose two or three to test and instead spend more time on what you can do to improve their performance on your particular dataset. This could, for example, be done through hyperparameter tuning (e.g., testing different learning rates, batch sizes, confidence thresholds, etc.) or in the processing of the results (e.g., correcting any text labels inside logos or products).

- **Lack of Checkpoints:** Due to the many different data manipulation steps in this project, there are a lot of potential sources for errors. The key is to set up automatic checks at each stage to avoid a trickle down effect of avoidable errors. For example, removing false positives in face detection by only ‘accepting’ a detected face if a person was also detected in the creative will ensure that the feature time series that is used for MMM does not suddenly have more impressions for faces than for people. Similarly, when doing the feature engineering, employing a simple method of checking that there are no negative values, no missing data, and that the impressions and spend data is consistent across each sub-model will ensure that time is not wasted in the MMM stage from modelling with incorrect data. 
 



## Key Paths to Success
There are various components that can contribute to successfully executing this type of study, ranging from technical requirements to general strategies. Some of the key components are outlined below. 

### Integrated, Efficient Tools
Choosing the right tools can make or break a project of this complexity. Choose a platform which offers robust functionalities to help streamline and facilitate work. This study used Azure, but GCP is another great alternative. The key features that are required are:
- **Cloud storage:** Due to the volume of creatives included in this study, cloud storage was crucial. Particularly if extracting frames from videos, it is important to account for the significant volume of additional images that need to be stored. This project used Azure Storage. 
- **Labelling Software:** The labelling process is very manual and time-consuming. Having an intuitive software that can import creatives directly from the cloud storage saves a lot of time and effort and avoids unnecessary duplication of images. Furthermore, the software should be able to export the labels as a JSON file which can then later be converted to the required format (e.g., COCO for Detectron2). For this project, the Azure Machine Learning Studio Data Labelling functionality was used. 
- **External Computation Resources:** As the training, validation and final labelling of images are all computationally expensive processes, the use of external computation resources (clusters) is recommended. The configuration of the clusters can vary depending on the task at hand. For pre-processing and feature engineering, individual CPU-enabled single-node clusters are sufficient. On the other hand, for the training, validation, and labelling processes, it is recommended to use GPU-enabled clusters. While GPUs are a more expensive resources than CPUs, the efficiency gains may make up for the additional cost per hour. For this project, Databricks was used as it can connect to Azure storage, facilitates the use of clusters, supports various programming languages, and allows for collaboration on Notebooks.


### Contextual Knowledge
Having a strong understanding of the brand acts as a crucial foundation for every step of this project. It is not only required for making informed decisions regarding which objects should be detected but also vital for defining the features to be measured in the MMM. For example, knowing that products often appear in creatives alongside just a hand raises the question of whether this is the most effective use of a person, or if including the person’s face would be more effective; this in turn leads to the creation of features testing products alongside ‘face-less’ people vs. people with faces. Contextual knowledge can also be gained throughout the project by stopping to analyse the data. For example, checking the distributions of manually labelled objects can give an early indication of performance of custom-trained models (feasibility for successful training and detection) as well as the expected impact for regression models.

### Strong Base Models
Having strong base models is also key for success in this project. Since the target variable of the sub-models is determined by the contribution of the Meta variables in the base model, a poor base model will directly impact the performance of the sub-model. The quality of the base model will largely depend on the dataset used, so ensuring that sufficient, relevant, and good quality data relating to the baseline, market variations, and marketing activity is crucial. 

### Programmatic Sub-Modelling
Depending on the number of feature groups, KPIs and sub-brands included in the study, it may be infeasible to run the sub-models on a one-by-one basis. For context, this project had 156 sub-models (13 base models x 12 feature groups). For that reason, it is recommended to create a methodology that allows for the programmatic creation of sub-models. 

</div>

