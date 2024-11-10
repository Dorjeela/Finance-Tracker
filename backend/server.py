from flask import Flask
import datetime

x = datetime.datetime.now()

app = Flask(__name__)

# route for seeing the data
@app.route('/data')
def getTime():
    return {
        "name": "Dorjee Lama",
        "age": 18,
        "grad_date": 2028,
        "date_time": x
    }


if __name__ == '__main__':
    app.run(debug=True)