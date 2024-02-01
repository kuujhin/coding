from job import Jobs
from static_scraper import scrape_berlinstartupjobs, scrape_web3, scrape_weworkremotely
from dynamic_scraper import scrape_wanted
from db import db_berlinstartupjobs, db_wanted, db_web3, db_weworkremotely


def scrape_from_scraper(keyword, db, f):
    if keyword in db:
        jobs = db[keyword]
    else:
        jobs_db = Jobs(keyword)
        jobs_db.get_content(f)
        jobs = jobs_db.jobs
        db[keyword] = jobs
    return jobs


def scrape(keyword, site):
    if site == "berlinstartupjobs":
        return scrape_from_scraper(
            keyword, db_berlinstartupjobs, scrape_berlinstartupjobs
        )
    if site == "weworkremotely":
        return scrape_from_scraper(keyword, db_weworkremotely, scrape_weworkremotely)
    if site == "web3":
        return scrape_from_scraper(keyword, db_web3, scrape_web3)
    if site == "wanted":
        return scrape_from_scraper(keyword, db_wanted, scrape_wanted)


def update_from_scraper(keyword, db, f):
    jobs_db = Jobs(keyword)
    jobs_db.get_content(f)
    jobs = jobs_db.jobs
    db[keyword] = jobs
    return jobs


def rescrape(keyword, site):
    if site == "berlinstartupjobs":
        db_berlinstartupjobs.pop(keyword)
        return update_from_scraper(
            keyword, db_berlinstartupjobs, scrape_berlinstartupjobs
        )
    if site == "weworkremotely":
        return update_from_scraper(keyword, db_weworkremotely, scrape_weworkremotely)
    if site == "web3":
        return update_from_scraper(keyword, db_web3, scrape_web3)
    if site == "wanted":
        return update_from_scraper(keyword, db_wanted, scrape_wanted)
