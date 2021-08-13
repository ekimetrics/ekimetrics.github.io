---
slug: few-shot-learnings
title: How to build a deep learning model with little computing power ?    
author: Bertrand DE VERICOURT
author_title:
author_url: mailto:bertrand.devericourt@ekimetrics.com
header_image_url: https://images.pexels.com/photos/1251026/pexels-photo-1251026.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
tags: [Few shot learning, Deep learning, Computer Vision] 
description: Discover how we manage to build performant build a deep learning model with little computing power
---
<!--truncate-->
 

## 1/ Why deep learning has flourished over the last decade

In a booming technological environment that sees autonomous vehicles or smart CCTV systems built, where facial recognition has become both a marketing opportunity and an ethical concern, computer imagery recognition capabilities (whether it be objects or motion detection/recognition, etc.) face a strong and increasingly picky demand. This branch of Artificial Intelligence is called Computer Vision.  

The rise of image processing and analysis began in the 60’s, when computers reached enough processing power to deal with images, and revolutionary techniques such as Fast Fourier Transform (aka FFT) were created. However, the dawn of the new millennium brought a new revolution in image processing through the use of neural networks. In 1998, Yann LeCun imagined a neural network based on sequences of convolutions to develop an algorithm which would automatically classify handwritten numbers. Many other advances and discoveries followed and contributed to generalize computer vision techniques, propelled by technological advances and increasingly powerful computers. In particular, the ImageNet Classification with Deep Convolutional Neural Networks research paper* significantly popularised neural networks.  

Now, what is the point of all that? What is so important and different with these neural networks? 
Composed of at least one hidden layer and a non-linear function such as ReLU, neural networks are universal approximators. Thus, any continuous function can be approximated by this type of model. Tools developed over the last few years can subsequently be used to answer questions such as:
- How to drive a car without a driver?
- How to sort out garbage with a robot?
- How to identify beauty products adapted to my skin from a photograph?
In the next paragraphs we will present similar tools, created to answer the following questions:
- How to identify and categorise images that refer to a specific type of products on social networks?

**And more importantly :**  
- How can I do these tasks on a common laptop?
- How can I make sure the result is usable and interpretable?

## 2/ Parameters, Obstacles & Methodology

Neural networks and their spectacular applications represent an attractive phenomenon in many ways, but it would be pointless to use one if you don't know how to optimise it, or how to fit it to training data without over-fitting.

### 2.1/ Optimisation!

First, you need to determine the hyper-parameters, often by testing them against a search grid. These can test layers, their order, the error metric, the batch size and even regularisation parameters (weight decay and dropout being the most common ones).  
Once these parameters are set, network training is carried out by a gradient descent. The parameters optimisation is performed by back-propagating the gradient: the total value of the network gradient is calculated by multiplying the gradients from the intermediate layers.

### 2.2/ Obstacles to tackle: volumetric & biases, computing cost & algorithm usability 

Beyond the choice of algorithm and its parametrisation, the first job of the data scientist - and a time-consuming task - is to build a solid database.  
- First, a database should have both volume and diversity: neural networks structurally require large quantities of data; furthermore, greater volume and diversity of data allow for better generalisations by the model, thus limiting risks of over-fitting. However, image labelling can take a lot of time…  
Solution :  
-  If possible, use labelled training sets available for free on the internet, such as ImageNet, COCO or OpenImages.
- Once the database is built, enrich it through data augmentation: images can be duplicated and transformed (by rotation, homothety, cropping, play on colours, etc.) and thus provide more volume, more diversity of shapes, positions and colours. This favours the model's power of generalisation (don’t simply duplicate images!).
- Data must also be representative and avoid biases. Public databases such as ImageNet and COCO were found to be biased in terms of gender and ethnicity: cooking and housework images were associated with women, and sport images with men. Algorithms not only repeat these biases, they tend to amplify them. For example, you can see here the performance of an IBM classification algorithm, broken down by colour and gender: it decreases if the person is black, or if it’s a woman.

<p align="center">
  <img src="../static/img/article_few_shot_learning/image1.png" alt="Sublime's custom image"/>
</p> 

The geographical origin of the images’ source can also induce bias: most images from OpenImages and ImageNet originate from the USA (32 to 45%), while China and India account for only 1% and 2% each.

<p align="center">
  <img src="../static/img/article_few_shot_learning/image2.png" alt="Sublime's custom image"/>
</p> 

**Solution:**
-  First, identify existing biases by studying performances by category. If the cause of the bias truly comes from the data, several strategies can be deployed: finding a complementary data source, increasing data augmentation on the minor category, giving it more weight in the model, etc.

- There is also a trade-off between performance on the one hand, and computing time, memory and computing power on the other hand. Some of the most powerful models, such as VGGs, are also among the most complex in terms of parameters and operations. On the other hand, lighter networks such as GoogLeNet (created by Yann LeCun) are often less accurate. The more parameters, the greater degrees of autonomy a network has to learn to recognise what it is trained for. Here is a comparison of models by complexity Vs performance.

<p align="center">
  <img src="../static/img/article_few_shot_learning/image3.png" alt="Sublime's custom image"/>
</p> 

**Solutions:**
- If you don't have an army of servers with powerful graphic cards, but still want to use models that are theoretically heavy in terms of calculations and time consumption, you need to know this key concept: Transfer learning. Rather than starting from scratch, it is common to use pre-trained networks by inserting a fully connected layer at the end. It will adapt the representations of the root model to solve its own classification problem. One can also seek to re-optimise all or part of their parameters via back-propagation (fine tuning) - especially on deeper layers, as they are more dedicated to the initial problem than the 1st layers.
- Another solution to obtain good performance despite low computing power is to adapt the network architecture to the problem. The idea is to find the combination of elements that will best respond to the given problem, thus creating a specific architecture. It will be less generalisable to other cases, but also less demanding in terms of computation.

