import requests
from bs4 import BeautifulSoup

all_jobs = []


def scrape_page(url):
    response = requests.get(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        },
    )
    soup = BeautifulSoup(response.text, "html.parser")
    jobs = soup.find_all("li", class_="bjs-jlid")
    for job in jobs:
        company_name = job.find("a", class_="bjs-jlid__b").text
        job_title = job.find("h4", class_="bjs-jlid__h").find("a").text
        description = job.find("div", class_="bjs-jlid__description").text
        job_link = job.find("h4", class_="bjs-jlid__h").find("a")["href"]

        job_data = {
            "name": company_name,
            "title": job_title,
            "description": description,
            "url": job_link,
        }
        all_jobs.append(job_data)


def scrape(url):
    response = requests.get(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        },
    )
    soup = BeautifulSoup(response.text, "html.parser")

    pages = len(soup.find_all("a", class_="page-numbers"))
    if pages != 0:
        for i in range(pages):
            scrape_page(f"{url}page/{i+1}")
    else:
        scrape_page(url)


scrape("https://berlinstartupjobs.com/engineering/")

print(len(all_jobs))
# response = requests.get(
#     "https://berlinstartupjobs.com/engineering/",
#     headers={
#         "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
#     }
# )

skills = ["python", "typescript", "javascript", "rust"]

for skill in skills:
    all_jobs = []
    scrape(f"https://berlinstartupjobs.com/skill-areas/{skill}/")
    print(len(all_jobs))
