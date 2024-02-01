import requests
from bs4 import BeautifulSoup
from file import save_to_file
from job import Job


class Jobs_berlinstartupjobs:
    def __init__(self, keyword):
        self.keyword = keyword
        self.jobs = []

    def get_content(self):
        response = requests.get(
            f"https://berlinstartupjobs.com/skill-areas/{self.keyword}/",
            headers={
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            },
        )
        self.content = response.text

    def scrape_page(self):
        soup = BeautifulSoup(self.content, "html.parser")

        jobs = soup.find_all("li", class_="bjs-jlid")

        for job in jobs:
            title = job.find("h4", class_="bjs-jlid__h").find("a").text
            company_name = job.find("a", class_="bjs-jlid__b").text
            description = job.find("div", class_="bjs-jlid__description").text
            url = job.find("h4", class_="bjs-jlid__h").find("a")["href"]

            job = Job(title, company_name, description, url)

            self.jobs.append(job)

    def make_csv(self):
        save_to_file(self.keyword, self.jobs)
