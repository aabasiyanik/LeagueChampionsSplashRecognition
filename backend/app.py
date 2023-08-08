from flask import Flask, render_template, request
from keras.models import load_model
from PIL import Image, ImageOps
import numpy as np
import os

app = Flask(__name__)

# Set the template folder path relative to the backend directory
template_folder = os.path.join(os.path.dirname(__file__), '..', 'templates')
app = Flask(__name__, template_folder=template_folder, static_url_path='')

# Load the model and labels
model = load_model("model\\keras_model.h5", compile=False)
class_names = open("model\\labels.txt", "r").readlines()

@app.route("/")
def index():
    return render_template("index.html")
@app.route("/start_over", methods=["GET"])
def start_over():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    if "image" not in request.files:
        return "No image uploaded", 400

    image = request.files["image"]
    if image.filename == "":
        return "No image selected", 400
    # Load and preprocess the uploaded image
    image = Image.open(request.files["image"]).convert("RGB")
    size = (224, 224)
    image = ImageOps.fit(image, size, Image.Resampling.LANCZOS)
    image_array = np.asarray(image)
    normalized_image_array = (image_array.astype(np.float32) / 127.5) - 1
    data = np.ndarray(shape=(1, 224, 224, 3), dtype=np.float32)
    data[0] = normalized_image_array

    # Make predictions
    prediction = model.predict(data)
    index = np.argmax(prediction)
    class_name = class_names[index][2:]
    confidence_score = float(prediction[0][index])

    return render_template("results.html", class_name=class_name, confidence_score=confidence_score)

if __name__ == "__main__":
    app.run(debug=True)
