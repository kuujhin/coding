from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html", name="jhin")


@app.route("/search")
def hello():
    return render_template("search.html")


app.run("0.0.0.0", debug=True)