Last but not least: a major obstacle to overcome will be the usability of the model. Just ask yourself: is this model really usable in the real world ? Can I share its outcomes with management ? In particular, this would mean that the model must be interpretable. The following section gives a solution to the studied case.

### 2.3/ Three key steps of Methodology

We will present below an example from a real mission at Ekimetrics: the classification of cosmetic products images.  

It was approached via a methodology in three steps:
- Preparation consisted in collecting, sorting and labelling images
- Modelling regrouped the data processing phase, and the selection and training of the algorithm
- Assessment aimed at measuring performances, adapting parameters, and testing the model in real conditions

## 3/ Let’s see how Deep Learning can be applied to a real business case - classifying images

The case presented below is a real-life example from Ekimetrics, pointing out two important things:
- Most sophisticated algorithms are pointless if you can't use them
- Technical prowess is nuts if you can’t use it in the real world

### 3.1/ The business case

- Answering the question: what do people share about my types of products on social media ?  
On social networks, knowing what is most shared is a way to know which publications are the most impactful, and why. For this purpose, you first need to recognize and get images corresponding to the category you're interested in!

- Translating a business issue into a technical problem.  
In our case, the aim was to classify social network images into 4 categories: Haircare, Skincare, Make-up and Fragrance.  
It should be noted that one of the most interesting results came from our work on interpretability…

### 3.2/ What methodology to do this on a basic laptop ?

Here was our “recipe” to conduct this modelization:  

- We started with a constraint: a low computing power

No GPU on this project, but a simple laptop with little memory.

- Solution: in two words: Transfer Learning.  
We kickstarted the project with a pre-trained ResNet (aka "Residual Neural Network"). This network was imagined by Microsoft researchers, and offers a great tradeoff between the number of parameters (not too high) and the quality of prediction on the COCO database. ResNet is known since its release in 2015 for reducing a phenomenon caused by the large size of deep networks: the infamous vanishing gradient. In short: if the accumulation of layers enables complexity “understandability”, the error gradient, multiplied from one layer to another, can vanish and thus destroy any chance of improving the model. The advantage of ResNet on this point is that it deals with residuals (you can think here of gradient boosting).

**Preparation: data collection and selection, and calibration among categories**  
- Scraping of Google Images to create a pre-labelled database
- Deletion of non-representative data
- Checking that all 10 thousand images were evenly distributed among the four categories

**Modelling: final data processing & modelization**  
- Preprocessing to standardise input images with PyTorch: cropping and rotating images, standardising, etc.
- Implementation of ResNet model, whose 1000 neurons fully connected last layer was replaced by a specific layer of 4 neurons (1 per class to predict).
- Training: the previous layers were frozen, and the model was trained on the new data.

### 3.3/ Results: 80% of average accuracy, with a model making decisions the client can understand

**Evaluation & Performances:**  
Once the network trained, it was necessary to test its performance on a test set (1000 images). Results are shown in the heatmap below:

<p align="center">
  <img src="../static/img/article_few_shot_learning/image4.png" alt="Sublime's custom image"/>
</p> 

Average accuracy is close to 80%. The network stands out on Fragrance and Make-up categories with 93% and 85% respectively. However, it has more difficulty to recognise the two other categories, often mistaken with one another.

**Usability & Interpretability:** 
As seen at the beginning of this article, categorising images with NN consists in "activating" (or overweighting) parts of the images that would be characteristic of a class or another. In the case of Fragrance, for instance, the network locates the perfume bottle and associates the image to the relevant class.  
The Class Activation Map (CAM) is used to look through the eyes of the network. Both powerful and simple, it represents the original image covered with a heat map stressing areas that were more activated during the last convolution.  

**Below, CAM on a Skincare image:**

<p align="center">
  <img src="../static/img/article_few_shot_learning/image5.png" alt="Sublime's custom image"/>
</p> 



- Thanks to this method, we can better understand what characterises a class (perfume bottles for Fragrance, a shampoo brand for Haircare, faces for Skincare, etc.).
- But it also allows us to understand the model’s mistakes, typically images that could belong to Haircare or Skincare categories. This can be done by visualising the CAM of the class with the 2nd highest probability for a given image.

**Below, CAM on a Fragrance image:**

<p align="center">
  <img src="../static/img/article_few_shot_learning/image6.png" alt="Sublime's custom image"/>
</p> 

Below, CAM on a Haircare image:

<p align="center">
  <img src="../static/img/article_few_shot_learning/image6.png" alt="Sublime's custom image"/>
</p> 

## 4/ Conclusion

If the initial objectives were achieved, results can be improved - by increasing the volume of training data for example.


The major constraints for NN remain the need for high computing power & interpretability - constraints that have found concrete answers here with Transfer Learning and CAM.

Here is a recap of our approach to answer the original title of this article, "How to optimise neural networks on images when you have little computing power?":
- Understand your problem and your data
- Make researches on state of the art models on this problem
- Give time to data processing & engineering
- Use transfer learning if possible
- Adapt your architecture to the problem
- Have a good understanding of hyperparameters
- and be sure to make your project UUU (Useful, Usable and Used) - and interpretable

In any case, you have to know how to bridge the gap between state of the art and your own problem (which is the most important!), and adapt... The good thing is that these techniques can then be applied to an incredible variety of sectors (in this study, for example, we also worked on medical applications...).

* Krizhevsky, Sutskever and Hinton, 2012, https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf
