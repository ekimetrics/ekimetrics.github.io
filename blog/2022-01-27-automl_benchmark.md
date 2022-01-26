---
title: Which AutoML platform to choose to start your Data Science project?
author: Quentin Tremouille
author_title:
author_url: mailto:quentin.tremouille@ekimetrics.com
header_image_url: "img/blog/Nyhavn_2.jpg"
tags: [AutoML, Benchmark, Automatic Machine Learning]
draft: false
description: "How do Automatic Machine Learning solutions work? What are the most popular AutoML solutions out there, and what do you need to know about them to make the right choice for your use case? Find answers to these questions and many others in this article."
keywords:
    - Data Science
    - EkiLab
    - Ekimetrics
    - Eki.Lab
    - Eki
    - Machine Learning
    - Artificial Intelligence
    - AutoML
    - Automatic Machine Learning
    - Cloud
    - Titanic
    - House Prices
    - Data Science for business
---

<!--truncate-->


Applying traditional Machine Learning methods to real-word business problems can be time-consuming, resource-intensive and expensive. With Automated Machine Learning (Auto ML) however, it can take days at most for business professionals & Data Scientists alike to develop and compare dozens of models, find insights and solve business problems quickly. But what is AutoML, how does it work and what are the most popular AutoML solutions out there? In this article, we will introduce the field of Automated Machine Learning by exploring some popular AutoML frameworks and trying to answer those questions around how to make the right choice for your use case.


# What is AutoML and why it is interesting?

## Definition


Sebastian Raschka, a well regarded American statistics professor, states: ‘’Computer programming is about automation, and Machine Learning is all about automating automation’’. If that’s true then we can say that Automated Machine Learning is the automation of automating automation..! AutoML is a new optimization technique which aims at automating some of the core - but highly iterative - parts of the traditional modelling process in ML, in particular feature selection and model selection (including hyperparameter tuning and stacking). Let’s take the example of a Decision Tree Algorithm. This algorithm has many hyperparameters (leaf, depth, split etc.) and browsing through all those hyperparameters can take days. An AutoML algorithm can intelligently explore all the possible parameters in order to find the best possible ML algorithm solving a given task. Some advanced AutoML algorithms can even choose between different features, create new ones and try different data cleansing scenarios!



## How AutoML can help us?

![](img/automl/Steps_DS_automl.png)

There are many steps in a Machine Learning project, with Model Training typically being one of the most time consuming. A standard project will focus on a Business Problem and will pass through Data Collection, Cleaning and Processing before the training phase. Model Training can then be cumbersome as we have to select an appropriate model family and to fine tune many times differents hyperparameters before building the analysis and deploying the model. This process can take weeks or months, but it seems that several steps can be automated using optimization algorithms and that is the goal of auto ML.

 

In a sense, AutoML is seen as a way to increase productivity, to allow the Data Scientist to focus more on defining the problem and the analyses rather than the models finetuning, to help avoiding errors, and on top of that, to democratize Machine Learning so that everyone can leverage its power. Its integration within ML Engineering environment allows to streamline pipeline and integrate specific training jobs, that allows to parametrize a model search completely from a simple configuration file.


## Overview of the main AutoML frameworks in the market

For this article, we have selected 7 well known AutoML frameworks, but many more exist in the market. Below is an overview of some of the types of Data Science problems these AutoML solutions can address. Among them two are open source: AutoKeras & H2o and the others are not: with DataRobot, Dataiku, Azure, GCP, and AWS SageMaker. (2 other open-source solutions AutoKeras and AutoGluon were studied, but these frameworks are not available on Windows.)

![](img/automl/automl_platforms.png)

Many of the AutoML solutions address different types of Data Science problems such as Sentiment Analysis or Computer Vision, however what is going to interest us for the rest of is article are the Classification and Regression ML problems.


# Exploring the capabilities of several AutoML solutions

