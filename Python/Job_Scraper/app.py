from flask import Flask, render_template, request, redirect, send_file
from scraper import Jobs
from file import save_to_file

app = Flask(__name__)

db = {}


@app.route("/")
def home():
    return render_template("home.html", name="jhin")


@app.route("/search")
def search():
    keyword = request.args.get("keyword")
    if keyword == None:
        return redirect("/")
    if keyword in db:
        jobs = db[keyword]
    else:
        jobs_db = Jobs(keyword)
        jobs_db.get_content()
        jobs_db.scrape_page()
        jobs = jobs_db.jobs
        db[keyword] = jobs
    return render_template("search.html", keyword=keyword, jobs=jobs)


@app.route("/export")
def export():
    keyword = request.args.get("keyword")
    if keyword == None:
        return redirect("/")
    if keyword not in db:
        return redirect(f"/search?keyword={keyword}")
    save_to_file(keyword, db[keyword])
    return send_file(f"./file/{keyword}.csv", as_attachment=True)


app.run("0.0.0.0", debug=True)
