from flask import Flask, request, render_template

app = Flask(__name__, template_folder='templates', static_folder='static')

username = "Mwihoti"
description = "I love developing web applications."
description += "And this text was created with Jinja"

projects = [
    {
        'id': 1,
        'title': 'E-commerce Website',
        'description': 'A website where you can connect with Mwihoti',
        'author': 'Mwihoti',
        'category': 'Web Development'
    },
    {
        'id': 2,
        'title': 'Flask Website',
        'description': 'A website made with Flask',
        'author': 'Mwihoti',
        'category': 'Web Development'
    },
    {
        'id': 3,
        'title': 'Cool Mobile App',
        'description': 'An app that does cool stuff',
        'author': 'Mwihoti',
        'category': 'Mobile Development'
    }
]


@app.route('/')
def hello_world():
    return render_template('index.html', username=username, description=description, projects = projects)

@app.route('/about')
def about():
    return render_template('about.html', username=username)

@app.route('/contact')
def contact():
   return render_template('contact.html', username=username)

if __name__ == '__main__':
    app.run(debug=True)

