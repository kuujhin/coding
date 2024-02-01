import csv
import os

from job import Job

db_berlinstartupjobs = {}
db_weworkremotely = {}
db_web3 = {}
db_wanted = {}


def get_from_db():
    os.chdir("C:/Users/kdoub/Desktop/coding/Python/Job_Scraper/file")
    files = os.listdir()
    for file in files:
        filename = os.path.splitext(file)[0]
        keyword, site = filename.split("_")
        read_from_file(keyword, site)


def read_from_file(keyword, site):
    jobs = []

    file = open(
        f"{keyword}_{site}.csv",
        "r",
        encoding="UTF-8",
        newline="",
    )
    reader = csv.reader(file)

    if site == "berlinstartupjobs":
        for row in reader:
            title, company, description, link = row
            if title == "Title":
                continue
            jobs.append(Job(title, company, description, link))
        db_berlinstartupjobs[keyword] = jobs

    elif site == "weworkremotely":
        for row in reader:
            title, company, description, link = row
            if title == "Title":
                continue
            jobs.append(Job(title, company, description, link))
        db_weworkremotely[keyword] = jobs

    elif site == "web3":
        for row in reader:
            title, company, description, link = row
            if title == "Title":
                continue
            jobs.append(Job(title, company, description, link))
        db_web3[keyword] = jobs

    elif site == "wanted":
        for row in reader:
            title, company, description, link = row
            if title == "Title":
                continue
            jobs.append(Job(title, company, description, link))
        db_wanted[keyword] = jobs
