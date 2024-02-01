from flask import Flask, render_template, request, redirect, send_file
from scraper_wanted import Jobs_wanted
from scraper_weworkremotely import Jobs_weworkremotely
from scraper_berlinstartupjobs import Jobs_berlinstartupjobs
from scraper_web3 import Jobs_web3
from file import save_to_file
from scraper import scrape_page

app = Flask(__name__)

db_berlinstartupjobs = {}
db_weworkremotely = {}
db_web3 = {}
db_wanted = {}


@app.route("/")
def home():
    return render_template("home.html", name="jhin")


@app.route("/search")
def search():
    keyword = request.args.get("keyword")
    site = request.args.get("site")

    if keyword == None:
        return redirect("/")

    if site == "berlinstartupjobs":
        jobs = scrape_page(keyword, db_berlinstartupjobs, Jobs_berlinstartupjobs)

    if site == "weworkremotely":
        jobs = scrape_page(keyword, db_weworkremotely, Jobs_weworkremotely)

    if site == "web3":
        jobs = scrape_page(keyword, db_web3, Jobs_web3)

    if site == "wanted":
        jobs = scrape_page(keyword, db_wanted, Jobs_wanted)

    return render_template(f"search.html", keyword=keyword, site=site, jobs=jobs)


@app.route("/export")
def export():
    keyword = request.args.get("keyword")
    site = request.args.get("site")

    if site == "berlinstartupjobs":
        db = db_berlinstartupjobs
    if site == "weworkremotely":
        db = db_weworkremotely
    if site == "web3":
        db = db_web3
    if site == "wanted":
        db = db_wanted

    if keyword == None:
        return redirect("/")
    if keyword not in db:
        return redirect(f"/search?keyword={keyword}")
    save_to_file(keyword, site, db[keyword])
    return send_file(f"./file/{keyword}_{site}.csv", as_attachment=True)


app.run("0.0.0.0", debug=True)
