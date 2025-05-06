# Fantasy App

## Description
A full-stack application that allows users to browse player statistics, filter data, and predict a player's chance of being inducted into the Baseball Hall of Fame using a machine learning model.

## Tech Stack
- **Frontend**: React
- **Backend**: Java + Spring Boot
- **Database**: PostgreSQL (CSV-imported player stats)
- **Machine Learning**: Python (Scikit-learn / Pandas / NumPy)

## Features
###  User Interface (React Frontend)
- Browse player stats with **dynamic filters** (e.g., Hits, Home Runs).
- Filter players based on:
  - Hits thresholds (e.g., 1000, 2000, 3000+)
  - Home Run totals
  - Players in the Hall of Fame vs Not in the Hall of Fame
- Submit custom stats to get a **Hall of Fame prediction** via the ML model.

### ⚙️ Backend (Spring Boot + Java)
- **CRUD API** for managing player data.
- **Endpoints for filtering** by key statistics.
- Integrated with PostgreSQL to fetch player data.

### 🧠 Machine Learning (Python)
- Trained ML model predicts Hall of Fame induction.
- Accepts user-inputted stats and returns prediction.
- Uses real historical data to train and evaluate the model.

### 🗄️ Database (PostgreSQL)
- Player data imported from CSV into PostgreSQL.
- Efficient queries with indexed columns for quick filtering.
- Normalized schema for clean data relationships (players, stats, predictions).
