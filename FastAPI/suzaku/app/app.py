from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/about')
def about():
    return 'About me'

@app.route('/contact', methods = ['POST', 'GET'])
def contact():
    if request.method == 'POST':
        return 'You are using POST'
    elif request.method == 'GET':
        return 'You are using GET'
    

if __name__ == '__main__':
    app.run()

