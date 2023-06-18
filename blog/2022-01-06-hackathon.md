---
title: Hackathon Stories - Ensuring access to affordable and clean energy
authors: [pierre.biousse]
header_image_url: "img/blog/Solar_2.jpg"
tags: [Hackathon, Teamwork, Sustainable AI]
draft: false
description: "Read this article to see how and why Ekimetrics organize hackathons to foster creativity, innovation and team work in our Data teams. Also learn important tips for organizing your own hackathons."
keywords:
    - Data Science
    - EkiLab
    - Ekimetrics
    - Eki.Lab
    - Eki
    - Machine Learning
    - Artificial Intelligence
    - Hackathon
    - Teamwork
    - Sustainability
    - Sustainable AI
    - Data Science for business
---

<!--truncate-->


At Ekimetrics, we organize internal hackathons several times a year to continue to improve our data science skills, get people working together and develop new solutions to difficult problems.

In July 2021, we organized a new hackathon on the issue of access to clean energy for African populations, inspired by a competition organized by [Zindi](https://zindi.africa/competitions) and open to everyone (you can participate at this [link](https://zindi.africa/competitions/sfc-paygo-solar-credit-repayment-competition)).

In this article, we wanted to come back on the reasons why we organize hackathons, our tips for organizing them in your data teams, some insights on that particular competition and some code snippets behind the most interesting achievements of the participants.


## Ensuring access to affordable and clean energy

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


