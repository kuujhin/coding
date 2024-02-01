from flask import Flask, render_template, request, redirect, send_file
from file import save_to_file
from scraper import scrape
from static_scraper import scrape_berlinstartupjobs, scrape_weworkremotely, scrape_web3
from dynamic_scraper import scrape_wanted
from db import db_weworkremotely, db_berlinstartupjobs, db_wanted, db_web3

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html", name="jhin")


@app.route("/search")
def search():
    keyword = request.args.get("keyword")
    site = request.args.get("site")

    if keyword == None:
        return redirect("/")

    jobs = scrape(keyword, site)

    return render_template(f"search.html", keyword=keyword, site=site, jobs=jobs)


@app.route("/export")
def export():
    keyword = request.args.get("keyword")
    site = request.args.get("site")

    if keyword == None:
        return redirect("/")

    if site == "berlinstartupjobs":
        db = db_berlinstartupjobs
    if site == "weworkremotely":
        db = db_weworkremotely
    if site == "web3":
        db = db_web3
    if site == "wanted":
        db = db_wanted

    if keyword not in db:
        return redirect(f"/search?keyword={keyword}")
    save_to_file(keyword, site, db[keyword])
    return send_file(f"./file/{keyword}_{site}.csv", as_attachment=True)


app.run("0.0.0.0", debug=True)
