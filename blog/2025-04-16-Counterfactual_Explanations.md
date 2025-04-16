---
slug: Counterfactual_Explanations
title: 'Counterfactual Explanations: Enhancing Machine Learning Transparency and Delivering Actionable Insights'
authors: [benjamin.wong, milan.bhan]



header_image_url: "img/blog/Counterfactual_header.jpg"
image: "img/blog/Counterfactual_header.jpg"
tags: [XAI, explainability, Machine Learning, Counterfactuals]
draft: false
description: "Discover what counterfactual explanations are and how illustrating changes that lead to different model outcomes enhances transparency, fairness, and actionable decision-making in machine learning."

keywords:
    - XAI
    - Explainability
    - Interpretability
    - Machine learning
    - Data science
    - Deep learning
    - Innovation
    - Transparency
    - AI
    - Model optimisation
    - Fairness, 
    - Actionability
    - Code
    
---
<!-- import useBaseUrl from "@docusaurus/useBaseUrl";

<link rel="stylesheet" href="{useBaseUrl('katex/katex.min.css')}" />
 -->
<!--truncate-->

<div align="justify"> 

Counterfactual explanations are transforming how we interpret machine learning models by answering critical 'what-if' questions. Instead of simply revealing why a model made a particular decision, counterfactuals show how to change the outcome, bridging the gap between algorithmic decisions and human understanding.  
In this article, we explore what counterfactuals explanations are, why they matter, how they can be generated, and their future role in explainable AI (XAI).

# What is a Counterfactual Explanation in Machine Learning?

Counterfactual explanations (or simply counterfactuals) describe how modifying specific input features could lead to a different model outcome. They provide minimal, actionable changes that would flip a prediction. They can be generated for both classification and regression problems. In the literature, the majority of studies have focused on classification problems, where counterfactuals suggest feature modifications to change a categorical outcome. Regression-based counterfactuals are now gaining more attention while facing specific issues related to continuous variable outcomes.

Examples of Counterfactuals:

- **Classification Example (Loan Approval)**: If a model predicts that a loan application is denied, a counterfactual might suggest that increasing the applicant’s income by $10,000 or reducing their existing debt by $5,000 could change the outcome to approved.

- **Regression Example (House Price Prediction)**: If a model estimates a house's value at $300,000, a counterfactual might suggest that increasing the lot size by 500 square feet or adding an extra bedroom could raise the predicted price to $350,000.

Unlike traditional interpretability techniques which highlight which features most influence a prediction, counterfactuals focus on how to change the outcome. Feature importance methods can be categorized into global and local approaches: global feature importance (e.g., Gini index) assesses the overall impact of each feature on the model across all predictions, while local feature importance (e.g., SHAP) explains the contribution of features to a specific instance’s prediction. Counterfactuals, in contrast, provide instance-specific insights by suggesting changes needed to obtain a different outcome.

For example:

- Global feature importance tells us that income and credit score are the most important factors in a loan decision in general, not for a specific instance.
- SHAP quantifies how much each feature contributed to the final prediction.
- Counterfactuals go a step further by suggesting precise changes, such as increasing income by $10,000 to get the loan approved.

This focus on actionability makes counterfactual explanations particularly valuable when users need clear next steps, rather than just a breakdown of feature contributions.


## Why Counterfactuals Matter in Machine Learning

Counterfactual explanations can enhance AI transparency and fairness by addressing several key challenges:

### 1. Actionable Insights

As mentioned, unlike traditional explainability methods that only highlight influential features, counterfactuals provide clear, practical steps to achieve a desired outcome. Instead of just showing that income is important for loan approval, counterfactuals tell users exactly how much income needs to increase for approval.

### 2. Trust and Compliance

Link: https://dl.acm.org/doi/10.1145/3593013.3594069

As AI systems play a growing role in decision-making, regulations require that automated decisions be explainable and fair. Counterfactuals help organizations justify decisions by demonstrating the exact changes that would have led to a different outcome.

This improves:
- **Transparency** – Users understand why they received a particular decision.
- **Fairness** – Decision-making processes become more accountable.
- **Trust** – People are more likely to accept AI-driven outcomes if they can see how decisions are made.

### 3. Model Debugging and Bias Detection

Counterfactuals also help developers detect biases in machine learning models.
For example, if certain demographic groups need unrealistically high increases in income to get loan approvals, this may indicate a hidden bias in the model. By analyzing these patterns, developers can:

- Identify fairness issues
- Refine the model to reduce bias
- Improve model reliability and robustness

By providing actionable recommendations, ensuring regulatory compliance, and improving model fairness, counterfactual explanations are essential for building trustworthy AI systems.


## Generating Counterfactuals: DiCE and MACE

