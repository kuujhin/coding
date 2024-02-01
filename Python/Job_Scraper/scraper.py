from scraper_wanted import Jobs_wanted
from scraper_weworkremotely import Jobs_weworkremotely
from scraper_berlinstartupjobs import Jobs_berlinstartupjobs
from scraper_web3 import Jobs_web3


def scrape_page(keyword, db, Jobs):
    if keyword in db:
        jobs = db[keyword]
    else:
        jobs_db = Jobs(keyword)
        jobs_db.get_content()
        jobs_db.scrape_page()
        jobs = jobs_db.jobs
        db[keyword] = jobs
    return jobs
