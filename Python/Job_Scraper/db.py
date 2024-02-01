import csv
import os

from job import Job

db_berlinstartupjobs = {}
db_weworkremotely = {}
db_web3 = {}
db_wanted = {}

jobs = []


def get_from_db():
    os.chdir("C:/Users/kdoub/Desktop/coding/Python/Job_Scraper/file")
    files = os.listdir()
    for file in files:
        filename = os.path.splitext(file)[0]
        keyword, site = filename.split("_")
        read_from_file(keyword, site)


def read_from_file(keyword, site):
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

            jobs.append(Job(title, company, description, link))

        db_berlinstartupjobs[keyword] = jobs

    if site == "weworkremotely":
        for row in reader:
            title, company, description, link = row

            jobs.append(Job(title, company, description, link))

        db_weworkremotely[keyword] = jobs

    if site == "web3":
        for row in reader:
            title, company, description, link = row

            jobs.append(Job(title, company, description, link))

        db_web3[keyword] = jobs

    if site == "wanted":
        for row in reader:
            title, company, description, link = row

            jobs.append(Job(title, company, description, link))

        db_wanted[keyword] = jobs
