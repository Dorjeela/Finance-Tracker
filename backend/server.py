from flask import Flask, jsonify, request
from transformers import pipeline
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


sentinemnt_analysis = pipeline("sentiment-analysis")

# route for seeing the data
@app.route('/analyze', methods=["POST"])
def analyze_sentiment():
    data = request.get_json()
    text = data.get("text", "")
    result = sentinemnt_analysis(text)
    return jsonify(result[0])


if __name__ == '__main__':
    app.run(debug=True)