## Our methodology (Classification/Regression, datasets Kaggle)

The purpose here is to bring some knowledge in the field of **Automated Machine Learning** by **exploring some popular AutoML frameworks**. In order to establish a performance benchmark, we decided to test those frameworks on **common ML topics** like **Regression** and **Classification**. The idea is also to share our personal experience (and difficulties encountered) with those tools so that everyone can have an overview of each one these AutoML solutions.

These packages were benchmarked on two classical datasets available on Kaggle. We chose the **Titanic Challenge** ([Titanic - Machine Learning from Disaster | Kaggle](https://www.kaggle.com/c/titanic/overview)) for the Classification problem and the **House Prices Challenge** ([House Prices - Advanced Regression Techniques | Kaggle](https://www.kaggle.com/c/house-prices-advanced-regression-techniques/rules)) for the Regression problem. For each framework, we submitted predictions on the test set on Kaggle so that we can compare the results to the general leaderboard. What is interesting with this approach is that we were able to compare performance not only between each AutoML solution but also with individual performance.

![](img/automl/methodology_automl.png)


## Our results

### Classification Problem - Titanic Challenge

![](img/automl/titanic_challenge_details.png)

The Titanic Challenge is one of the most famous on Kaggle with more than 30,000 challengers. The objective is to have a model which will predict if a Titanic passenger survives or not on a small data set with 9 features and around 900 rows in the training set. The metric used for this challenge is the accuracy and the leaderboard we have downloaded from Kaggle is provided below.

![](img/automl/benchmark_titanic_challenge.png)

Each point represents a challenger with the performance of all tested frameworks noted, with ranking & accuracy plotted on the x and y axis. We found that Azure has the best accuracy followed by H2O and that the accuracy for all frameworks ranges within 73% - 80%.


### Regression Problem - House Prices Challenge

![](img/automl/house_price_challenge_details.png)

For the House Prices Challenge, the goal is to predict the final price of residential homes in the United States. This time the metric is the root mean squared error, which is a metric that tells us the average distance between the predicted values from the model and the actual values in the dataset. We have around 8000 challengers (less challengers than the Titanic Challenge) and the dataset here is bigger with more than 250 features and around 1400 rows in the training set.

![](img/automl/benchmark_houseprice_challenge.png)

We can see that all frameworks did better than the baseline RMSE. Each of the tested models fall between 0.24 - 0.12 in terms of the RSME and H2O again performs the best among other tested frameworks.



# Conclusion

## Which AutoML solutions to choose?

In conclusion, which AutoML to choose? When making our decision, the framework performance is important, but not all frameworks were in fact easy to use. Conversely, we spent a lot of time on some frameworks, because some of them were not as intuitive as expected.

User friendliness must also therefore be a major criterion to consider when you are wondering which AutoML to use. That’s why, in order to consider the frameworks performance on both the Kaggle challenge but also the user friendliness of each solution (if it is easy to install it, to get familiar with the tool, to set up the experiment without errors), we built two further metrics to evaluate each AutoML framework and to compare them.

- On the x-axis: we give the ease of use for each AutoML framework from 1 to 10 (10 being the best)

- On the y-axis: we took the average ranking on the both Kaggle challenge (the closer to 0, the better)

![](img/automl/final_benchmark.png)

The metric 'ease of use' is somewhat subjective as it refers to our own personal experience. However, we would add that one of the goals of AutoML is to make Machine Learning accessible to everyone, so for someone with very little knowledge, it is interesting to see how accessible the differents tools are.

We found that:

- The cloud solutions are more difficult to master especially if you’ve never used cloud computing before. In fact, some time is needed to get familiar with all the different functionalities of cloud solutions like Azure, AWS or GCP as there are powerful and comprehensive tools.

- Dataiku and DataRobot are very easy to use and very visual, with many icons. These interfaces are very clear and simple.  If you want to use an extremely easy-to-use AutoML tool, which can perform automated machine learning very quickly, DataRobot and Dataiku seem to be good solutions.

- H2O works as a notebook so if you are familiar working on a Jupyter notebook for example, it can definitely be a good option and not too painful to use. H2O seems to be a very good choice in terms of performance and ease of use. Moreover, this framework has the advantage of being completely open source.


## Final thoughts, our key takeaways

This article tries to compare 7 majors AutoML frameworks. To do so, we introduced a methodology that considers the performance of each solution, but also their ease of use. What appears clearl is that AutoML can definitely be a good starting point to an ML project. In fact, for both the Classification and Regression problem, all the frameworks performed almost as well, even better sometimes than the baseline, just by using the AutoML functionality.

However, it is important to remember that automatically generated pipelines are still very basic and are not able to beat human experts yet. As we could see on the different benchmarks from Kaggle, Data Scientists still perform better. A Data Scientist analyzes the hidden information inside data, extracts useful correlations, gives useful insights about the business that has created data itself and all these tasks cannot be fully automated.


## References

To read more about AutoML:
[2019 | AutoML: A Survey of the State-of-the-Art | Xin He, et al.](https://arxiv.org/pdf/1908.00709.pdf) 

[2019 | Survey on Automated Machine Learning | Marc Zoeller, Marco F. Huber](https://arxiv.org/pdf/1904.12054.pdf) 

[2020 | Automated Machine Learning--a brief review at the end of the early years | Escalante, H. J. 2008.08516.pdf](https://arxiv.org/pdf/2008.08516.pdf)







The name [Sustainable Development Goals](https://sdgs.un.org/goals) (or SDGs) is commonly used to refer to the seventeen goals established by the member states of the United Nations which are gathered in the 2030 Agenda. 

![](img/Hackathon_Stories_1/sdgs.png)

The goal 7 - “Ensure access to reliable, sustainable and modern energy services at an affordable cost for all" - is a particularly important issue for the African continent, where 596 million people do not have access to electricity.
Most of these people live outside of urban centers, and therefore out of reach of the continent’s electricity grid. Some existing systems also struggle to supply enough energy to the homes and businesses that are on the grid. 


It is estimated that 592 million people in Africa are living without access to electricity. Most of these people live outside of urban centers and therefore out of reach of the continent’s electricity grid. Furthermore, the existing systems in many African countries even struggle to supply enough energy to the homes and businesses that are on the grid. 


Pay-as-you-go (PAYGo) solar technology has become Africa’s most promising approach to handling the continent’s growing energy problems. PAYGo users pay a small downpayment for a solar kit that provides up to eight hours of emission-free lighting every day, as well as enough energy to charge mobile phones and other devices. 



With PayGo solar, residents are able to reduce their energy spending by up to 50%. 
The objective of this challenge is to help predict the next six months of payments for different customers. This will allow PAYGo distributors to provide appropriate services and customer support, ensuring that they can continue to provide these important devices affordably and efficiently to the benefit of people all over Africa. 





## Why do we organize hackathons?

After a long period of COVID19 marked by an almost generalized working from home, we wanted to allow our teams to meet in real life with the coworkers they only saw in back-to-back Teams calls, and work together on an important cause.  

We love hackathons at Ekimetrics as they enable: 

- To federate teams;
- To make people that don't usually work together collaborate to drive innovation;
- To get some practical experience at tackling new problems far from our usual business topics.


That is why we organize two big hackathons every year and bi-monthly coding challenge sessions, some of which you can find in open source on our [hackathons homepage](https://ekimetrics.github.io/hacks/). 
For this event, we were lucky enough to be able to carry it out in our office while respecting all sanitary recommendations.


![](img/Hackathon_Stories_1/Team.png)



## How to organize a hackathon for your data teams?

Having organized a dozen hackathons internally and for our clients, and participated in many of them, we have consolidated our learnings into a set of best practices which we are happy to share with you to help you organize your own hackathon for your data teams:

- **Finding a platform** - There are also platforms integrating many public hackathons like [Kaggle](https://www.kaggle.com/) or [Zindi](https://zindi.africa/) mentioned above. This time, we chose to contribute to an existing hackathon - see section below about developing a hackathon platform. 

- **Choosing a meaningful topic** - Get involved in a project or a project that matters to you and your colleagues. It's important to work on a different topic than your daily work, but you need to have passion. 

- **Preparing the minimum starting pack** - Focus on the answer to the problem and spend time preparing notebooks and training tools to facilitate the handling of the subject by the teams and allow them to increase their skills on new technologies. Maybe also find a few data points and some interesting resources and references to.

- **Making balanced teams** - It is essential to balance the teams taking into account their varying levels of expertise and seniority;

- **Timing, Timing, Timing** - ⏱ It is necessary to pace the flow of the event, to allow participants to get into the topic and also to propose dedicated sessions allowing for discussions with the organizers and help throughout the event;

- **Setting the adequate duration** - 🏁 Ideally, hackathons last between 6 and 8 hours over an evening and part of the night in order to condense the challenge as much as possible while allowing the teams to take control of the issues at stake - to 2 days to have time to build a demo.

- **Proposing a baseline** - 💻 Depending on the topic it can be very useful to propose one or more examples of models allowing to build a base line from which to iterate;

- **Communication** - 💬 It is necessary to provide a common discussion thread for all participants as well as private channels by teams;

- **Fun** - 🍾 Of course pizzas, beers, and other refreshments to keep a good energy level and especially a nice atmosphere throughout the competition;

- **Letting the stage** - 😎 Finally, to showcase the night’s work, we always plan a pitch session the next day to present the projects in front of Ekimetrics partners and founders.

- **Rewards & gifts** - 🎁 A nice option is also to reserve gifts for the winners if you can decide of a winner 

![](img/Hackathon_Stories_1/Image32.png)


## Do you need a hackathon platform?
If it is not an open innovation hackathon, and depending on the topic and how the competition works, it can be interesting to have a main hackathon platform for participants to upload their results, test their solutions and compare with other teams. In this case there are multiple solutions to consider : 

- Using existing platform like [Zindi Africa](https://zindi.africa/), [Kaggle](https://www.kaggle.com/) or [Driven Data](https://www.drivendata.org/) 
- Build your platform adapted to your needs, in particular now you can easily use [Streamlit](https://streamlit.io/) to build your own. See some examples below;
- Not using a platform, avoid building a new one if you can focus on human relations, and the platform does not add value to the competition or the innovation 

For our different [hackathons](https://ekimetrics.github.io/hacks/), we developed the platforms we needed : 

##### Our main platform for custom hackathons where we can compute a score between teams
![](img/Hackathon_Stories_1/platform.png)

##### The platform we developed on Streamlit for our Data Science Escape Game
![](img/Hackathon_Stories_1/platform2.png)


## What is our hackathon philosophy at Ekimetrics?


Our goal is not to become "Kaggle masters" to reach the highest score.
We are always keen to put forward the double hat (technical and business) of Ekimetrics consultants in order to give meaning to the data.
That's why during this challenge we evaluate the teams around three dimensions:

- The performance of the models;

- The quality of the data analysis, the insights, and the quality of the visualizations;

- The overall strategy to tackle the problem, going back to the bigger picture - i.e. broader issuers such as sustainable development.

Offering different types of sub-challenges within the same hackathon created great opportunities for *all* Eki employees (including members of the marketing, HR or finance teams) to integrate within a team, which helped create links between people who do not always meet on a daily basis - let alone work together.


## If you want to do it yourself

This hackathon is open, do not hesitate to participate [here](https://zindi.africa/competitions/sfc-paygo-solar-credit-repayment-competition).

**Thanks to all the participants !**


