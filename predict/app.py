from flask import Flask, request, jsonify
import requests
import pandas as pd
import joblib
from dotenv import load_dotenv
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

model = joblib.load('hof_model.pkl')
scaler = joblib.load('scaler.pkl')


@app.route("/api/predict", methods=["POST"])
def get_player_stats():
    data = request.get_json()

    player_stats = pd.DataFrame({
        "YRS": [data['YRS']], # YRS
        "G": [data['G']], # G
        "H": [data['H']], # H
        "2B": [data['doubles']], # 2B
        "HR": [data['HR']], # HR
        "RBI": [data['RBI']], # RBI
        "BA": [data['BA']] # BA
    })
    scaled_player_stats = scaler.transform(player_stats)

    model_prediction = model.predict(scaled_player_stats)

    return jsonify("Hall of Fame: Yes" if model_prediction[0] == 1 else "Hall of Fame: No")