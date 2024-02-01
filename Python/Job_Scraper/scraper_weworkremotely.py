import requests
from bs4 import BeautifulSoup
from file import save_to_file


class Job:
    def __init__(self, title, company_name, region, position, link):
        self.title = title
        self.company = company_name
        self.location = region
        self.position = position
        self.url = link


class Jobs_weworkremotely:
    def __init__(self, keyword):
        self.keyword = keyword
        self.jobs = []

    def get_content(self):
        response = requests.get(
            f"https://weworkremotely.com/remote-jobs/search?utf8=%E2%9C%93&term={self.keyword}"
        )
        self.content = response.content

    def scrape_page(self):
        soup = BeautifulSoup(self.content, "html.parser")

        jobss = soup.find_all("section", class_="jobs")

        for jobs in jobss:
            jobs = jobs.find_all("li")[:-1]
            for job in jobs:
                title = job.find("span", class_="title").text
                company, position, region = job.find_all("span", class_="company")
                company = company.text
                position = position.text
                region = region.text
                url = job.find("div", class_="tooltip").next_sibling["href"]
                url = f"https://weworkremotely.com{url}"

                job = Job(title, company, region, position, url)

                self.jobs.append(job)

    def make_csv(self):
        save_to_file(self.keyword, self.jobs)
