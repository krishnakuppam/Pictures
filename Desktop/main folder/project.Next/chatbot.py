from flask import Flask, request, render_template, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import numpy as np
import os

# Initialize the Flask app
app = Flask(__name__)

# Load the trained model
MODEL_PATH = 'vgg16_flower_classifier.h5'
model = load_model(MODEL_PATH)

# Define class labels (these should match the class indices used during training)
class_labels = ['bluebell', 'buttercup', 'colts_foot', 'cowslip', 'crocus', 'daffodil', 'daisy', 'dandelion', 'fritillary', 'iris', 'lily_valley', 'pansy', 'snowdrop', 'sunflower', 'tigerlily', 'tulip', 'windflower']

# Define image dimensions
IMG_WIDTH, IMG_HEIGHT = 224, 224

# Define the route for the home page
@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Check if an image is uploaded
        if 'file' not in request.files:
            return render_template('index.html', prediction='No file uploaded')

        file = request.files['file']

        if file.filename == '':
            return render_template('index.html', prediction='No file selected')

        if file:
            # Save the file to a temporary location
            file_path = os.path.join('static/uploads', file.filename)
            file.save(file_path)

            # Preprocess the image
            img = load_img(file_path, target_size=(IMG_WIDTH, IMG_HEIGHT))
            img_array = img_to_array(img) / 255.0
            img_array = np.expand_dims(img_array, axis=0)

            # Predict the class
            prediction = model.predict(img_array)
            predicted_class = class_labels[np.argmax(prediction)]

            return render_template('index.html', prediction=f'Predicted Class: {predicted_class}', image_path=file_path)

    return render_template('index.html')

# Define the route for API predictions
@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    if file:
        # Save the file to a temporary location
        file_path = os.path.join('static/uploads', file.filename)
        file.save(file_path)

        # Preprocess the image
        img = load_img(file_path, target_size=(IMG_WIDTH, IMG_HEIGHT))
        img_array = img_to_array(img) / 255.0
        img_array = np.expand_dims(img_array, axis=0)

        # Predict the class
        prediction = model.predict(img_array)
        predicted_class = class_labels[np.argmax(prediction)]

        return jsonify({'predicted_class': predicted_class})

# Run the app
if __name__ == '__main__':
    # Ensure the upload directory exists
    os.makedirs('static/uploads', exist_ok=True)
    app.run(debug=True)
