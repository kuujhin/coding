import requests
from bs4 import BeautifulSoup
from file import save_to_file


class Job:
    def __init__(self, title, company_name, location, link):
        self.title = title
        self.company = company_name
        self.location = location
        self.url = link


class Jobs_web3:
    def __init__(self, keyword):
        self.keyword = keyword
        self.jobs = []

    def get_content(self):
        response = requests.get(
            f"https://web3.career/{self.keyword}-jobs",
            headers={
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            },
        )
        self.content = response.text

    def scrape_page(self):
        soup = BeautifulSoup(self.content, "html.parser")

        jobs = soup.find_all("tr", class_="table_row")

        for job in jobs:
            title = job.find("h2", class_="my-primary")
            company_and_location = job.find_all("td", class_="job-location-mobile")
            url = job.find("a")["href"]

            if title == None or company_and_location == [] or url == None:
                continue

            title = title.text
            company_name = company_and_location[0].find("h3").text
            locations = company_and_location[1].find_all("a")
            location = ""
            for l in locations:
                location = f"{l.text} {location}"
            if location == "":
                location = "Remote"
            url = f"https://web3.career{url}"

            job = Job(title, company_name, location, url)

            self.jobs.append(job)

    def make_csv(self):
        save_to_file(self.keyword, self.jobs)
