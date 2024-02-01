from playwright.sync_api import sync_playwright
import time
from bs4 import BeautifulSoup
import csv
from file import save_to_file

keywords = ["flutter", "nextjs", "kotlin"]


class Job:
    def __init__(self, title, company_name, location, reward, link):
        self.title = title
        self.company = company_name
        self.location = location
        self.reward = reward
        self.url = link


class Jobs:
    def __init__(self, keyword):
        self.keyword = keyword
        self.jobs = []

    def get_content(self):
        p = sync_playwright().start()
        browser = p.chromium.launch(headless=False)
        page = browser.new_page()

        page.goto(f"https://www.wanted.co.kr/search?query={self.keyword}&tab=position")
        time.sleep(3)

        for _ in range(5):
            page.keyboard.down("End")
            time.sleep(2)

        self.content = page.content()

        p.stop()

    def scrape_page(self):
        soup = BeautifulSoup(self.content, "html.parser")

        jobs = soup.find_all("div", class_="JobCard_container__FqChn")

        for job in jobs:
            link = f"https://www.wanted.co.kr{job.find('a')['href']}"
            title = job.find("strong", class_="JobCard_title__ddkwM").text
            company_name = job.find("span", class_="JobCard_companyName__vZMqJ").text
            location = job.find("span", class_="JobCard_location__2EOr5").text
            reward = job.find("span", class_="JobCard_reward__sdyHn").text

            job = Job(title, company_name, location, reward, link)

            self.jobs.append(job)

    def make_csv(self):
        save_to_file(self.keyword, self.jobs)


# for keyword in keywords:
#     jobs_db = Jobs(keyword)
#     jobs_db.get_content()
#     jobs_db.scrape_page()
#     jobs_db.make_csv()
