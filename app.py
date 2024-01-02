# app.py
from flask import Flask, render_template, jsonify, request
import random

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/play", methods=["POST"])
def play():
    guess_row = int(request.form["guessRow"])
    guess_col = int(request.form["guessCol"])

    ship_row = random.randint(0, 4)
    ship_col = random.randint(0, 4)

    if guess_row == ship_row and guess_col == ship_col:
        return jsonify({"result": "win", "ship_row": ship_row, "ship_col": ship_col})
    else:
        return jsonify({"result": "miss", "ship_row": ship_row, "ship_col": ship_col})

if __name__ == "__main__":
    app.run(debug=True)