Counterfactual generation is a key step in understanding and improving machine learning models. Two widely used methods for generating counterfactuals are DiCE (Diverse Counterfactual Explanations) and MACE (Model-Agnostic Counterfactual Explanations with Constraints).

Links: 
- https://arxiv.org/pdf/1905.07697
- https://arxiv.org/pdf/2205.15540


### 1. DiCE (Diverse Counterfactual Explanations)

DiCE, developed by Microsoft Research, is a powerful tool for generating diverse counterfactual explanations in machine learning. Unlike traditional counterfactual methods that focus on finding a single optimal explanation, DiCE emphasizes the importance of providing multiple, diverse alternatives.

**Key Features of DiCE:**

1.	Model-Agnostic Approach: DiCE can work with any black-box model, making it versatile across different machine learning architectures.
2.	Diversity in Explanations: It generates a set of counterfactuals that are meaningfully different from each other, offering a broader perspective on possible changes.
3.	Customizable Constraints: Users can specify feature ranges and immutability, ensuring the generated counterfactuals are realistic and actionable.
4.	Multiple Generation Methods: DiCE employs various techniques including genetic algorithms, random sampling, and KD-tree search to efficiently explore the feature space.
5.	Scalability: It's designed to handle large datasets and complex models efficiently.


DiCE solves a key limitation of single-counterfactual methods by offering multiple alternative solutions, which is especially useful when there are different ways to achieve the same outcome. This variety not only helps users explore more actionable options but also provides a clearer picture of the model’s decision boundaries.
That said, while DiCE is a major step forward in explainable AI, it isn’t perfect without the right constraints, it can sometimes suggest unrealistic changes. That’s why domain expertise is essential for setting meaningful boundaries and making sense of the results.

To better understand how DiCE works in practice, here is an example in Python demonstrating how to generate counterfactual explanations using a trained machine learning model:

```python
import dice_ml 
from dice_ml import Dice

# Initialize a DiCE explainer with dataset details and model constraints
d = dice_ml.Data(dataframe=X_train, 
                 continuous_features=numerical_features, 
                 outcome_name=target,
                 permitted_range=permitted_ranges)

# Wrap the trained model for use with DiCE
m = dice_ml.Model(model=model, backend="sklearn")

# Create a DiCE explainer instance
exp = Dice(d, m)

# Select a single test instance (excluding the target column)
query_instance = X_test.drop(columns=[target]).iloc[0:1]

# Generate counterfactual explanations for the selected instance
counterfactuals = exp.generate_counterfactuals(query_instance, 
                                               total_CFs=5,  # Number of counterfactual examples to generate
                                               desired_class="opposite",  # Flip the predicted class
                                               features_to_vary=actionable_features)  # Features allowed to change

# Display counterfactuals, showing only feature differences
counterfactuals.visualize_as_dataframe(show_only_changes=True)
```
<br/>

### 2. MACE (Model-Agnostic Counterfactual Explanations with Constraints)

MACE (Model-Agnostic Counterfactual Explanations) is an advanced approach to generating counterfactual explanations in machine learning, with a primary focus on ensuring the realism and feasibility of the generated explanations.

**Key features of MACE**:

1.	Constraint Integration: MACE incorporates domain-specific constraints directly into the counterfactual generation process. This ensures that all suggested changes are not only mathematically valid but also practically feasible and logically consistent.
2.	Model Agnosticism: Like other counterfactual methods, MACE can work with any type of machine learning model, making it versatile across different applications and model architectures.
3.	Plausibility Enforcement: MACE prevents the generation of impossible or unrealistic counterfactuals. For instance, it won't suggest changes like reducing age or altering immutable characteristics.
4.	Customizable Rules: Users can define specific constraints tailored to their domain, allowing for fine-grained control over what types of changes are considered acceptable.
5.	Handling Complex Data Types: MACE is designed to work effectively with both numerical and categorical features, addressing the challenges posed by mixed data types in real-world datasets.

MACE stands out for its ability to generate realistic and actionable explanations. However, this realism comes at a cost. MACE is more computationally intensive than simpler counterfactual methods because it solves complex optimization problems with constraints.
Despite this, MACE has proven highly valuable in situations where explanation credibility and regulatory compliance matter most.
That said, the quality of MACE’s explanations still depends on well-defined constraints and high-quality data. Without these, even the most advanced counterfactual method can produce misleading or unhelpful results.

To better understand how MACE works in practice, here is an example in Python demonstrating how to generate counterfactual explanations using a trained machine learning model:

