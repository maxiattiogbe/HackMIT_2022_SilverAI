from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


@app.route('/scores', methods=['GET'])
@cross_origin()
def setScores():
    speakScore = 1
    accuracy = 2
    lateral = 3
    vertical = 4
    payload = {"speakScore": speakScore, "accuracy": accuracy, "lateral": lateral, "vertical": vertical}
    return jsonify(payload);

@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == "__main__":
    app.run(debug=True)
