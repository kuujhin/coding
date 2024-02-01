from flask import Flask, render_template, request
from scraper import Jobs

app = Flask(__name__)

db = {}


@app.route("/")
def home():
    return render_template("home.html", name="jhin")


@app.route("/search")
def search():
    keyword = request.args.get("keyword")
    if keyword in db:
        jobs = db[keyword]
    else:
        jobs_db = Jobs(keyword)
        jobs_db.get_content()
        jobs_db.scrape_page()
        jobs = jobs_db.jobs
        db[keyword] = jobs
    return render_template("search.html", keyword=keyword, jobs=jobs)


app.run("0.0.0.0", debug=True)
