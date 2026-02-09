Iris Classifier — AI-Powered Flower Prediction

An interactive web application that predicts the species of an Iris flower using a PyTorch neural network deployed through a FastAPI backend and a modern JavaScript frontend.
Users input flower measurements, and the model instantly predicts one of the three Iris species:

Iris-setosa

Iris-versicolor

Iris-virginica

The model is trained on the classic Iris dataset and exposed as a REST API online.

Live Demo

Frontend (Netlify):
https://guileless-croquembouche-a619d5.netlify.app/

Backend (Render):
https://iris-backend-0hxk.onrender.com

Try entering flower measurements and see the prediction instantly.

Model Overview

The neural network is implemented in PyTorch:

4 input features

2 hidden layers (8 → 9 neurons)

3-class output

Trained using CrossEntropyLoss + Adam optimizer

Achieves strong accuracy on the Iris dataset

The trained weights are stored in model.pt and loaded by the FastAPI server.

Technologies Used
Backend

Python

PyTorch

FastAPI

Uvicorn

Render (hosting)

Frontend

HTML

CSS

Vanilla JavaScript

Netlify (hosting)

How It Works

User enters flower measurements into the web form.

The frontend sends a request to the FastAPI endpoint:

/predict?sepal_length=...&sepal_width=...&petal_length=...&petal_width=...


FastAPI loads the PyTorch model and runs inference.

The backend returns a JSON response:

{
    "prediction": "Iris-virginica"
}


The frontend displays the prediction instantly on the page.

Setting Up Locally
1. Clone the repository
git clone https://github.com/fckyeslol/iris-classifier
cd iris-classifier

2. Install backend dependencies
cd backend
pip install -r requirements.txt

3. Run the FastAPI server
uvicorn main:app --reload


Backend available at:

http://127.0.0.1:8000

4. Open the frontend

Just open frontend/index.html in your browser or serve it with:

cd frontend
python -m http.server 5500

Deployment
Frontend

Hosted on Netlify — simply drag and drop the frontend/ folder.

Backend

Hosted on Render using:

uvicorn main:app --host 0.0.0.0 --port $PORT

License

This project is open-source under the MIT License.