```python
from omnixai.data.tabular import Tabular
from omnixai.preprocessing.tabular import TabularTransform
from omnixai.explainers.tabular import MACEExplainer

# Load the dataset into an OmnixAI Tabular object
tabular_data = Tabular(df,
    feature_columns=feature_names,  # List of feature column names
    categorical_columns=categorical_features,  # Specify categorical features
    target_column=target  # Specify the target variable
)

# Fit a tabular transformer for preprocessing (e.g., encoding, scaling)
transformer = TabularTransform().fit(tabular_data)
class_names = transformer.class_names  # Get class labels from the transformer

# Define a prediction function that applies the model after transformation
predict_function = lambda z: model.predict_proba(transformer.transform(z))

# Initialize the MACE counterfactual explainer
maceexplainer = MACEExplainer(
    training_data=tabular_data,  # Provide the training dataset
    predict_function=predict_function,  # Use the defined prediction function
    ignored_features=features_to_ignore  # Specify features that should not be modified
)

# Select test instances (excluding the target column) for explanation
test_instances = tabular_data.remove_target_column()[0:5]

# Generate counterfactual explanations for the selected test instances
explanations = maceexplainer.explain(test_instances)

# Visualize the counterfactual explanation for the first test instance
explanations.ipython_plot(index=0, class_names=class_names)
```


### 3. Example of MACE Application to the Give Me Some Credit Dataset

[GitHub - DrIanGregory/Kaggle-GiveMeSomeCredit: Kaggle DataSet - Give Me Some Credit](https://github.com/DrIanGregory/Kaggle-GiveMeSomeCredit)

To demonstrate how MACE can be used in a real-world setting, we applied it to the well-known Give Me Some Credit dataset from Kaggle. This dataset was originally used in a 2011 competition to predict the likelihood of a borrower becoming seriously delinquent (90+ days late on a payment) within two years.


### Dataset Overview

The dataset includes over 250,000 anonymized credit records, split into 150,000 training examples and 101,503 test instances. The target variable is SeriousDlqin2yrs (1 = default, 0 = no default), and each record contains 10 explanatory variables that capture an individual’s credit behavior, income, and financial obligations. Key features include:

- RevolvingUtilizationOfUnsecuredLines: Utilization ratio of unsecured lines (e.g., credit cards)
- DebtRatio: Proportion of debt relative to income
- MonthlyIncome: Self-reported monthly income
- NumberOfOpenCreditLinesAndLoans: Total number of credit lines and loans
- NumberOfTimes90DaysLate: Frequency of severe delinquency


### Model Training

For this case study, we used XGBoost, a gradient boosting algorithm known for its ability to handle structured data and capture nonlinear relationships. XGBoost was trained on the preprocessed training data to predict the likelihood of loan default (SeriousDlqin2yrs).

After training, we applied MACE to generate counterfactual explanations for individuals predicted as high risk (i.e., default = 1). The goal was to understand what minimal and realistic changes could flip their classification to non-default.

</div>

<div align = "center">

  ![screenshot-app ](img/Counter_Factual/Table.png)
</div>

<div align="justify"> 


Two counterfactuals were generated for the individual originally predicted to default (label = 1). The original instance had a DebtRatio of 0.803 and a MonthlyIncome of 9120.0. The first counterfactual (CF 1) keeps the DebtRatio constant at 0.803 but increases the MonthlyIncome to 9422.625, resulting in a predicted label of 0 (non-default). The second counterfactual (CF 2) achieves the same label flip by simultaneously lowering the DebtRatio to 0.7993 and raising the MonthlyIncome to 9422.625. This demonstrates that modest, realistic adjustments to financial metrics can alter risk classification, highlighting specific and actionable paths to improve creditworthiness.

### The Future of Counterfactuals and Explainable AI

Counterfactual explanations are becoming an increasingly important tool for AI transparency and decision-making. As the field evolves, several key trends are shaping their future.

One major shift is the integration of causal reasoning into counterfactual methods. Instead of simply answering "what-if" questions, future approaches will identify real cause-and-effect relationships, helping distinguish meaningful factors from random correlations. This will make counterfactual explanations more reliable and actionable.

Another important development is the move toward automated constraints. Rather than relying on manually defined rules, new techniques will learn realistic constraints directly from data. This will ensure that counterfactual suggestions remain practical and achievable without requiring extensive human oversight.

Despite these advancements, challenges remain especially in scaling counterfactual methods for complex models like transformers and ensuring they work effectively across different languages and cultures.

To address these issues, we have been developing a counterfactual generator that prioritizes plausibility and proximity. By ensuring that suggested changes are both realistic and within the distribution, our approach aims to provide users with more trustworthy insights into AI-driven decisions.

Counterfactuals are playing a key role in shifting AI from an opaque "black box" to a transparent, user-friendly system. By making machine learning more explainable, accountable, and actionable, they will help shape the future of ethical and trustworthy AI.

</div>