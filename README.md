# Image Classifier Web App: League of Legends Edition

We all know that League of Legends is the best game on the planet because it is made by Riot Games.
As a gamer and a machine learning enthusiast, I couldn't help but think,
"Wouldn't it be amazing to have a machine learning model that could predict the champions just by analyzing their splash arts?"
These thoughts ignited my passion, and I embarked on a this journey to create the Image Classifier Web App.

## Purpose and Inspiration
The primary purpose of this project was to develop a sophisticated image classification system specifically tailored for League of Legends champions. 
I wanted to use the power of machine learning and deep learning to build a model that could accurately recognize and classify champions based on their unique splash arts. 
As a League of Legends player, I know the excitement and anticipation of seeing a champion's splash art and instantly knowing who it is. 
I aimed to replicate this experience through AI-powered predictions.

## Technologies and Training
To bring this ambitious project to life, I utilized cutting-edge technologies and techniques. The core technologies powering this project are:
- **React**: I chose React, a renowned JavaScript library, for building the frontend of the web application. React's component-based architecture and ease of use allowed me to create better user interface.
- **Flask**: For the backend, I opted for Flask, a lightweight and efficient web framework written in Python. Flask's simplicity and flexibility made it an ideal choice for handling image classification requests and responses.
- **TensorFlow**: The heart of this project lies in TensorFlow, an open-source machine learning framework. TensorFlow provided a rich set of tools and resources to train and deploy complex machine learning models.
- **Deep Learning Architecture**: To achieve high accuracy in image classification, I implemented a deep learning architecture. This architecture enabled the model to learn intricate patterns and features from the champion splash arts, leading to more precise predictions.
- **Extensive Dataset**: Training a robust image classifier requires a diverse and extensive dataset. To ensure accurate predictions for the vast array of League of Legends champions, I curated a dataset of over 1,600 images, covering 164 different champion classes.

## Training and Optimization
Training the machine learning model was a significant endeavor. I dedicated countless hours to fine-tune the model and optimize its performance. The training process spanned over 1000 epochs, allowing the model to learn from the dataset thoroughly. Through rigorous testing and iteration, I achieved an impressive 99.37% success rate in champion classification.

## Image Resolution Flexibility
I understood the importance of user flexibility when using the Image Classifier Web App. While the model is optimized for 224x224 pixel images, which yields the highest accuracy, I ensured that it can handle high-resolution images as well. This means that users can use both standard 224x224 images and high-quality League of Legends champion splash arts for predictions.

## How to Use the Web App
Using the Image Classifier Web App is incredibly straightforward. You can access it through your web browser and upload an image of a League of Legends champion's splash art. The model will process the image and provide you with the champion's name as the prediction.

## Contribution and Enhancements
I am passionate about continuous improvement, and I welcome contributions from the community. Whether you have ideas for new features or encounter any issues, feel free to create issues or submit pull requests.

## Note
As impressive as the model is, it's essential to remember that no classification system is infallible. Factors such as lighting conditions, image quality, and subject matter can impact predictions. For the best results, I recommend using images of the standard 224x224 dimensions, although the model remains capable of handling high-resolution images.

## Disclaimer
Image Classifier was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games.  Riot Games does not endorse or sponsor this project.
