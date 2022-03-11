---
title: Power BI - Improve your developing process by using multiple environments
author: Samuel Cordano
author_title:
author_url: mailto:samuel.cordano@ekimetrics.com
header_image_url: "img/blog/supply_warehouse.png"
tags: [Demand Forecasting, Supply Chain, LightGBM, Streamlit]
draft: true
description: "Learn in this article how we industrialized a solution for warehouse demand forecasting to help Operations managers better allocate resources for more than 20.000 referenced products"
keywords:
    - Data Science
    - EkiLab
    - Ekimetrics
    - Eki.Lab
    - Eki
    - Machine Learning
    - Artificial Intelligence
    - Supply Chain
    - Streamlit
    - Demand Forecasting
    - LightGBM
    - Data Science for business
---

<!--truncate-->

When building a piece of software, you don’t want your users to see every messy part of your application creation process. In order to make sure you control what people see and when they have access to it, development teams use environments to create “stages” of the app which they consider good for releasing.

Each environment has its own unique purpose. There are different standards of environments which are used in the industry, although almost every process starts at the ‘development’ stage and ends with ‘production’. Here is a typical set of environments used: 

- __Development environment__ : where data scientist/data engineers/software engineers actually develop the product. The end user doesn’t have access to this environment which allows developers to try new features freely. 

- __QA environment / Testing environment__ : once a product is sufficiently mature to be tested, it is deployed to a new environment in order for testers to work on a stable version, while allowing developers to continue working in the development environment at the same time. The end user doesn’t have access to this environment

- __Production environment__ : where the product will be deployed after testing and made accessible to the end client. Every features should work when the product reaches this stage.


![](img/datalake_part_1/pipeline_separation_full.png)


Furthermore, each of the environments should have its own database because in the same way that product evolve through development, databases will also evolve: tables may be modified, added or deleted. Thus, the the actual development process actually looks like this:


![](img/datalake_part_1/pipeline_separation_full.png)

Now that you know why you should use different environments when developing products, this article explains how to do that in Power BI! 


:::note  
In Power BI, the product you are developing is a Report and the environments are Workspaces
:::

:::note Disclaimer  
- This guide supposes you have already developed a Power BI report using Power BI Desktop and published this report to a Power BI Workspace, accessible through the Power BI Web Portal. 
- These assumptions will be stated again at the beginning of each Part, in Step 0 - (Baseline).
:::


## In Power BI Desktop, make your data sources dynamic

### Step 0 - (Baseline) Have a Power BI report connected to hard-coded data sources


As explained in the disclaimer, you should already have a report connected to data sources. Check out this documentation for more information about data sources in Power BI. 

A typical report would have several tables in the pane Fields: 


![](img/datalake_part_1/pipeline_separation_full.png)

As a little foreshadowing and making sure we are on the same page, open the Power Query editor (by clicking Home (Top Ribbon) → Transform Data → Transform Data; then Advanced Editor) for one of your tables, and notice that all your data sourcing information is hard-coded.

![](img/datalake_part_1/pipeline_separation_full.png)

![](img/datalake_part_1/pipeline_separation_full.png)


In the last picture, we have the following information hard-coded:

- The server is: dev-sql-01.database.windows.net

- The database is: dev-db-01

- The schema is: dev-rfd-crm

This hard-coded information is problematic as when we publish the report from one workspace to the next, the datasource will not change: we will always get our information from “dev”. What we need are parameters that change automatically as we change workspaces.

### Step 1- Creating Parameters inside your repor