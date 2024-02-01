import csv
from db import db_berlinstartupjobs, db_wanted, db_web3, db_weworkremotely


def save_to_file(file_name, site, jobs):
    file = open(
        f"./Python/Job_Scraper/file/{file_name}_{site}.csv",
        "w",
        encoding="UTF-8",
        newline="",
    )
    writer = csv.writer(file)

    writer.writerow(["Title", "Company", "Description", "Link"])

    for job in jobs:
        writer.writerow([job.title, job.company, job.description, job.url])

    file.close()


def keyword_db(site):
    if site == "berlinstartupjobs":
        return db_berlinstartupjobs
    if site == "weworkremotely":
        return db_weworkremotely
    if site == "web3":
        return db_web3
    if site == "wanted":
        return db_wanted
